
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 import img1 from "../Assets/refurbished/bumper.jpg"
import img2 from "../Assets/refurbished/mirror1.jpg"
import img3 from "../Assets/refurbished/stering.jpg"
import img4 from "../Assets/refurbished/headlight1.jpg"
import img5 from "../Assets/refurbished/clutch.jpg"
import img6 from "../Assets/refurbished/breaks.jpg"
import ConnectWithUs from './Componants/ConnectWithUs';





const cardsData = [

  {
    image: img1,
    title: "Bumper",
  description: "Get Ready for a Smashing Good Time! "
  },
  {
     image: img2 ,
    title: "Mirror",
    description: "Clear Vision, Confident Driving."
  },
  {
    image: img3 ,
    title: "Stering",
    description: "Take Control with Every Turn."
  },
  {
    image: img4,
    title: "Headlight",
    description: "Drive Safely with Brilliant Headlights."
  },
  {
    image: img5,
    title: "Clutch Plate",
    description: "Clutch Plates that Keep You in Control."
  },
  {
     image: img6,
     title: "Brake",
    description: "Powerful Brakes for Smooth, Reliable Stops."
  },
];

function SpareParts() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const firstHalf = cardsData.slice(0, 3);
  const secondHalf = cardsData.slice(3, 6);

  return (
    <div className="container mx-auto max-w-full px-8 py-6 bg-gray-100 shadow-lg rounded-lg items-center" data-aos="fade-up flex">
    <div className=' flex justify-center'><h1 className="text-3xl font-semibold font-serif text-black mb-6 text-left  ">Want To Buy Genuine Refurbished Spare Parts</h1></div>  
      <div className='flex '>
        <div className='lg:pr-24'><ConnectWithUs/></div>
        
        <div className='flex flex-col '>
            {/* First Row of Cards */}
            <div className="flex  justify-end max-w-7xl">
                    {firstHalf.map((card, index) => (
                        <div key={index} className="w-full sm:w-1/2  lg:w-60 p-2 lg:h-80">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden lg:flex-col h-full p-8" data-aos="zoom-in">
                                <img src={card.image} alt={card.title} className="w-full h-20 lg: object-cover" />
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
            {/* <hr className="border-t-2 border-gray-300 my-6" /> */}

            {/* Second Row of Cards  */}
            <div className=" flex justify-end">
         {secondHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-60  p-2 lg:h-80">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full p-8" data-aos="zoom-in">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
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
              <div className=''>
      
        </div>
      </div>
     
    </div>
    
  );
}

export default SpareParts;
