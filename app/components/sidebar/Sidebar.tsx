import { ReactNode } from 'react';
import DesktopSidebar from './DesktopSidebar';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = async ({ children }: SidebarProps) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
