import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [student, setStudent] = useState({
        studentId: "",
        studentPassword: "",
        rememberStd: false
    });

    // save to localStorage
    localStorage.setItem("student", JSON.stringify(student));

    return (
        <StudentContext.Provider value={{ student, setStudent }}>
            {children}
        </StudentContext.Provider>
    );
}