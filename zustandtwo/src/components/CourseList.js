import React from 'react'
import useCourseStore from '../App/store'
const CourseList = () => {
    const courses =useCourseStore((state)=>state.courses)
    const removeCourse =useCourseStore((state)=>state.removeCourse)
    const toggleCourseStatus =useCourseStore((state)=>state.toggleCourseStatus)
  return (
    <div>
        <ul>
            {courses.map((course,i)=>{
return (
    <React.Fragment key={i}>
        <li className={`course-item`}  style={{
                        backgroudColor: course.completed ? "#00FF0044" : "white"
                    }}>

                        <span className='course-item-col-1'>
                            <input onChange={(e)=>toggleCourseStatus(course.id)}
                            type="checkbox" checked={course.completed}/>
                        </span>
                        <span>{course?.title}</span>
                        <button onClick={()=>removeCourse(course.id)} className='delete-btn'>Delete Course</button>
                    </li>
    </React.Fragment>
)
            })}
        </ul>
    </div>
  )
}

export default CourseList