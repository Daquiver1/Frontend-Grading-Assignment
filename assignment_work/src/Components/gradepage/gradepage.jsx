import React from 'react';
import DataTable from 'react-data-table-component';
import './gradepage.css'

function gradepage() {
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
        name: 'Age',
        selector: row => row.age,
        sortable: true
    },
 ];
const data = [
    {
        id: 1,
        name: 'Caleb',
        email: 'email@email.com',
        age: '22'
    },
    {
        id: 2,
        name: 'Quansah',
        email: 'email@email.com',
        age: '19'
    },
    {
        id: 3,
        name: 'Jessica',
        email: 'email@email.com',
        age: '20'
    },
    {
        id: 4,
        name: 'Adelina',
        email: 'email@email.com',
        age: '21'
    },
    {
        id: 5,
        name: 'Chief',
        email: 'email@email.com',
        age: '22'
    },
]
 
 return (
    <div className='container-mt-5'>
        <div className='text-end'><input type='text' /></div>
        <DataTable 
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        ></DataTable>
    </div>
    
 );
};
export default gradepage;