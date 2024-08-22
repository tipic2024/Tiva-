import React from 'react';

 
export default function BoardOfDirector() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1  lg:ml-20 lg:mr-20 lg:mt-16 text-start flex flex-col items-center justify-center bg-transparent">
        <div>
        <h1 className='lg:text-3xl font-serif text-center'>About Us</h1>
       <p className='lg:mt-3'> In the early 1970s, as India steadily advanced towards industrialization, Tiva Rewire-Tata International Vehicle Applications Pvt.Ltd
        emerged as a pioneering force. Founded in 1971 by the entrepreneurial spirit of Tiva Rewire, the group has experienced remarkable growth since its inception.
       Starting with spare parts trading, the group strategically expanded its op-erations to include automobile workshops, fleet transport, body and paint work, accessories, and job work.
       Today, with a strong Pan-India presence, Tiva Rewire Group has become a formidable entity, encompassing numerous companies across various sectors.
        The group proudly employs over 850 dedicated professionals.With more than five decades of experience in the automotive sector.
        Tiva Rewire Group has diversified into areas such as commercial vehicle sales, services, warehousing, logistics, fuel stations, fabrication of special purpose vehicles and closed containers, and the manufactur-ing of lubricants, greases, and car care products.
        Backed by India's most skilled professional and technical team, along with a robust financial foundation, Tiva Rewire Automobiles con-tinues to grow stronger. The group has carved a niche in the highly competitive Indian au-tomotive industry, driven by determination, quality, and perseverance. </p>
        </div>
        <div className="max-w-screen-xl  lg:mt-9 bg-[#FEFFFB] flex flex-col lg:flex-row items-center justify-center  ">
      
            <div className=" sm:w-1/2 p-5 text-start lg:justify-center ">
                <div className="">
                    <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black ">
                    Mr. Rajeev Batra<span className="text-amber-900"></span>
                    </h2>
                    <p className='font-serif'>Chief Executive Officer</p>
                    <p className="text-black text-justify font-serif lg:mt-2 mt-2 ">
                    Mr. Rajeev Batra holds a Master of Technology degree in Mechanical Engineering from Ranchi University. With over 23 years of extensive experience in the automobile industry, he has developed significant expertise in manufacturing processes across various companies, including Tata Motors, Tata AutoComp, and York. In addition to his technical skills, Mr. Batra excels in factory administration, costing, financial management, marketing, and market research and analysis. He is also recognized for his effective leadership and strong teamwork abilities
                    </p>
          
                </div>
            </div>
            <div className="p-3 lg:w-1/2 mt-3 flex justify-center animate__animated animate__fadeInLeft lg:justify-center">
                <div className="image text-center  lg:mr- ">
                    <img className="h-[30vh] w-[45vh] lg:h-[55vh] lg:w-[90vh] " src={require('../Assets/BoardOfDirectors/Rajeev_CEO_img.png')} alt="Oncology" />
                </div>
            </div>
        </div>

        <div className="max-w-screen-xl mx-auto lg:mt-16 flex flex-col md:flex-row items-center justify-center">
        <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center ">
                <div className="image text-center">
                    <img className="h-[30vh] w-[45vh] lg:h-[40vh] lg:w-[55vh]" src={require('../Assets/BoardOfDirectors/Anjani_CFO_img.png')} alt="Panchakarma"/>
                </div>
            </div>
            <div className="sm:w-1/2 p-5 text-left ml-4">
                <div className="">
                    <h2 className="my-4 font-serif lg:text-3xl text-3xl  mt-0 lg:mt-10">
                        Mr. Anjani Kumar Srivastava <span className=""></span>
                    </h2>
                    <p className=' font-serif'>Chief Executive Officer</p>

                    <p className="font-serif mt-4 justify-start mr-20 ">
                    Mr. Anjani Kumar Srivastava, a Post Graduate in Business Finance from IIF, Delhi, has 27 years of experience. He began at Narmada Leather, a Tata subsidiary, and later joined Tata International, excelling in finance, accounts, and system implementation. Currently, he oversees finance, banking, taxation, and legal activities.
                    </p>
          
                 </div>
                
            </div>

        </div>

        {/* <div className="max-w-screen-xl  mt-0 flex flex-col lg:flex-row items-center justify-center lg:mt-16  ">
      
            <div className=" sm:w-1/2 p-5 text-start lg:justify-center ">
                <div className="">
                    <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black ">
                    Name<span className=""></span>
                    </h2>
                    <p className='font-serif'>JOINT MANAGING DIRECTOR</p>
                    <p className="text-black text-justify font-serif lg:mt-2 mt-2 ">
                        Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.
                        It encompasses a wide range of disciplines, including medical oncology, surgical oncology, and radiation oncology.
                        Medical oncologists specialize in using chemotherapy, targeted therapy, immunotherapy, and other medications to treat cancer.
                        Surgical oncologists perform surgical procedures to remove tumors and cancerous tissues,
                        often working in conjunction with other specialists. Radiation oncologists use radiation therapy
                        to target and destroy cancer cells while minimizing damage to surrounding healthy tissues.
                    </p>
          
                </div>
            </div>
            <div className="p-3 lg:w-1/2 mt-3 flex justify-center  lg:justify-center">
                <div className="image text-center  lg:mr- ">
                    <img className="h-[30vh] w-[45vh] lg:h-[40vh] lg:w-[55vh] " src={require('../Images/C5.jpg')} alt="Oncology" />
                </div>
            </div>
        </div>



        <div className="max-w-screen-xl mx-auto mt-1 flex flex-col md:flex-row items-center justify-center lg:mt-16 ">
            <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center ">
                <div className="image text-center">
                    <img className="h-[30vh] w-[45vh] lg:h-[40vh] lg:w-[55vh]" src={require('../Images/C7.jpg')} alt="Panchakarma"/>
                </div>
            </div>
            <div className="sm:w-1/2 p-5 text-center lg:text-right ">
                <div className="text">
                    <h2 className="my-4 font-serif lg:text-3xl text-2xl text-start mt-0">
                        Name<span className=""></span>
                    </h2>
                    <p className='text-start font-serif'>INDEPENDENT DIRECTOR</p>
                    <p className="text-justify font-serif lg : mt-2">
                        Panchakarma is an ancient Ayurvedic detoxification and rejuvenation therapy consisting of five
                        therapeutic procedures: Vamana (therapeutic vomiting), Virechana (purgation), Basti (medicated enema),
                        Nasya (nasal administration of herbs), and Raktamokshana (blood purification). It aims to balance the body's
                        doshas, remove toxins, and restore overall health and well-being. Customized treatment plans are created based
                        on individual needs, and the process involves various therapies like massage, steam, dietary adjustments, and
                        detoxification procedures. Panchakarma is renowned for its ability to alleviate chronic conditions,
                        reduce stress, and promote holistic wellness under the guidance of trained Ayurvedic practitioners.
                    </p>
          
                </div>
            </div>
        </div>

        <div className="max-w-screen-xl  mt-0 flex flex-col lg:flex-row items-center justify-center lg:mt-16  ">
      
            <div className=" sm:w-1/2 p-5 text-start lg:justify-center ">
                <div className="">
                    <h2 className="my-4  text-2xl font-serif lg:text-3xl text-black ">
                     Name<span className=""></span>
                    </h2>
                    <p className='font-serif'>INDEPENDENT DIRECTOR</p>
                    <p className="text-black text-justify font-serif lg:mt-2 mt-2 ">
                        Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.
                        It encompasses a wide range of disciplines, including medical oncology, surgical oncology, and radiation oncology.
                        Medical oncologists specialize in using chemotherapy, targeted therapy, immunotherapy, and other medications to treat cancer.
                        Surgical oncologists perform surgical procedures to remove tumors and cancerous tissues,
                        often working in conjunction with other specialists. Radiation oncologists use radiation therapy
                        to target and destroy cancer cells while minimizing damage to surrounding healthy tissues.
                    </p>
    
                </div>
            </div>
            <div className="p-3 lg:w-1/2 mt-3 flex justify-center  lg:justify-center">
                <div className="image text-center  lg:mr- ">
                    <img className="h-[30vh] w-[45vh] lg:h-[40vh] lg:w-[55vh] " src={require('../Images/C5.jpg')} alt="Oncology" />
                </div>
            </div>
        </div>





        <div className="max-w-screen-xl mx-auto mt-1 flex flex-col md:flex-row items-center justify-center lg:mt-16 ">
            <div className="sm:w-1/2 p-10 lg:w-1/2 flex justify-center">
                <div className="image text-center">
                    <img className="h-[30vh] w-[45vh] lg:h-[40vh] lg:w-[55vh]" src={require('../Images/C12.jpg')} alt="Panchakarma"/>
                </div>
            </div>
            <div className="sm:w-1/2 p-5 text-center lg:text-left ">
                <div className="text">
                    <h2 className="my-4   font-serif lg:text-3xl text-2xl   mt-0">
                        Name<span className=""></span>
                    </h2>
                    <p className='font-serif text-start'>INDEPENDENT DIRECTOR</p>
                    <p className=" text-justify font-serif">
                        Panchakarma is an ancient Ayurvedic detoxification and rejuvenation therapy consisting of five
                        therapeutic procedures: Vamana (therapeutic vomiting), Virechana (purgation), Basti (medicated enema),
                        Nasya (nasal administration of herbs), and Raktamokshana (blood purification). It aims to balance the body's
                        doshas, remove toxins, and restore overall health and well-being. Customized treatment plans are created based
                        on individual needs, and the process involves various therapies like massage, steam, dietary adjustments, and
                        detoxification procedures. Panchakarma is renowned for its ability to alleviate chronic conditions,
                        reduce stress, and promote holistic wellness under the guidance of trained Ayurvedic practitioners.
                    </p>
          
                </div>
            </div>
        </div> */}
    </div>

  );
}
 
