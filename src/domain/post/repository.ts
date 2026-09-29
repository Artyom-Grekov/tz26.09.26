import type { Post, CreatePostInput } from "./entity.js";

export interface Repository {
    getAll(category?: string, take?: number): Post[];
    getById(id: number): Post | undefined;
    addPost(data: CreatePostInput): Promise<Post>;
}