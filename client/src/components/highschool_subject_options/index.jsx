import { useState } from "react";
import { GlobalContext } from "../../context";
import { useContext, useRef } from "react";
import './style.css';

function HighSchoolSubjectOptions(props) {
  const {subject_list} = useContext(GlobalContext);
  const [drag_number, set_drag_number] = useState(-1);
  const [drag_end, set_drag_end] = useState(false);

  const drag_subject = useRef(0);
  
  return (
    <div className="subject_list_item">
      {subject_list.map((val, i)=>{
        return <p className="subject_option_item"
          draggable
          onDragStart={() => (
            drag_subject.current = i,
            set_drag_number(i),
            props.handleDragInHighSchoolSubjects(i)
          )}
          onDragEnd={()=> (
            props.handleDragEndInHighSchoolSubjects(!drag_end),
            set_drag_end(!drag_end)
          )}
          onDragOver={(e)=> e.preventDefault()}
        >
          {val}
        </p>
      })}
    </div>
  )
}

export default HighSchoolSubjectOptions;