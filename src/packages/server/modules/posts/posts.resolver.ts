import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { PostDto } from './dto/post.dto';
import { PostModel } from './models/post.model';
import { PostsService } from './posts.service';

const pubSub = new PubSub();

@Resolver(of => PostModel)
export class PostsResolver {
    constructor(private readonly postsService: PostsService) {}

    @Query(returns => PostModel)
    async recipe(@Args('id') id: string): Promise<PostModel> {
        const post = await this.postsService.findOneById(id);
        if (!post) {
            throw new NotFoundException(id);
        }
        return post;
    }

    @Query(returns => [PostModel])
    posts(): Promise<PostModel[]> {
        return this.postsService.findAll();
    }

    @Mutation(returns => PostModel)
    async addPost(
        @Args('newPostData') newPostData: PostDto,
    ): Promise<PostModel> {
        const post = await this.postsService.create(newPostData);
        await pubSub.publish('recipeAdded', { postAdded: post });
        return post;
    }

    @Mutation(returns => Boolean)
    async removePost(@Args('id') id: string) {
        return this.postsService.remove(id);
    }

    @Subscription(returns => PostModel)
    recipeAdded() {
        return pubSub.asyncIterator('postAdded');
    }
}