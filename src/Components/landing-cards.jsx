import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Missing_gradeform from '../Pages/Missing_gradeform';
import Gradereport from '../Pages/Gradereport';
import Dashboard from '../Pages/Dashboard';
import Help from '../Pages/Help';
import Instructorcontact from '../Pages/Instructorcontact';

const LandingCards = () => {
    return (
            <div className="flex flex-wrap mt-3">
                <Link to ="/Gradereport">
                <div class="max-w-sm mr-3 ml-4 mt-9 bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full h-48 object-cover" src="/Media_Files/gradereport.jpg" alt="Card Image" />
                    <div class="px-5 py-3">
                    <div class="font-bold text-xl mb-2">
                        Grade Report Page
                    </div>
                    <p class="text-gray-700 text-base">
                        Explore a detailed view of all your courses and their respective grades on our Grade Report Page. Effortlessly navigate through your academic journey with options to filter by semester or academic year.
                    </p>
                    </div>
                </div>
                </Link>
                <Link to ="/Dashboard">
                <div class="w-[400px] mt-9 mr-4 ml-5 bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full h-48 object-cover" src="/Media_Files/dashboard.jpg" alt="Card Image" />
                    <div class="px-5 py-3">
                    <div class="font-bold text-xl mb-2">Dashboard</div>
                    <p class="text-gray-700 text-base">

                    Welcome to your personalized dashboard! Here, you can access a comprehensive overview of your academic progress. Stay organized with timely alerts for any missing grades, ensuring that all coursework is accounted for. This feature helps you proactively address any gaps in your academic record.
                    </p>
                    </div>
                </div>
                </Link>
                <Link to ="/Instructorcontact">
                <div class="w-[400px] mt-9 mr-4 ml-[12px] bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full h-48 object-cover" src="/Media_Files/instructorcontact.jpg" alt="Card Image" />
                    <div class="px-5 py-3">
                    <div class="font-bold text-xl mb-2">Instructor Contact Page</div>
                    <p class="text-gray-700 text-base">
                        Whether you have questions, need clarifications, or seek guidance on resolving missing grade concerns,our Instructor Contact Page is your direct link to communicate with our dedicated teaching staff regarding any missing grades in your academic profile.
                    </p>
                    </div>
                </div>
                </Link>
                <Link to ="/Missing_gradeform">
                <div class="w-[400px] mt-9 mr-4 ml-[220px] bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full h-48 object-cover" src="/Media_Files/missingform.jpg" alt="Card Image" />
                    <div class="px-5 py-3">
                    <div class="font-bold text-xl mb-2">Missing Grade Form</div>
                    <p class="text-gray-700 text-base">
                    Our Missing Grade Form website is designed to streamline the process of reporting and addressing missing and or unrecorded grades. Easily submit details about any missing grades, ensuring that your academic record remains accurate and up-to-date.
                    </p>
                    </div>
                </div>
                </Link>
                <Link to ="/Help">
                <div class="w-[400px] mt-9 mr-[10px] ml-[12px] bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl">
                    <img class="w-full h-48 object-cover" src="/Media_Files/support.jpg" alt="Card Image" />
                    <div class="px-5 py-3">
                    <div class="font-bold text-xl mb-2">Help & Support</div>
                    <p class="text-gray-700 text-base">

                    Welcome to our Help and Support page! Our dedicated support team is ready to address your concerns and guide you through the process of resolving missing grade inquiries. Whether you need clarification on how to navigate the platform, or require technical assistance.
                    </p>
                    </div>
                </div>
                </Link>
            </div>
   
    )
}

export default LandingCards