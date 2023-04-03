import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Types, UpdateQuery } from 'mongoose';
import { CategoryService } from './app.service';
import { Category, CategoryDocument } from './database/schemas/category.schema';
import {CreateCategoryDto} from './database/dtos/create-category.dto'
import { Delete } from '@nestjs/common/decorators';


@Controller('Categories')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  async creatCategory(@Body() createCategoryDto : CreateCategoryDto) : Promise<Category>{
      return this.CategoryService.create(createCategoryDto)
  }

  @Get()
  async getCategorys() : Promise<Category[]>{
      return this.CategoryService.find();
  }

  @Get(':id')
  async getCategory(@Param('id') id : Types.ObjectId) : Promise<Category>{
      return this.CategoryService.findOne(id);
  }

  @Patch(':id')
  async updateCategory(@Param('id') id : Types.ObjectId, @Body() update : UpdateQuery<CategoryDocument>) : Promise<Category>{
      return this.CategoryService.findOneAndUpdate(id , update);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id : Types.ObjectId) : Promise<Category>{
    return this.CategoryService.delete(id);
  }
}


