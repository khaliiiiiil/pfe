import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category{
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
  
    @Prop()
    name: String;

    @Prop()
    company: string;

    @Prop()
    type: String;


    @Prop()
    createDate: Date;
}


export const CategorySchema = SchemaFactory.createForClass(Category);