'use client';

import { signOut } from 'next-auth/react';

interface UsersProps {}

const Users = ({}: UsersProps) => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export default Users;
