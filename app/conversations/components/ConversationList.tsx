'use client';

import { FullConversationType } from '@/app/types';
import { Conversation } from '@prisma/client';

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList = ({ initialItems }: ConversationListProps) => {
  return <div>conversation list!</div>;
};

export default ConversationList;
