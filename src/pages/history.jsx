import React from "react";
import axios from 'axios';
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import "./history.css"
function History(){
    const [data, setData] = useState([]);
    let navigate=useNavigate()
    const handleClick=async()=>{
        const result = await axios.post("http://127.0.0.1:8000/retrive/")
        console.log(result.data)
        setData(result.data)
    }
    const deleteClick=async()=>{
      const result = await axios.post("http://127.0.0.1:8000/delete/")
      console.log(result.data)
      setData(result.data)
  }
    const backClick=()=>{
      navigate("/")
    }
return(
    <div>
       
<table>
<th onClick={backClick} colSpan="2" >Calculator!!</th>
  <tr>
    <th onClick={handleClick}>Fetch Data!!</th>
    <th onClick={deleteClick} >Delete Data!!</th>
  </tr>
  <tr>
    <th >Expression</th>
    <th>Result </th>
    
  </tr>
  {data.map(data => (
  <tr>
    <td>{data.operation}</td>
    <td>{data.result}</td>

  </tr>
  ))}
</table>
    </div>
);
}
export default History;