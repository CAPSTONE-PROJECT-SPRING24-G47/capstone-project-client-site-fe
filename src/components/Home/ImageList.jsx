// ImageList.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageList = ({ images }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 4, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 4, images.length - 4));
    };

    return (
        <div className="relative">
            <div className="grid grid-cols-2 gap-0">
                {images.slice(startIndex, startIndex + 4).map((image, index) => (
                    <div key={index} className="col-span-1">
                        <img src={image} alt={`Region ${startIndex + index + 1}`} className="rounded-md w-full h-32 object-cover mb-0" />
                    </div>
                ))}
            </div>
            {/* Lờ mờ và Icon tiến/lùi */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between opacity-50">
                <button className="text-white text-4xl" onClick={handlePrev}><FaChevronLeft /></button>
                <button className="text-white text-4xl" onClick={handleNext}><FaChevronRight /></button>
            </div>
        </div>
    );
};

ImageList.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ImageList;
