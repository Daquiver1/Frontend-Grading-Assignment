const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();

  uploadData.append('file', file);
  uploadData.append('upload_preset', upload_preset);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: 'post',
      body: uploadData, // Pass the FormData object here
    });

    if (!res.ok) {
      throw new Error(`Failed to upload image to Cloudinary. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    return null; // Handle the error as needed in your application
  }
};

export default uploadImageToCloudinary;
