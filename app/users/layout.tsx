import { ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

interface UsersLayoutProps {
  children: ReactNode;
}

const UsersLayout = async ({ children }: UsersLayoutProps) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
