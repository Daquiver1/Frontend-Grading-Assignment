import DataTable from "react-data-table-component"
import { useState } from "react"

function InstructorContact() {

// Grade Report Page
// Detailed view of all courses and respective grades.
// Option to filter by semester/academic year.


  const columns = [
    {
      name: 'Course Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Course Code',
      selector: row => row.code,
      sortable: true
    },
    {
      name: "Semester",
      selector: row => row.semester,
      sortable: true
    },
    {
      name: "Credit",
      selector: row => row.credit,
      sortable: true
    },
    {
      name: "Grade",
      selector: row => row.grade,
      sortable: true
    },
    {
      name: "GPT",
      selector: row => row.gpt,
      sortable: true
    },
    
  ]


  const data = [
    {
      name: "Introduction To Computer Science",
      code: "DCIT 101",
      semester: "First Semester",
      credit: 3,
      grade: "A",
      gpt: 12
    },
    {
      name: "Cloud Computing",
      code: "DCIT 103",
      semester: "First Semester",
      credit: 3,
      grade: "A",
      gpt: 12
    },
    {
      name: "AI",
      code: "DCIT 104",
      semester: "First Semester",
      credit: 3,
      grade: "A",
      gpt: 12
    },
    {
      name: "Web Dev",
      code: "DCIT 105",
      semester: "First Semester",
      credit: 3,
      grade: "A",
      gpt: 12
    },
    {
      name: "Algebra and Trignometry",
      code: "Math 201",
      semester: "First Semester",
      credit: 3,
      grade: "B",
      gpt: 12
    },
    {
      name: "Office Productivity",
      code: "DCIT 301",
      semester: "First Semester",
      credit: 3,
      grade: "B+",
      gpt: 12
    },
    {
      name: "Programming ",
      code: "DCIT 101",
      semester: "First Semester",
      credit: 3,
      grade: "A",
      gpt: 12
    },
    {
      name: "Data Science",
      code: "DCIT 301",
      semester: "First Semester",
      credit: 3,
      grade: "A",
      gpt: 12
    }
  ]

  const [records, setRecords] = useState(data);

  function handleFilter(event){
    const newData = data.filter(row => {
      return (
        row.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setRecords(newData)
  }

  return (
    <div className="p-6">
      <div className="flex justify-end">
        <input 
          type="text"
          className="my-3 bg-slate-600 p-2 rounded-lg flex w-full" 
          placeholder="Search..."
          onChange={handleFilter}
        />
      </div>

      <DataTable
        columns={columns}
        data={records}
        fixedHeader
        pagination
      ></DataTable>
    </div>
  )
}

export default InstructorContact
