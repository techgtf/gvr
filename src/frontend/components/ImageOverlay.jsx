import { useState } from 'react';
import Overlay from 'react-overlay-component';

const ImageOverlay = ({ imageUrl, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeOverlay = () => setIsOpen(false);

  const configs = {
    animate: true,
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt={altText}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer max-w-full h-auto"
      />
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div className="relative">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto"
          />
          <button
            onClick={closeOverlay}
            className="absolute top-2 right-2 bg-transparent border-none text-white text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>
      </Overlay>
    </div>
  );
};

export default ImageOverlay;
