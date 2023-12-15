import { useState } from "react";

function useUserLogin() {
  const [studentId, setStudentId] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = () => {
    if (!studentId || !pin) {
      // Handle empty input case
      return false;
    }
    // Your login logic here
    console.log(`Student ID: ${studentId}, PIN: ${pin}`);
    return true;
  };

  return { studentId, setStudentId, pin, setPin, handleLogin };
}

export default useUserLogin;
