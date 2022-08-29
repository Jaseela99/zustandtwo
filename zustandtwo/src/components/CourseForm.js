import React, { useState } from 'react'
import useCourseStore from '../App/store'
const CouresForm = () => {
    const addCourse =useCourseStore((state)=>state.addCourse)
  const [courseTitle,setCourseTitle] =useState("")
  console.log("courseform rendered")
  const handleSubmit=()=>{
    if(!courseTitle) return alert("course required")
    addCourse({
        id:Math.ceil(Math.random()*1000000),
        title:courseTitle
    })
    setCourseTitle("")
  }
    return (
    <div className='form-container'>
        <input value={courseTitle} onChange={(e)=>{setCourseTitle(e.target.value)}} className='form-input'/>
    <button onClick={()=>handleSubmit()} className='form-submit-btn'>Add course</button>
    </div>
  )
}

export default CouresForm