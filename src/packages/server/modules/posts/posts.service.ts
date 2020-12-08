import { Injectable } from '@nestjs/common';
import { PostModel } from './models/post.model';
import {PostDto} from './dto/post.dto'

@Injectable()
export class PostsService {
    /**
     * MOCK
     * Put some real business logic here
     * Left for demonstration purposes
     */

    async create(data: PostDto): Promise<PostModel> {
        return {} as any;
    }

    async findOneById(id: string): Promise<PostModel> {
        return {} as any;
    }

    async findAll(): Promise<PostModel[]> {
        return [] as PostModel[];
    }

    async remove(id: string): Promise<boolean> {
        return true;
    }
}