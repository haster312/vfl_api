import { model } from "mongoose";
import { IImage } from "./interface/i_image";
import { ImageSchema } from "./schema/s_image";

const ImageModel = model<IImage>("image", ImageSchema);

export default ImageModel;