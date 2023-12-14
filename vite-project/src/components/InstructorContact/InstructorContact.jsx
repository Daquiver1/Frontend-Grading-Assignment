import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import home4 from '../../assets/images/home4.jpg';
import videoIcon from '../../assets/images/video-icon.png';
import avatarIcon from '../../assets/images/avatar-icon.png';
import home9 from '../../assets/images/home9.jpeg';



const InstructorContact = () => {
  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Main About Image (Full Width) */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={home9} alt="About Main" className="rounded-lg shadow-md" />
        </div>

        {/* About Card Image (Beside Main Image) */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={aboutCardImg} alt="About Card" className="rounded-lg shadow-md" />
        </div>

        {/* About Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl leading-9 lg:leading-10 font-bold mb-4 lg:mb-6">
            Providing the Best Medical Services
          </h2>
          <p className="text-base lg:text-lg mb-4 lg:mb-6">
            At Care Prime, we are dedicated to delivering exceptional healthcare solutions that prioritize patient well-being and aim to enhance the overall quality of healthcare services.
          </p>
          <p className="text-base lg:text-lg">
            Our mission is to make healthcare more accessible, convenient, and patient-focused. We believe that by streamlining the appointment booking process and offering a seamless healthcare experience, we can contribute to the goal of prolonging lifespans through health initiatives.
          </p>
        </div>
      </div>


      <section>
                    <div className="container">
                        <div className="flex items-center justify-between flex-col lg:flex-row">
                            {/* =====featrue content=====*/}
                            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 xl:w-[670px]">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center sm:text-left">
        Get virtual treatment <br /> anytime.
    </h2>

    <ul className="pl-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl mt-4">
        <li className="text__para">1. Schedule the appointment directly.</li>
        <li className="text__para">2. Search for your physician here, and contact their office.</li>
        <li className="text__para">3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
    </ul>
 
</div>


                        {/* ===== feature img =====*/}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={home4} className="w-3/4" alt="" />

                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb[26px] rounded-[10px]">
                                
                                <div className="flex item-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] leading-5 text-headingColor font-[600]">
                                            Tue, 24
                                        </p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] leading-5 text-textColor font-[400]">
                                            10:00AM
                                        </p>
                                    </div>
                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                        <img src={videoIcon} alt=""/>
                                    </span>
                                </div>

                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-2 lg;py-[6px] lg:px-[10px] text-[8px] leading-[9px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                    Consultation
                                </div>

                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" />
                                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                                        Wayne Collins
                                    </h4>
                                </div>
                            </div>

                        </div>

                        </div>
                    </div>
                </section>
    </section>
    
      

  );
};

export default InstructorContact;
