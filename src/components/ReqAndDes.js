import React from 'react'
import {useState} from 'react'
import style from '../index.module.css'

export default function ReqAndDes({ course, details }) {
    const[index,setIndex] = useState(1);
    return (
      <div className={"mt-4 " + style.widthRes}>
        <h4>Requirements</h4>
        <ul>
          {course[0].requirement.map((req) => <li className='m-2' key={req}>{req}</li>)}
        </ul>
        <h4 className="m-2">Description</h4>
        {details.description.map((st) => <p className={(st._index>index)?"d-none":"d-block m-3"} key={"courseDescription"+st._index}>{st.data}</p>)}
        <button className={(index<details.description.length)?"btn btn-link p-0 m-2":"d-none"} onClick={()=>setIndex(index+1)}>show more</button>
        <button className={(index>1)?"btn btn-link p-0 m-2":"d-none"} onClick={()=>setIndex(index-1)}>show less</button>
      </div>
    )
  }