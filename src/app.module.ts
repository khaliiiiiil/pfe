import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './app.controller';
import { CategoryService } from './app.service';
import { Category, CategorySchema } from './database/schemas/category.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://k14512415:khalil1451@cluster0.qej0gup.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}