import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const Carousel = ({ images, title }) => {
  const containerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (event) => {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
        setIsAutoScrolling(false);
      };

      container.addEventListener('wheel', handleWheel);
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  useEffect(() => {
    let autoScrollInterval;
    if (isAutoScrolling && containerRef.current) {
      autoScrollInterval = setInterval(() => {
        const container = containerRef.current;
        if (container) {
          container.scrollLeft += 1;
        }
      }, 20);
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isAutoScrolling]);

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 200;
      setIsAutoScrolling(false);
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 200;
      setIsAutoScrolling(false);
    }
  };

  return (
    <div className="flex flex-col m-auto p-auto">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h1 className='text-4xl text-center font-bold sm:ml-12 py-5'>{title}</h1>
      </motion.div>
      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {images.map((image, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>
      <style jsx="true">{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .z-10 {
          z-index: 10;
        }
        .opacity-75 {
          opacity: 0.75;
        }
        .hover\:opacity-100:hover {
          opacity: 1;
        }
        .transition-opacity {
          transition: opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

const Carousel1 = () => {
  const images1 = [
    { src: require('./First Day of Prabhuram Gurukul/1 (1).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (2).jpg'), alt: 'Image 2' },
    // { src: require('./First Day of Prabhuram Gurukul/1 (4).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (5).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (6).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (7).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (8).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (9).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (10).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (11).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (12).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (13).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (14).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (15).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (16).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (17).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (18).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (19).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (21).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (22).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (23).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (24).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (25).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (26).jpg'), alt: 'Image 1' },
    { src: require('./First Day of Prabhuram Gurukul/1 (27).jpg'), alt: 'Image 1' },
   



   
  ];

  const images2 = [
    { src: require('./International Yoga Day/1 (1).jpg'), alt: 'Image 1' },
    { src: require('./International Yoga Day/1 (2).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (3).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (4).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (5).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (6).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (7).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (8).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (9).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (10).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (11).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (12).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (13).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (14).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (15).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (16).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (17).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (18).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (19).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (20).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (21).jpg'), alt: 'Image 2' },
    { src: require('./International Yoga Day/1 (22).jpg'), alt: 'Image 2' },










    
   




  ];

  return (
    <>
      <Carousel images={images1} title=" First Day of Prabhuram Gurukul" />
      <Carousel images={images2} title="International Yoga Day" />
    </>
  );
};

export default Carousel1;
