import mongoose, { Schema,model } from "mongoose";

export interface IImageSchema{
    subjectName:string;
    assetId:string;
    publicId:string;
    width?:string;
    height?:string;
    format?:string;
    resourceType?:string;
    bytes?:string;
    url:string;
    folder:string;
    uploadedAt:string,
    expiresAfter:Date

}

const imageSchema = new Schema<IImageSchema>({
    subjectName: {
        type: String,
        required: true
    },
    assetId: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    width: {
        type: String
    },
    height: {
        type: String
    },
    format: {
        type: String
    },
    resourceType: {
        type: String,
    },
    bytes: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    folder: {
        type: String
    },
    uploadedAt: {
        type: String,
        required: true
    },

},{timestamps:true})

const Image  = mongoose.models.images || mongoose.model("images", imageSchema);
export default Image