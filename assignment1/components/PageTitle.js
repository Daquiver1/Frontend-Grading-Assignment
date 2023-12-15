import React from "react";

function PageTitle({ pagename }) {
  return (
    <>
      <div>
        <h1 className="underline text-center  bg-stone-900 text-white p-3 m-4">
          {pagename}
        </h1>
      </div>
    </>
  );
}

export default PageTitle;
