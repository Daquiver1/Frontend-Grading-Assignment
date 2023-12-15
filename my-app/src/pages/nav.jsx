import React from "react";

const Nav = () => {
    // eslint-disable-next-line no-unused-vars
    const content = <>
        <div className="">
            <ul>
                <link to="Dashboard">
                    <li>Dashboard</li>
                </link>
                <link to="GradeReportPage">
                    <li>Grade Report</li>
                </link>
                <link to="MissingGradeForm">
                    <li>Missing Grade Form</li>
                </link>
                <link to="HelpSupportPage">
                    <li>Help & Support</li>
                </link>
                <link to="InstructorContactPage">
                    <li>Contact Intsructor</li>
                </link>
            </ul>
        </div>
    </>

    return (
        <nav>
            <div className="z-50 flex justify-between py-4 text-white h-10vh lg:py-5 px-15">
                <div className="flex items-center flex-1">
                    <span className="font-bold text-3x1">Logo</span>
                </div>
                <div className="items-center justify-end hidden font-normal lg:flex md:flex lg: felx-1">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <link to="Dashboard">
                                <li>Dashboard</li>
                            </link>
                            <link to="GradeReportPage">
                                <li>Grade Report</li>
                            </link>
                            <link to="MissingGradeForm">
                                <li>Missing Grade Form</li>
                            </link>
                            <link to="HelpSupportPage">
                                <li>Help & Support</li>
                            </link>
                            <link to="InstructorContactPage">
                                <li>Contact Intsructor</li>
                            </link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;