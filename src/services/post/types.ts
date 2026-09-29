import type {
    Post,
    CreatePostInput
} from "../../domain/post/entity.js";

export interface PostService {
    getPosts(category?: string, take?: number): Post[];
    getPostById(id: number): Post | undefined;
    createPost(data: CreatePostInput): Promise<Post>;
}