import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notify(item){
  item.map((item, index) => {
    if(item.grade === 'N/A') {
      toast("Your " + item.code + " has not been graded yet.");
    }
  });
}


const Dashboard = () => {

  const gradebook = [
    { code: 'DCIT101', title: 'INTRODUCTION TO COMPUTER SCIENCE', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'DCIT103', title: 'OFFICE PRODUCTIVITY TOOLS', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'MATH121', title: 'ALGEBRA AND TRIGONOMETRY', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'MATH123', title: 'VECTORS AND GEOMETRY', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'STAT111', title: 'INTRODUCTION TO STATISTICS AND PROBABILITY I', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'UGRC150', title: 'CRITICAL THINKING AND PRACTICAL REASONING', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1"  },
    { code: 'DCIT102', title: 'COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'DCIT104', title: 'PROGRAMMING FUNDAMENTALS', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'MATH122', title: 'CALCULUS I', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'MATH126', title: 'ALGEBRA AND GEOMETRY', credit: 3, grade: 'B+', gpt: 10.5, year: "2022/2023", semester: "Semester 2"  },
    { code: 'STAT112', title: 'INTRODUCTION TO STATISTICS AND PROBABILITY II', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'UGRC110', title: 'ACADEMIC WRITING I', credit: 3, grade: 'A', gpt: '12', year: "2022/2023", semester: "Semester 2" },
    { code: 'CBAS210', title: 'ACADEMIC WRITING II', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT201', title: 'PROGRAMMING I', credit: 2, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT203', title: 'DIGITAL AND LOGIC SYSTEMS DESIGN', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT205', title: 'MULTI MEDIA AND WEB DESIGN', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT207', title: 'COMPUTER ORGANIZATION & ARCHITECTURE', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'MATH223', title: 'CALCULUS II', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
  ];

      
      return (   
    <div className='dash'>
      <h1 className="text-center">Dashboard</h1>
      <button onClick={() => notify(gradebook)} className="btn btn-primary mt-2" >Missing Grades!</button>
        <ToastContainer 
        autoClose={7000}
        theme="light"/>
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>Code</th>
          <th>Title</th>
          <th>Grade</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        
        {gradebook.map((gradebook, index) => (
          <tr key={index}>
            <td>{gradebook.code}</td>
            <td>{gradebook.title}</td>
            <td>{gradebook.grade}</td>
            <td>{gradebook.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
     
  
   
  );
}

export default Dashboard;
