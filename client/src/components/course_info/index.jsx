import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context";
import './style.css'
import SubjectOptions from "../subject_options";

function CourseInfo() {
  const [course_id, set_course_id] = useState(1);
  const [course_data, set_course_data] = useState({name: "", description: "", duration: "", selected_subjects: ["", "", ""]});
  const [course_state, set_course_state] = useState('new')

  // re render with the new course's information when course_id is changed by the next button
  useEffect(() => {
    fetch(`http://localhost:3000/courses/${course_id}`)
    .then(response => response.json())
    .then(data => set_course_data({
      'name': data['course_name'],
      'description': data['course_description'],
      'duration': data['course_duration'],
      'selected_subjects': (data['course_subjects'] == null ? ["", "", ""] : data['course_subjects'].split(','))
    }))
  }, [course_id])

  return (
    <div>
      <h2 className="course_title">{course_data.name}</h2>
      <div className="course_data">
        <p className="course_data_item"><b>Course Description:</b> {course_data.description}</p>
        <p className="course_data_item"><b>Course Duration:</b> {course_data.duration}</p>
      </div>
      <div className="subject_options">
        <SubjectOptions 
            state={course_state}
            id={course_id}
            subjects={course_data.selected_subjects}
        />
      </div>
      <div className="btn_component">
        <button className="btn_item" onClick={() => {
          course_id > 1 ? set_course_id(course_id-1) : 0
        }}>Previous</button>
        <button className="btn_item" onClick={() => {
          set_course_id(course_id+1),
          set_course_state("next")}}>Next</button>
      </div>
    </div>
  );
}

export default CourseInfo;