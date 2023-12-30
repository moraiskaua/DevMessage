import { getServerSession } from 'next-auth';
import { authOptions } from '../helpers/authOptions';

const getSession = async () => {
  return await getServerSession(authOptions);
};

export default getSession;
