'use client';

import { User } from '@prisma/client';
import Image from 'next/image';
import useActiveList from '../hooks/useActiveList';

interface AvatarProps {
  user?: User;
}

const Avatar = ({ user }: AvatarProps) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative flex justify-center items-center">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          alt="Avatar"
          src={user?.image || '/images/avatar-placeholder.png'}
          sizes="(min-width: 768px) 11rem, 9rem"
          fill
        />
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
      )}
    </div>
  );
};

export default Avatar;
