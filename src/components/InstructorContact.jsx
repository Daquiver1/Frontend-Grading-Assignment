import DataTable from "react-data-table-component"
import { useState } from "react"

function InstructorContact() {
// Instructor Contact Page
// List of instructors with contact details.
// Option to send a simulated email to the instructor (no real email, just a mock-up).

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: "Office Number",
      selector: row => row.officeNumber,
      sortable: true
    },
    {
      name: "Contact Time",
      selector: row => row.contactTime,
      sortable: true
    },
    {
      name: 'Action',
      selector: 'action',
      cell: row => <a href="#"><button className="rounded py-1 px-3 text-white bg-slate-600">{row.action}</button></a>,
    },
  ]


  const data = [
    {
      name: "Alice Johnson",
      id: "1001",
      email: "alice.johnson@example.com",
      officeNumber: "O1234",
      contactTime: "Monday 10:00 AM - 12:00 PM",
      action: "Contact"
    },
    {
      name: "Bob Smith",
      id: "1002",
      email: "bob.smith@example.com",
      officeNumber: "O5678",
      contactTime: "Wednesday 2:00 PM - 4:00 PM",
      action: "Contact"
    },
    {
      name: "Charlie Davis",
      id: "1003",
      email: "charlie.davis@example.com",
      officeNumber: "O2468",
      contactTime: "Tuesday 1:00 PM - 3:00 PM",
      action: "Contact"
    },
    {
      name: "David Wilson",
      id: "1004",
      email: "david.wilson@example.com",
      officeNumber: "O1357",
      contactTime: "Thursday 3:00 PM - 5:00 PM",
      action: "Contact"
    },
    {
      name: "Eva Martinez",
      id: "1005",
      email: "eva.martinez@example.com",
      officeNumber: "O9876",
      contactTime: "Friday 9:00 AM - 11:00 AM",
      action: "Contact"
    },
    {
      name: "Frank Brown",
      id: "1006",
      email: "frank.brown@example.com",
      officeNumber: "O5432",
      contactTime: "Monday 1:00 PM - 3:00 PM",
      action: "Contact"
    },
    {
      name: "Grace Taylor",
      id: "1007",
      email: "grace.taylor@example.com",
      officeNumber: "O6789",
      contactTime: "Wednesday 10:00 AM - 12:00 PM",
      action: "Contact"
    },
    {
      name: "Harry Moore",
      id: "1008",
      email: "harry.moore@example.com",
      officeNumber: "O1111",
      contactTime: "Tuesday 2:00 PM - 4:00 PM",
      action: "Contact"
    },
    {
      name: "Ivy White",
      id: "1009",
      email: "ivy.white@example.com",
      officeNumber: "O2222",
      contactTime: "Thursday 1:00 PM - 3:00 PM",
      action: "Contact"
    },
    {
      name: "Jack Robinson",
      id: "1010",
      email: "jack.robinson@example.com",
      officeNumber: "O3333",
      contactTime: "Friday 2:00 PM - 4:00 PM",
      action: "Contact"
    },
    {
      name: "Karen Turner",
      id: "1011",
      email: "karen.turner@example.com",
      officeNumber: "O4444",
      contactTime: "Monday 3:00 PM - 5:00 PM",
      action: "Contact"
    },
    {
      name: "Leo Adams",
      id: "1012",
      email: "leo.adams@example.com",
      officeNumber: "O5555",
      contactTime: "Wednesday 3:00 PM - 5:00 PM",
      action: "Contact"
    },
    {
      name: "Mia Garcia",
      id: "1013",
      email: "mia.garcia@example.com",
      officeNumber: "O6666",
      contactTime: "Tuesday 10:00 AM - 12:00 PM",
      action: "Contact"
    },
    {
      name: "Nathan Miller",
      id: "1014",
      email: "nathan.miller@example.com",
      officeNumber: "O7777",
      contactTime: "Thursday 2:00 PM - 4:00 PM",
      action: "Contact"
    },
    {
      name: "Olivia Scott",
      id: "1015",
      email: "olivia.scott@example.com",
      officeNumber: "O8888",
      contactTime: "Friday 1:00 PM - 3:00 PM",
      action: "Contact"
    },
  ];

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
