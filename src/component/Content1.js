import React from "react";


const Content1 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row  md:ml-10 mr-10 flex-1 gap-11 mt-11">
        <div className=" bg-gradient-to-tr from-indigo-100 to-[#fffcfc] p-3 rounded-2xl ">
          <h1 className="text-[2rem] font-semibold mb-2">Overview</h1>
          <div className="flex flex-1">
            <span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </span>

            <img
              src={require("./Search-rafiki.png")}
              alt=""
              className="w-[25%] max-w-none h-auto"
            />
          </div>
        </div>

        <div className="  bg-transparent p-3 rounded-2xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="md:flex gap-11 mt-11">
        <div className="flex flex-col md:ml-10 mr-10 flex-1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>



        <div className="flex flex-col md:ml-10 mr-10 flex-1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>


        <div className="">
          <table className="w-[20rem]   m-5">
            <thead className="border-b border-gray-200">
              <tr>
                <td className="p-2">Grade</td>
                <td className="p-2">GPT</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2">A</td>
                <td className="p-2">12</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">B+</td>
                <td className="p-2">10.5</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">B</td>
                <td className="p-2">9</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">C+</td>
                <td className="p-2"> 7.5</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">C</td>
                <td className="p-2">6</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">D+</td>
                <td className="p-2">4.5</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2"> D</td>
                <td className="p-2">3</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">E</td>
                <td className="p-2">1.5</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">F</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content1;
