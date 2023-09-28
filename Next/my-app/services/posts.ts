import Post from "@/types/Post";
import PostComment from "@/types/PostComment";

export async function getPosts() {
    const endpoint = process.env.NEXT_PUBLIC_POSTS_ENDPOINT as RequestInfo | URL;

    const result = await fetch(endpoint);
    const jsonResult: Post[] = await result.json();

    return jsonResult;
}

export async function getPostById(id: number) {
    const endpoint = process.env.NEXT_PUBLIC_POSTS_ENDPOINT as RequestInfo | URL;

    const result = await fetch(`${endpoint}/${id}`);
    const jsonResult: Post = await result.json();

    return jsonResult;
}

export async function getPostComments(postId: number) {
    const endpoint = process.env.NEXT_PUBLIC_POSTS_ENDPOINT as RequestInfo | URL;

    const result = await fetch(`${endpoint}/${postId}/comments`);
    const jsonResult: PostComment[] = await result.json();

    return jsonResult;
}