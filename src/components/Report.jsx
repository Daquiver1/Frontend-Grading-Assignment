const courses = [
  {
    name: "Stat 111",
    grade: "B",
  },
  {
    name: "stat 112 ",
    grade: "A",
  },
  {
    name: "Maths 112 ",
    grade: "F",
  },
  {
    name: "DCIT 201 ",
    grade: "A",
  },
  {
    name: "DCIT 105",
    grade: "B",
  },
  {
    name: "DCIT 103 ",
    grade: "C",
  },
  {
    name: "UGRC 105 ",
    grade: "B",
  },
  {
    name: "UGRC 110 ",
    grade: "D",
  },
  {
    name: "DCIT 104 ",
    grade: "E",
  },
  {
    name: "Econs 101 ",
    grade: "C",
  },
];

const Report = () => {
  return (
    <div className="w-full flex  flex-col  pt-14">
      <div className="flex space-x-3  sm:px-6 lg:px-8">
        <p> filter by:</p>
        <select>
          <option>--select academic year--</option>
          <option>First Academic year</option>
          <option>Second Academic year</option>
        </select>
        <select>
          <option>--select semester--</option>
          <option>First semester</option>
          <option>Second semester</option>
        </select>
      </div>
      <div className="inline-block  py-2 align-middle sm:mx-6 lg:mx-8 mt-6 border ">
                   
        <table className="min-w-full divide-y divide-gray-300">
                        
          <thead>
                            
            <tr>
                                
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                                   Course name          
              </th>
                                
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                               Grade
              </th>
                                                                    
            </tr>
                          
          </thead>
                        
          <tbody className="bg-white">
                            
            {courses.map((course) => (
              <tr key={course.name} className="even:bg-gray-50">
                                    
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                        {course.name}
                                      
                </td>
                                    
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span className="px-3 py-2 bg-[#b2a551] rounded-full text-white">
                    {course.grade}
                  </span>
                </td>
                                                       
              </tr>
            ))}
                          
          </tbody>
                      
        </table>
                  
      </div>
    </div>
  );
};

export default Report;
