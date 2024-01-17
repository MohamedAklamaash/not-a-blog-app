"use server"

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const image = formData.get("image") as string;
    const category = formData.get("category") as string;
    const userEmail = formData.get("email") as string;
    await prisma.blog.create({
        data: {
            img: image,
            title,
            desc,
            category,
            userEmail,
        }
    })
    revalidatePath("/create");
}

export async function deletePost(formData: FormData) {
    const id = formData.get("postId") as string;
    await prisma.blog.delete({
        where: {
            id
        }
    });
    revalidatePath("/userposts");
}