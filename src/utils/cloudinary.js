import {v2 as cloudinary} from 'cloudinary';
import e from 'express';
import fs from 'fs';

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (file) => {
    try {
        if(!file) return null;

        const result = await cloudinary.uploader.upload(file, {resource_type: "auto"})
        console.log("CLOUDINARY UPLOAD RESULT:", result.url);
        return result;
    }
    catch(error){
        fs.unlinkSync(file);
        return null;
    }
}


export {uploadOnCloudinary};