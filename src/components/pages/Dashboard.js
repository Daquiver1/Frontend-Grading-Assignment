import React from "react";

function Dashboard() {
    return (
        <div className="flex flex-col h-screen">
            
            <h1 className="text-3xl font-bold text-center pb-8">Dashboard</h1>

            
            <div className="flex justify-center mb-8">
                <img
                    className="rounded-full h-32 w-32 border-2 border-gray-300 shadow-md"
                    src="https://th.bing.com/th/id/OIP.c_coQYquUBSEX2BsA4E0VQHaHa?rs=1&pid=ImgDetMain"
                    alt="Profile Picture"
                />
            </div>

            
            <div className="flex flex-col pb-8">
                <div className="text-center text-lg font-semibold">
                    <h4>Paa Kwesi</h4>
                    <p>Student ID: 123456</p>
                    <p>Email: paa.kwesi@example.com</p>
                </div>
                <div className="flex justify-center mt-4">
                    <a href="/missing">
                        <button className="inline-block px-4 py-2 bg-red-500 text-white rounded-lg">
                            Alert Missing Grades
                        </button>
                    </a>
                </div>
            </div>

            {/* Courses Table */}
            <div className="overflow-auto rounded-lg shadow-md">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 font-semibold">Course Name</th>
                            <th className="px-4 py-2 font-semibold">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td className="px-4 py-2">Software Engineering</td>
                            <td className="px-4 py-2">A</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Mathematics</td>
                            <td className="px-4 py-2">B</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Information Technology</td>
                            <td className="px-4 py-2">A+</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Information Studies</td>
                            <td className="px-4 py-2">C+</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Engineering</td>
                            <td className="px-4 py-2">B+</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Medicine</td>
                            <td className="px-4 py-2">D</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
