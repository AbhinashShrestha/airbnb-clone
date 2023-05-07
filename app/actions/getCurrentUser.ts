import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prisma from '@/app/libs/prismadb';

// export async function getSession(){
//     return await getServerSession(authOptions);
// }

export default async function getCurrentUser() {//direct communication to database using server components
    try {
        const session = await getServerSession(authOptions);

        if(!session?.user?.email){
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if(!currentUser){
            return null;
        }
        return currentUser;

    } catch (error: any) {
        return null;
    }
}