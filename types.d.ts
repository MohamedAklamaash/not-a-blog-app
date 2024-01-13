interface routeProps {
    route: string,
    label: string,
    isActive?: boolean,
    onclick?: () => void
}

type ButtonProps = {
    text: string,
    onclick?: () => void,
    aria: string
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