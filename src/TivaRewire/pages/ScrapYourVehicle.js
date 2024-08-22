import React, { Children } from 'react'


export default function Scrap() {
  return (
    <div className=" min-h-screen">
      {/* Navigation Bar
      <nav className="bg-blue-600 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={require('./logo_Tem.jpeg')} alt="School Logo" className="h-12 w-12 mr-4" />
          <span className="text-white text-2xl font-bold">Prabhuram Gurukul</span>
        </div>
        <ul className="flex space-x-8 text-white">
          <li><a href="#admission" className="hover:text-gray-300">Admission</a></li>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          <li><a href="#events" className="hover:text-gray-300">Events</a></li>
        </ul>
      </nav> */}

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className=" p-8 rounded shadow-md">
          <h1 className="text-4xl font-bold text-center mb-8"></h1>
          <div className="flex justify-center">
            <img src={require('../Assets/workflow.png')} alt="School Image" className="rounded shadow-lg w-3/5 h-97 w96" />
          </div>
          <p className="mt-8 text-lg ml-4 text-gray-700">
<div className='flex justify-center'>
<h1 className='text-4xl'>Steel and Metals Recovery: </h1>
</div>
<br/>
<div className='mb-7'>
Cars are made up of a significant amount of steel, aluminum, and other metals that can be recovered and reused. Crushing cars allows for the extraction and recycling of these materials, reducing the need for new raw materials.
</div>
<h1 className='text-4xl flex justify-center '>Reduces Waste: </h1>
<br/>
By recycling the materials from old cars, the amount of waste sent to landfills is significantly reduced.
Conserves Energy: Recycling metals from crushed cars consumes less energy compared to producing new metals from ore.
          </p>
        </div>
      </div>
   
    </div>
  );
  
}
