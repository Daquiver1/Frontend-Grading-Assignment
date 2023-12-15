
function Footer() {


    return (
        <footer className="bg-rich-black text-white w-full">
            <div className="text-center">
                <div className="flex flex-wrap justify-center sm:justify-around lg:justify-between h-auto sm:h-80">
                    <div className="p-4 sm:p-10">
                        <h4 className="pb-2 font-bold text-18">Help & Support</h4>
                        <ul>
                            <li><a href="" className="text-gray-300">Submit Missing Grade</a></li>
                            <li><a href="" className="text-gray-300">FAQs</a></li>
                            <li><a href="" className="text-gray-300">Technical Assistance</a></li>
                            <li><a href="" className="text-gray-300">Troubleshooting Guide</a></li>
                        </ul>
                    </div>

                    <div className="p-4 sm:p-10">
                        <h4 className="pb-2 font-bold text-18">Contact</h4>
                        <ul>
                            <li><a href="" className="text-gray-300">Contact Us</a></li>
                            <li><a href="" className="text-gray-300">Office Hours</a></li>
                            <li><a href="" className="text-gray-300">Live Chat Support</a></li>
                            <li><a href="" className="text-gray-300">Email Support</a></li>
                        </ul>
                    </div>

                    <div className="p-4 sm:p-10">
                        <h4 className="pb-2 font-bold text-18">Resources</h4>
                        <ul>
                            <li><a href="" className="text-gray-300">Academic Calendar</a></li>
                            <li><a href="" className="text-gray-300">Student Handbook</a></li>
                            <li><a href="" className="text-gray-300">Policies</a></li>
                            <li><a href="" className="text-gray-300">Useful Links</a></li>
                        </ul>
                    </div>
                </div>

                <p className="text-center pb-4 sm:pb-12">
                    Copyright © 2023 All rights reserved
                </p>
            </div>
        </footer>

    )
}

export default Footer
