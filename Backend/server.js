import app from './app.js';
const PORT = process.env.PORT || 3000;
import cloudinary from 'cloudinary';
cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_CLIENT_NAME,
    api_key : process.env.CLOUDINARY_CLIENT_API,
    api_secret : process.env.CLOUDINARY_CLIENT_SECRET
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})