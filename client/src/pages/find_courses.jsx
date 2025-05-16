import { useEffect, useState } from "react";
import HighSchoolSubjectOptions from "../components/highschool_subject_options";
import UserSelectedOptions from "../components/user_selected_options";
import './style.css';
import NavBar from "../components/nav_bar/nav_bar";
import { Navigate } from "react-router-dom";

function FindCoursesPage() {
  // state to store callback drag number
  const [callback_drag_number, set_callback_drag_number] = useState(-1);

  // callback to signify drag end event
  const [callback_drag_end, set_callback_drag_end] = useState(false);

  // state to store the current user selected subjects list
  const [callback_selected_list, set_callback_selected_list] = useState(['', '', '']);
  
  // when fetch_courses_button is set to true, redirect to courses page with parameters set using callback_selected_list
  const [fetch_courses_button, set_fetch_courses_button] = useState(false);

  // redirect when fetch_courses button is clicked
  if (fetch_courses_button == true) {
    const user_selected_list = [...callback_selected_list];
    const subs_list = user_selected_list.join(",");
    if (subs_list == ',,') {
    } else {
      return <Navigate to={"/courses?subjects="+subs_list} />;
    }
  }

  const handleDragInHighSchoolSubjects = (drag_number) => {
    set_callback_drag_number(drag_number);
  }

  const handleDragEndInHighSchoolSubjects = (drag_end) => {
    set_callback_drag_end(drag_end);
  }

  const handle_change_in_user_selected_options = (updated_list) => {
    const clone = [...updated_list]
    set_callback_selected_list(clone);
  }
  
  return (
    <div className="find_courses_page">
      <NavBar />
      <div className="find_courses_page_data">
        <HighSchoolSubjectOptions 
          handleDragInHighSchoolSubjects={handleDragInHighSchoolSubjects}
          handleDragEndInHighSchoolSubjects={handleDragEndInHighSchoolSubjects}
        />
        <div className="user_options">
          <UserSelectedOptions 
            cb_drag_number={callback_drag_number}
            cb_drag_end={callback_drag_end}
            handle_change_in_user_selected_options={handle_change_in_user_selected_options}
          />
          <button className="fetch_courses_button"
            onClick={()=>{set_fetch_courses_button(true)}}
          >
            Fetch Courses
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindCoursesPage;