import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import { pusherServer } from '@/app/helpers/pusher';
import { authOptions } from '@/app/helpers/authOptions';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const session = await getServerSession(request, response, authOptions);

  if (!session?.user?.email) {
    return response.status(401);
  }

  const socketId = request.body.socket_id;
  const channel = request.body.channel_name;
  const data = {
    user_id: session.user.email,
  };

  const authResponse = pusherServer.authorizeChannel(socketId, channel, data);
  return response.send(authResponse);
};

export default handler;
