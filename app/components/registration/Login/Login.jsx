"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { setCookie, hasCookie, deleteCookie } from "cookies-next";
import users from "../../data/userData.json";
import { useRouter } from "next/navigation";

export function Login() {
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
    const theUser = users.filter(
      (user) =>
        user.userId == userDetails.userId && user.userPin == userDetails.userPin
    );
    if (theUser.length > 0) {
      setCookie("user", theUser[0].id);
      router.push("/me");
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
          <h1 className="text-4xl ">Log into your portal</h1>
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
        <div className="flex flex-col my-10">
          <label htmlFor="userPin">User Pin</label>
          <input
            type="text"
            id="userPin"
            className="border p-2"
            value={userDetails.userPin}
            name="userPin"
            onChange={handleInputChange}
          />
          <Link href="/signup">
            <p className="underline">Don&apos;t have an account?</p>
          </Link>
        </div>

        <div className="flex gap-10 items-center">
          <button
            type="submit"
            className="bg-[black] text-white text-md p-2 rounded-md hover:opacity-50"
          >
            Log in
          </button>
        </div>
      </form>
    </section>
  );
}
