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
          let user = await User.findOne({ email: profile.email });
          if (!user) {
            user = await User.create({
              email: profile.email,
              provider: 'google',
              createdAt: new Date(),
            });
          } else if (user.provider !== 'google') {
            console.log('User exists with different provider');
            // Handle differently if needed
          }
          return true;
        } catch (error) {
          console.error('Error in Google sign-in:', error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.iat = Math.floor(Date.now() / 1000); // Update token issued at time
      }
      console.log('JWT Token:', token);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      console.log('Session:', session);
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60, // 2 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/Login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
