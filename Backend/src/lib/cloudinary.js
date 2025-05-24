import { v2 as cloudinary } from "cloudinary";

import { config } from 'dotenv';

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    apikey: process.env.CLOUDINARY_APIKEY,
    apisecret: process.env.CLOUDINARY_APISECRET,
}

);

export default cloudinary;