import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    let studentData = JSON.parse(localStorage.getItem("student")) || 
                      {studentId: "",studentPassword: "",rememberStd: false};

    const [student, setStudent] = useState(studentData);

    // save to localStorage
    localStorage.setItem("student", JSON.stringify(student));

    return (
        <StudentContext.Provider value={{ student, setStudent }}>
            {children}
        </StudentContext.Provider>
    );
}