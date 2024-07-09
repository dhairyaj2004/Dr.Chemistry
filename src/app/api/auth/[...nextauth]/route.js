import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import connection from '../../../../dbConnection/dbConnection';
import User from '../../../../models/loginModel';
import bcryptjs from 'bcryptjs';

const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          await connection();
          
          const user = await User.findOne({ email: credentials.email });
          
          if (user) {
            const isValid = await bcryptjs.compare(credentials.password, user.password);
            console.log('Is Valid Password:', isValid);
            
            if (isValid) {
              return { id: user._id, name: user.username, email: user.email };
            } else {
              console.log('Invalid password');
              return null;
            }
          } else {
            console.log('User not found');
            return null;
          }
        } catch (error) {
          console.error('Error in Credentials authorization:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        try {
          await connection();
          console.log('Google Sign-in Profile:', profile.email);
          let user = await User.findOne({ email: profile.email });
          
          if (!user) {
            user = await User.create({
              email: profile.email,
              provider: 'google',
              createdAt: new Date(),
            });
          } else if (user.provider !== 'google') {
            // Handle case where user exists but used different provider
            console.log('User exists with different provider');
            // You might want to merge accounts or handle this case differently
          }
          
          return true;
        } catch (error) {
          console.error('Error in Google sign-in:', error);
          return false;
        }
      }
      return true;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NextAuth_SECRET,
  pages: {
    signIn: '/Login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };