import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(auth)/api/auth/[...nextauth]/route";
import prisma from "@/lib/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.email) {
            return null;
        }
        const currUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });
        if (!currUser) {
            return null;
        }
        return currUser;
    } catch (error) {
        console.log("Error in getting the details of the current user");
    }
}