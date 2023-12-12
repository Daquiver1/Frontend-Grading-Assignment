import React from "react";

const Landing_cards = () => {
    return (
        <div className="flex" mt-9>
            <div class="max-w-sm mr-3 ml-4 mt-9 bg-white rounded overflow-hidden shadow-lg">
                <img class="w-full h-48 object-cover" src="https://placekitten.com/640/360" alt="Card Image" />
                <div class="px-5 py-3">
                <div class="font-bold text-xl mb-2">Grade Report Page</div>
                 <p class="text-gray-700 text-base">
                    Explore a detailed view of all your courses and their respective grades on our Grade Report Page. Effortlessly navigate through your academic journey with options to filter by semester or academic year.
                 </p>
                </div>
            </div>
            <div class="max-w-sm mr-4 ml-5 mt-9 bg-white rounded overflow-hidden shadow-lg">
                <img class="w-full h-48 object-cover" src="https://placekitten.com/640/360" alt="Card Image" />
                <div class="px-5 py-3">
                <div class="font-bold text-xl mb-2">Missing Grade Form</div>
                 <p class="text-gray-700 text-base">
                   Our Missing Grade Form website is designed to streamline the process of reporting and addressing missing and or unrecorded grades. Easily submit details about any missing grades, ensuring that your academic record remains accurate and up-to-date.
                 </p>
                </div>
            </div>
            <div class="w-[400px] mt-9 mr-4 ml-5 bg-white rounded overflow-hidden shadow-lg">
                <img class="w-full h-48 object-cover" src="https://placekitten.com/640/360" alt="Card Image" />
                <div class="px-5 py-3">
                <div class="font-bold text-xl mb-2">Instructor Contact Page</div>
                 <p class="text-gray-700 text-base">
                    Whether you have questions, need clarifications, or seek guidance on resolving missing grade concerns,our Instructor Contact Page is your direct link to communicate with our dedicated teaching staff regarding any missing grades in your academic profile.
                 </p>
                </div>
            </div>
        </div>
        
        
    )
}

export default Landing_cards