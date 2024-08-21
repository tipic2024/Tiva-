// EducationAndDevelopmentProgram.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cardsData = [
  {
    // image: "..\..\Assets\HeroSection\HeroSection.jpg",
    title: "Welcome to Tiva Rewir",
    description: "Tata international vehicle applications pvt ltd– Leading Scrap Dealers in Pune.              At Tiva Rewire, we're the top scrap car dealers in Pune, specializing in eco-friendly vehicle disposal. We handle all types of scrap, including cars and trucks, ensuring responsible and efficient disposal with a focus on sustainability. "
  },
  

];

function CardType1() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const firstHalf = cardsData.slice(0, 3);
  const secondHalf = cardsData.slice(3, 6);

  return (
    <div className="container mx-auto max-w-full px-8 py-6 bg-gray-100 shadow-lg rounded-lg" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-black mb-6 text-center">Why choose Us</h1>

      {/* First Row of Cards */}
      <div className="flex flex-wrap justify-center max-w-7xl">
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" data-aos="zoom-in">
              {/* <img src={require(`${card.image}`)} alt={card.title} className="w-full h-48 object-cover" /> */}
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

      {/* Separator */}
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Second Row of Cards */}
      <div className="flex flex-wrap justify-center">
        {secondHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" data-aos="zoom-in">
              <img src={require(`${card.image}`)} alt={card.title} className="w-full h-48 object-cover" />
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
    </div>
  );
}

export default CardType1;
