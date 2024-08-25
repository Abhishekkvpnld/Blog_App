export const uploadToCloudinary = async (file, folder) => {
    try {
      const response = await cloudinary.v2.uploader.upload(file.tempFilePath, {
        folder: folder,
        upload_preset: "Blog_App",
      });
      return response;
    } catch (error) {
      console.error("Cloudinary Error:", error);
      throw new Error("Failed to upload image to Cloudinary ❌");
    }
  };