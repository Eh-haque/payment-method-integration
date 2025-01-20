import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  stock: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
