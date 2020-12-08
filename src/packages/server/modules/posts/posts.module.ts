import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import {PostsResolver} from "./posts.resolver";
import {DateScalar} from "../../common/scalars/date.scalar";

@Module({
  providers: [PostsService, PostsResolver, DateScalar]
})
export class PostsModule {}
