document.addEventListener("DOMContentLoaded", async function () {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/your-cloud-name/resources/image`;
  
    try {
      // Fetch the image resources from Cloudinary API
      const response = await fetch(cloudinaryUrl);
      const data = await response.json();
  
      // Handle the fetched image data
      const imageContainer = document.getElementById("image-container");
  
      if (data.resources && data.resources.length > 0) {
        data.resources.forEach((image) => {
          // Create an image element for each image resource
          const imgElement = document.createElement("img");
          imgElement.src = image.secure_url; // Secure URL for HTTPS
          imgElement.alt = image.public_id;
          imgElement.width = 300; // Adjust size as needed
          imgElement.height = 300; // Adjust size as needed
  
          // Append image to the container
          imageContainer.appendChild(imgElement);
        });
      } else {
        // Show a message if no images are found
        imageContainer.innerHTML = "<p>No images found.</p>";
      }
    } catch (error) {
      console.error("Error fetching images from Cloudinary:", error);
    }
  });
  