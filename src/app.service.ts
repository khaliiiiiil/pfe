import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {  FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { CreateCategoryDto } from "./database/dtos/create-category.dto";
import { Category, CategoryDocument } from "./database/schemas/category.schema";

@Injectable()
 export class CategoryService {
    constructor(@InjectModel(Category.name) protected readonly CategoryModel : Model<CategoryDocument>) {}

    async create (createCategoryDto : CreateCategoryDto) : Promise<Category>{
        const createdCategory = new this.CategoryModel({
            _id: new Types.ObjectId(),
            ...createCategoryDto
        });
        return createdCategory.save();
    }

    async find() : Promise<Category[]> {
        const query = this.CategoryModel.find().select('-location -dashboardPriotiy -placement -equipNumber -device');
        return query.exec();
    }

    async findOne(entityFilterQuery : FilterQuery<CategoryDocument>) : Promise<Category>{
        return this.CategoryModel.findById(entityFilterQuery).exec();
    }

    async findOneAndUpdate (entityFilterQuery : FilterQuery<CategoryDocument>, updatedCategory : UpdateQuery<CategoryDocument>) : Promise<Category>{
        return this.CategoryModel.findOneAndUpdate(
            entityFilterQuery, 
            updatedCategory, {new : true}
        ).exec();
    }

    async delete(entityFilterQuery : FilterQuery<CategoryDocument>) : Promise<Category>{
        return this.CategoryModel.findByIdAndRemove(entityFilterQuery)
    }
}
