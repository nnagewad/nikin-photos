import { NAME_CLOUDINARY, KEY_CLOUDINARY, SECRET_CLOUDINARY } from './cloudinaryApi.js';

export default async function fetchAllCloudinaryImages() {
  const CLOUD_NAME = NAME_CLOUDINARY;
  const API_KEY = KEY_CLOUDINARY;
  const API_SECRET = SECRET_CLOUDINARY;
  const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

  let images = [];
  let nextCursor = null;

  try {
    do {
      let url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?max_results=100`;
      if (nextCursor) {
        url += `&next_cursor=${nextCursor}`;
      }

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
      images = images.concat(data.resources || []);

      nextCursor = data.next_cursor || null; // Move to the next page if available
    } while (nextCursor); // Continue fetching if next_cursor exists

    console.log(`Fetched ${images.length} images.`);
    return images;
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return []; // Return an empty array if an error occurs
  }
}