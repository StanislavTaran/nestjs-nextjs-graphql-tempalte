import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    postText: string;

    @Field()
    creationDate: Date;

    @Field()
    author: string;
}