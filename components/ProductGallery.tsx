
import React, { useState } from 'react';
import { Image } from '../types';

interface ProductGalleryProps {
  images: Image[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0 md:pr-2 max-h-[580px]">
        {images.map((image) => (
          <div
            key={image.id}
            className={`cursor-pointer border-2 rounded-lg transition-all duration-200 ${selectedImage.id === image.id ? 'border-green-600' : 'border-transparent'}`}
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.url} 
              alt={`Thumbnail ${image.id}`} 
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="flex-1">
        <img 
          src={selectedImage.url} 
          alt="Selected product view"
          className="w-full h-auto object-cover rounded-lg shadow-md aspect-square"
        />
      </div>
    </div>
  );
};
