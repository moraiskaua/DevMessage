import { ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';
import getConversation from '../actions/getConversations';
import getUsers from '../actions/getUsers';

interface ConversationsLayoutProps {
  children: ReactNode;
}

const ConversationsLayout = async ({ children }: ConversationsLayoutProps) => {
  const conversations = await getConversation();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          title="Messages"
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
