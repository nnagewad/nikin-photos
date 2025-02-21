import {NAME_CLOUDINARY, KEY_CLOUDINARY, SECRET_CLOUDINARY} from './cloudinaryApi.js';

export default async function () {
  const CLOUD_NAME = NAME_CLOUDINARY;
  const API_KEY = KEY_CLOUDINARY;
  const API_SECRET = SECRET_CLOUDINARY;

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`;
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Cloudinary API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.resources || []; // Returns an array of image objects
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return []; // Return an empty array if an error occurs
  }
};
