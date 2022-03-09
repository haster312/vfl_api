import { Document } from 'mongoose';

export interface IImage extends Document {
    "width": number,
    "height": number,
    "url": string
}