"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {  hasCookie, deleteCookie } from "cookies-next";
import { v4 as uuidv4 } from "uuid";
import users from "../../data/userData.json";
import { useRouter } from "next/navigation";

export function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  async function onSubmit(event) {
    event.preventDefault();

    if (userDetails.userId == "" || userDetails.userPin == "") {
      setError("Empty field(s)");
      return;
    }
    // const theUser = users.filter(
    //   (user) =>
    //     user.userId == userDetails.userId && user.userPin == userDetails.userPin
    // );
    // if (theUser.length > 0) {
    //   setCookie("user", theUser[0].id);
    //   router.push("/me");
    // }

    try {
      console.log(userDetails);
      const newUser = {
        id: uuidv4(),
        userId: userDetails.userId,
        userPin: userDetails.userPin,
        username: `${userDetails.firstname} ${userDetails.lastname}`,
        programme: userDetails.programme,
        grade: (Math.random() * 4).toFixed(2),
        courses: [
          {
            code: "DCIT101",
            name: "Introduction to computer science",
            credits: 3,
          },
          {
            code: "DCIT101",
            name: "Introduction to computer science",
            credits: 3,
          },
          {
            code: "DCIT101",
            name: "Introduction to computer science",
            credits: 3,
          }
        ],
      };
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: newUser,
        }),
      });

      const result = await response.json();

      if (result.success) {
          console.log( "Object added successfully" );
          router.push('/')
      } else {
        console.error("Failed to add object:", result.error);
      }
    } catch (error) {
      console.error("Error adding object:", error.message);
    }
    setError("");
    // Find the user for login
  }

  useEffect(() => {
    // Reset user session
    if (hasCookie("user")) {
      deleteCookie("user");
    }
  }, []);

  return (
    <section className="flex justify-center items-center h-full">
      <p className="text-red-400"> {error} </p>
      <form onSubmit={onSubmit}>
        <header className="my-10">
          <h1 className="text-4xl ">Create User Account</h1>
        </header>
        <div className="flex flex-col ">
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            id="userId"
            className="border p-2"
            value={userDetails.userId}
            name="userId"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="userPin">User Pin</label>
          <input
            type="text"
            id="userPin"
            className="border p-2"
            value={userDetails.userPin}
            name="userPin"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col my-5">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            className="border p-2"
            value={userDetails.firstname}
            name="firstname"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="border p-2"
            value={userDetails.lastname}
            name="lastname"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col my-5 ">
          <label htmlFor="programme">Programme</label>
          <input
            type="text"
            id="programme"
            className="border p-2 my-2"
            value={userDetails.programme}
            name="programme"
            onChange={handleInputChange}
          />
          <Link href="/">
            <p className="underline">Already have an account?</p>
          </Link>
        </div>

        <div className="flex my-3 gap-10 items-center">
          <button
            type="submit"
            className="bg-[black] text-white text-md p-2 rounded-md hover:opacity-50"
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
}
