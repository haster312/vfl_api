import { Schema } from 'mongoose';
import { IImage } from '../interface/i_image';

export const ImageSchema = new Schema<IImage>({
    "width": { type: Number, default: null },
    "height": { type: Number, default: null },
    "url": { type: String, required: true }
});