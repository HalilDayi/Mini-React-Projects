import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ImageInfo from "../components/ImageInfo"
import data from "../data"
import "../style.css"

const ImageBox = ({ images }) => {
  const [clicked, setClicked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 4000); // 4 saniye aralıklarla güncelle

    return () => clearInterval(interval);
  }, [images, isHovered]);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setClicked(oldClicked => !oldClicked)
  }

  const currentInfo = data[currentImageIndex]

  return (
    <div className="info-image-container">
      {clicked && <ImageInfo key={currentInfo.id} info={currentInfo} />}
      <div className="image-box">
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="ImageBox-images"
          initial={{ x: '60vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-60vw' }}
          transition={{  duration: 1}}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          onClick={handleClick}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          whileHover={{ scale: 1.2 }} // Hover sırasında büyüme efekti
        />
      </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageBox;
