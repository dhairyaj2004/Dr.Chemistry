import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
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
        await connection();

        const user = await User.findOne({ email: credentials.email });

        if (user) {
          const isValid = await bcryptjs.compare(credentials.password, user.password);
          console.log('Input Password:', credentials.password);
          console.log('Stored Hashed Password:', user.password);
          console.log('Is Valid Password:', isValid);

          if (isValid) {
            return { id: user._id, name: user.username, email: user.email };
          } else {
            console.log('Invalid password');
          }
        } else {
          console.log('User not found');
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NextAuth_SECRET,
  pages: {
    signIn: "/Login",
  },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
