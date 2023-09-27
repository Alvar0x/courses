import Post from "@/types/Post";

export async function getPosts() {
    const endpoint = process.env.NEXT_PUBLIC_POSTS_ENDPOINT as RequestInfo | URL;

    const result = await fetch(endpoint);
    const jsonResult: Post[] = await result.json();

    return jsonResult;
}

export async function getPostById(id: number) {
    const endpoint = process.env.NEXT_PUBLIC_POSTS_ENDPOINT as RequestInfo | URL;

    const result = await fetch(endpoint + '/' + id);
    const jsonResult: Post = await result.json();

    return jsonResult;
}