import React, { useState } from 'react'

export default function Search() {

  const dummyData =[
    {id:1, firstName: 'krina', lastName: 'patel',email: 'krina@gmail.com'},
    {id:2, firstName: 'mahesh', lastName: 'shah',email: 'mahesh@gmail.com'},
    {id:3, firstName: 'shreeja', lastName: 'banjan',email: 'shreeja@gmail.com'},
    {id:4, firstName: 'manik', lastName: 'decruz',email: 'manik@gmail.com'},
    {id:5, firstName: 'nandini', lastName: 'lalwani',email: 'nandini@gmail.com'},
    {id:6, firstName: 'kiara', lastName: 'patel',email: 'kiara@gmail.com'},
    {id:7, firstName: 'suresh', lastName: 'patil',email: 'suresh@gmail.com'},
    {id:8, firstName: 'hari', lastName: 'arora',email: 'hari@gmail.com'},
    {id:9, firstName: 'john', lastName: 'ambani',email: 'john@gmail.com'},
    {id:10, firstName: 'krish', lastName: 'patel',email: 'krish@gmail.com'}
  ]

  const[value, setValue] = useState('');
  const[dataSource, setDataSource] = useState(dummyData);
  const[tablefilter, setTablefilter] = useState([]);

  const filterData = (e) =>{
    if(e.target.value!== ""){
      setValue(e.target.value);
      const filterTable = dataSource.filter(o =>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTablefilter([...filterTable])
    }else{
      setValue(e.target.value);
      setDataSource([...dataSource])
    }
  }

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
         <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" value={value}
         onChange={filterData}
         />
      </div>
        <table class="table table-success table-striped">
            <thead>
                <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Firstname</th>
                <th scope='col'>Lastname</th>
                <th scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
              {value.length > 0? tablefilter.map((data) =>{
                return(
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                  </tr>
                )
              })
            :
              dataSource.map((data) =>{
                return(
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                  </tr>
                )
              })
            }
          
            </tbody>
        </table>
    </div>
  )
}
