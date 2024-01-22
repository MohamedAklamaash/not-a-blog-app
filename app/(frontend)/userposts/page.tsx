import React from 'react';
import prisma from "@/lib/prismadb";
import { getCurrentUser } from '@/actions/getCurrentUser';
const UserPosts = async()=>{
    const user = await getCurrentUser();
    const posts = await prisma.blog.findMany({
        where:{
            userEmail:user?.email ?? undefined,
        },
        orderBy:{
            createdAt:"desc"
        },
        include:{
            user:true
        }
    });
    const deleteAPost = async(id:string)=>{
        await prisma.blog.delete({
            where:{
                id
            },
        })
    }
    return (
        <div>
            {posts.length}
        </div>
    )
}

export default UserPosts;