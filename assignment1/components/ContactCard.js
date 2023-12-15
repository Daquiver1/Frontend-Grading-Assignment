import React from "react";
import Image from "next/image";

function ContactCard({ profile, name, email, number }) {
  return (
    <>
      <div className="flex-col border-2 object-cover m-4 ">
        <div>
          <Image src={profile} className="object-cover " />
        </div>
        <div>
          <p>NAME: {name}</p>
        </div>
        <div>
          <p>EMAIL: {email}</p>
        </div>
        <div>
          <p>PHONE NUMBER: {number}</p>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
