import { FormEvent } from "react";

interface routeProps {
    route: string,
    label: string,
    isActive?: boolean,
    onclick?: () => void
}

type ButtonProps = {
    text: string,
    onclick?: () => void,
    aria: string,
    action?: boolean,
    type?: "button" | "submit" | "reset"
}

interface TagProps {
    text: string[]
}

interface BlogData {
    id: number;
    title: string;
    image_path: string;
    paragraph: string;
    featured: boolean;
    topPost: boolean;
    tags: string[];
    authorImage: string;
    authorName: string;
    publishDate: string;
    latestPost?: undefined;
}

interface AuthContextProps {
    children: React.ReactNode
}

interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
}

interface FormProps {
    children?: React.ReactNode,
    action?: (formData: FormData) => Promise<void | boolean>;
    className?: string;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

interface inputProps {
    name?: string,
    type?: string,
    placeholder?: string,
    value?: string | number | readonly string[] | undefined,
}

interface userTypes {
    id: string,
    userName: string,
    email: string,
    emailVerified: Date | string | null,
    image: string | null
};

interface PostTypes {
    id: string,
    title: string,
    img: string,
    desc: string,
    featured: boolean,
    topPost: boolean,
    category: string,
    authorImage: string,
    authorName: string,
    publishedAt: string,
    createdAt: string,
    user: User;
}