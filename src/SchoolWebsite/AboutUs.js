import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const AboutUs = () => {
  useScrollToTop();

  const cardsData = [
    {
      image: require('./Sirimg/Sandip D. Shete2.jpg'),
      title: "Mr. Sandip D. Shete",
      description: "(Founder and Managing Director Prabhuram Gurukul, Nashik)"
    },
    {
      image: require('./Founders/Ram.jpeg'),
      title: "Dr. Shubham S. Shete",
      description: "(Founder and Principal of Prabhuram Gurukul)"
    },
    {
      image: require('./Sirimg/Sunita S. Shete2.jpg'),
      title: "Mrs. Sunita S. Shete",
      description: "(Founder and Principal, Prabhuram Gurukul, Nashik)"
    },
    {
      image: require('./Sirimg/Urmila .jpg'),
      title: "Mrs. Urmila Sahane",
      description: "(Mrs. Urmila Sahane Chief Teacher Prabhuram Gurukul, Nashik)"
    },
    {
      image: require('./Sirimg/A4.jpg'),
      title: "Miss Suhani S. Shete",
      description: "(Yoga and Meditation Teacher, Prabhuram Gurukul, Nashik)"
    },
  ];

  const firstHalf = cardsData.slice(0, 3);
  const secondHalf = cardsData.slice(3, 5);

  return (
    <div className="container bg-gray-100 max-w-full px-8 py-6 mx-auto" data-aos="fade-up max-w-7xl">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-8">About Us</h1>
      <p className="text-xl text-center mb-12">
        Welcome to Prabhuram Gurukul, where ancient wisdom meets modern education to cultivate well-rounded, value-driven individuals. Our curriculum integrates stories from the Ramayana, Mahabharata, Vedas, and Puranas, promoting both theoretical and applied knowledge. We focus on holistic development through sports, yoga, meditation, music, and dance, while providing dedicated healthcare facilities. Language proficiency in Sanskrit, English, Marathi, and Hindi is emphasized for effective communication. Join us on a journey of self-discovery, cultural enrichment, and lifelong learning.
      </p>
      <div className='flex justify-center'>
        <Link to="/aboutuspage" className="flex items-center text-white hover:text-blue-900 border bg-blue-500 hover:bg-blue-200 border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
          <span>Read More</span>
          <svg
            className="w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* First row with three images */}
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105" data-aos="zoom-in">
              <img src={typeof card.image === 'string' ? card.image : card.image.default} alt={card.title} className="w-full h-96 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {/* Second row with two images */}
        {secondHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105" data-aos="zoom-in">
              <img src={typeof card.image === 'string' ? card.image : card.image.default} alt={card.title} className="w-full h-96 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video section can be added here */}

    </div>
  );
};

export default AboutUs;
