import React, { useState, useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../../context";
import './style.css'

// displays a list of subject options as buttons which are draggable
// this is used to assign/select subjects
function SubjectOptions(props) {
  const {subject_list} = useContext(GlobalContext);

  // create a state from props.id which is passed down by the parent
  const [props_id, set_props_id] = useState(props.id)
  const [selected_subject_list, set_selected_subject_list] = useState(["", "", ""]);

  const drag_subject = useRef(0);
  const dragged_over_subject = useRef(-1);

  function handle_subject_list_drag() {
    // destructure the selected subject list
    const clone = [...selected_subject_list]

    // modify the value of clone to show the dragged element
    clone[dragged_over_subject.current] = drag_subject.current

    // update the selected_subject_list
    set_selected_subject_list(clone)

    dragged_over_subject.current = -1
  }

  // runs when props.id changes
  useEffect(()=>{
    set_props_id(props.id)
  }, [props.id])

  // runs when props.subjects changes
  useEffect(()=>{
    set_selected_subject_list(props.subjects)
  },[props.subjects])

  // handle the internal drag changes within the selected_subject_list
  function handle_selected_subject_drag() {
    // destructure the list into clone
    const clone = [...selected_subject_list]

    // store the dragged over subject into temp
    const temp = clone[dragged_over_subject.current]

    // store subject being dragged into its new place
    clone[dragged_over_subject.current] = clone[drag_subject.current]

    // store dragged over subject into the place of the dragged subject
    clone[drag_subject.current] = temp

    set_selected_subject_list(clone)

    // reset dragged over subject reference to -1
    // this is done in order to not have unwanted interactions during next drag event
    dragged_over_subject.current = -1
  }

  return (
    <div className="subject_options">
      <div className="subject_list_item">
        {subject_list.map((val, i)=>{
          return <p className="subject_option_item"
            draggable
            onDragStart={() => (
              drag_subject.current = i,
              set_is_selected_subject_dragged(false)
            )}
            onDragEnd={handle_subject_list_drag}
            onDragOver={(e)=> e.preventDefault()}
          >
            {val}
          </p>
        })}
      </div>
      <div className="selected_list_item">
        {selected_subject_list.map((val, i)=>{
          return <p className="selected_subject_item"
            draggable
            onDragStart={() => (
              drag_subject.current = i,
              set_is_selected_subject_dragged(true)
            )}
            onDragEnter={()=> (dragged_over_subject.current = i)}
            onDragEnd={handle_selected_subject_drag}
            onDragOver={(e)=> e.preventDefault()}
          >
            {subject_list[parseInt(val)]}
          </p>
        })}
        <button className="submit_button" onClick={()=>{
          // assign the selected subjects to the current course in the database
          let url = new URL('/courses/assign/', 'http://localhost:3000');
          fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              "id": props_id,
              "assigned_subjects": selected_subject_list.join(',')
            })
          })
            .catch(error => console.log(error));
        }}>Submit</button>
      </div>
    </div>
  )
}

export default SubjectOptions;