import React from 'react';

 
export default function BoardOfDirector() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1  lg:ml-20 lg:mr-20 lg:mt-16 text-start flex flex-col items-center justify-center bg-transparent">
        <div>
        <h1 className='lg:text-3xl font-serif text-center'>About Us</h1>
       <p className='lg:mt-3 mr-6'> In the early 1970s, as India steadily advanced towards industrialization, Tiva Rewire-Tata International Vehicle Applications Pvt.Ltd
        emerged as a pioneering force. Founded in 1971 by the entrepreneurial spirit of Tiva Rewire, the group has experienced remarkable growth since its inception.
       Starting with spare parts trading, the group strategically expanded its op-erations to include automobile workshops, fleet transport, body and paint work, accessories, and job work.
       Today, with a strong Pan-India presence, Tiva Rewire Group has become a formidable entity, encompassing numerous companies across various sectors.
        The group proudly employs over 850 dedicated professionals.With more than five decades of experience in the automotive sector.
        Tiva Rewire Group has diversified into areas such as commercial vehicle sales, services, warehousing, logistics, fuel stations, fabrication of special purpose vehicles and closed containers, and the manufactur-ing of lubricants, greases, and car care products.
        Backed by India's most skilled professional and technical team, along with a robust financial foundation, Tiva Rewire Automobiles con-tinues to grow stronger. The group has carved a niche in the highly competitive Indian au-tomotive industry, driven by determination, quality, and perseverance. </p>
        </div>
        <div className="max-w-screen-xl  lg:mt-9 bg-[#FEFFFB] flex flex-col lg:flex-row items-center justify-center  ">
      
            <div className=" sm:w-5/6 p-14 bg-orange-200 text-start lg:justify-center border-4 ">
                <div>
                   
                    <p className="text-black text-justify font-serif lg:mt-2 mt-3 ">
                    <b className='font-serif text-14px'>"Pioneering Green Solutions for a Brighter Future"<br/> "Turning Waste into Opportunity for a Brighter Future.”<br/></b><br/>
                    Our commitment goes beyond merely recycling vehicles. We are dedicated to ensuring that every vehicle we process is dismantled and disposed of in the most environmentally responsible manner, adhering strictly to MoRTH, CPCB, and MPCB guidelines. Our goal is to turn the end of a vehicle's life into the beginning of a sustainable future for our planet 
                    </p>
          
                </div>
            </div>
            <div className="sm:w-1/2 mt-1 flex justify-center animate__animated animate__fadeInLeft lg:justify-center">
                <div className="image text-center bg-orange-200	border-4  ">
                    <img className="h-[30vh] w-[45vh] lg:h-[37vh] lg:w-[55vh] " src={require('../Assets/BoardOfDirectors/Rajeer_CEO-removebg-preview.png')} alt="Oncology" />
                    <h2 className="my-4   font-serif lg:text-3xl text-black ">
                    Mr. Rajeev Batra<span className="text-amber-900"></span>
                    </h2>
                    <h2 className='font-serif text-2xl'>Chief Executive Officer</h2>
                </div>
            </div>
        </div>

        <div className="max-w-screen-xl  flex flex-col md:flex-row items-center justify-center">
         <div className=" p-10 lg:w-1/2  ">
                <div className="image text-center  bg-orange-200 	border-4">
                    <img className="h-[30vh] w-[45vh] lg:h-[38vh] lg:w-[55vh]" src={require('../Assets/BoardOfDirectors/Anjani_CFO_BG-removebg-preview.png')} alt="Panchakarma"/>
                    <h2 className=" font-serif lg:text-3xl text-3xl  mt-0 lg:mt-10">
                        Mr. Anjani Kumar Srivastava <span className=""></span>
                    </h2>
                    <p className=' font-serif text-2xl'>Chief Finance Officer</p>
                </div>
            </div>

            <div className="sm:w-5/6 sm:mt-2 mb-1 p-4 bg-orange-200 text-start lg:justify-center border-4">
                <div className="mt-1">
                    <p className="font-serif p-6 mt-1 justify-start  ">
                    <b className='font-serif p-4 text-14px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"From Rust to Renewal, for a Cleaner Future."<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Eco-Smart and Cost-Savvy, We Care Everyone"</b><br/><br/>
                    "At TIVA, our financial strategies are deeply aligned with our commitment to environmental stewardship. By optimizing our operations and ensuring compliance with MoRTH, CPCB, and MPCB guidelines, we not only create value for our stakeholders but also contribute to a sustainable economy. For our customers, scrapping their vehicles with us means not only adhering to legal requirements but also receiving fair and transparent valuations, efficient service, and the peace of mind that their vehicle's end is contributing to a cleaner environment. We turn their old vehicles into new opportunities, driving both profitability and positive environmental impact.
                   
                    </p>
                 </div>
            </div>
        </div>
    </div>

  );
}
 
