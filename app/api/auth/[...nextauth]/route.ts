import { authOptions } from '@/app/helpers/authOptions';
import NextAuth from 'next-auth/next';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
