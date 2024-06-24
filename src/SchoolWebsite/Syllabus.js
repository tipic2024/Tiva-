
import React from 'react';

const images = [
    { heading: 'Syllabus', img: require('./GalleryImages/DocScanner 21-Jun-2024 5-43 pm.pdf.png') },
    { heading: 'Outdoor Sports', img: require('./GalleryImages/SyllabusOutdoor.jpg') },
    { heading: 'Indor Sports', img: require('./GalleryImages/SyllabusIndoor.jpg') },
];

const Syllabus = () => {
    return (
        <div className="flex flex-col items-center bg-[#EBEEF3]">
            {images.map((image, index) => (
                <div key={index} className="mb-8">
                    {/* <h2 className="text-2xl mb-4">{image.heading}</h2> */}
                    <img
                        src={image.img}
                        alt={image.heading}
                        className="w-[210mm] h-auto"
                    />
                </div>
            ))}
        </div>
    );
};

export default Syllabus;
