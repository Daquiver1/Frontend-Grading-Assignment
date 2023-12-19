import React from "react";

const Table1 = () => {
  return (
    <div>
      <table className="flex-1 ">
        <thead className="m-4 bg-gray-200 border ">
          <tr>
            <th className="p-2">Course Code</th>
            <th className="p-2">Course Name</th>
            <th className="p-2">Grade</th>
          </tr>
        </thead>
        <tbody className="m-4 scr">
          <tr className="bg-gray-100">
            <td className="p-2">DCIT 101</td>
            <td className="p-2">Intro. to Computer Science</td>
            <td className="p-2">A+</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2">DCIT 101</td>
            <td className="p-2">Intro. to Computer Science</td>
            <td className="p-2">A+</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2">DCIT 101</td>
            <td className="p-2">Intro. to Computer Science</td>
            <td className="p-2">A+</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2 border-b ">DCIT 101</td>
            <td className="p-2">Intro. to Computer Science</td>
            <td className="p-2">A+</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2">DCIT 101</td>
            <td className="p-2">Intro. to Computer Science</td>
            <td className="p-2">A+</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2">DCIT 101</td>
            <td className="p-2">Intro. to Computer Science</td>
            <td className="p-2">A+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
