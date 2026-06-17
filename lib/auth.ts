import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Admin Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
          return {
            id: 'admin',
            name: 'Administrator',
            email,
            role: 'Admin',
          } as any;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        (token as any).role = (user as any).role;
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as any).role = (token as any).role;
      }

      return session;
    },
  },
};
