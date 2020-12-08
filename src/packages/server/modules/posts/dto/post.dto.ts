import { Field, InputType } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class PostDto {
    @Field()
    @MaxLength(40)
    title: string;

    @Field()
    @Length(30, 255)
    postText?: string;

    @Field(type => String)
    author: string;
}