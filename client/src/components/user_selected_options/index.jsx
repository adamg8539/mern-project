import { useState, useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../../context";
import './style.css';

function UserSelectedOptions(props) {
  const [user_selected_options, set_user_selected_options] = useState(['', '', '']);
  const [user_selected_options_drag, set_user_selected_options_drag] = useState(false);

  const [props_drag_number, set_props_drag_number] = useState(props.cb_drag_number);

  useEffect(()=> {
    set_props_drag_number(props.cb_drag_number);
  }, [props.cb_drag_number])

  useEffect(()=> {
    handle_school_subject_drag();
  }, [props.cb_drag_end])

  useEffect(()=>{
    props.handle_change_in_user_selected_options(user_selected_options);
  }, [user_selected_options])

  const drag_subject = useRef(0);
  const dragged_over_subject = useRef(-1);

  const remove_subject = useRef(-1);

  const {subject_list} = useContext(GlobalContext);

  // handle the subject drag from school subjects list when drag event is detected and user_selected_options_drag is false
  function handle_school_subject_drag() {
    const clone = [...user_selected_options]

    // modify the value of clone to show the dragged element
    clone[dragged_over_subject.current] = props_drag_number.toString()

    // update the selected_subject_list
    set_user_selected_options(clone)

    dragged_over_subject.current = -1
  }

  // handle the internal drag changes within the selected_subject_list
  function handle_selected_subject_drag() {
    // destructure the list into clone
    const clone = [...user_selected_options]

    // store the dragged over subject into temp
    const temp = clone[dragged_over_subject.current]

    // store subject being dragged into its new place
    clone[dragged_over_subject.current] = clone[drag_subject.current]

    // store dragged over subject into the place of the dragged subject
    clone[drag_subject.current] = temp

    set_user_selected_options(clone)

    // reset dragged over subject reference to -1
    // this is done in order to not have unwanted interactions during next drag event
    dragged_over_subject.current = -1
  }

  function handle_remove_selected_subject_button_click() {
    const clone = [...user_selected_options]
    // remove the element chosen
    clone.splice(remove_subject.current, 1);
    // add empty element to the end of the list to keep the length consistent
    clone.push('');
    set_user_selected_options(clone);
    remove_subject.current = -1;
  }

  return (
      <div className="user_selected_list">
        {user_selected_options.map((val, i)=>{
          return <p className="user_selected_subject_item"
            draggable
            onDragStart={() => (
              drag_subject.current = i,
              set_user_selected_options_drag(true)
            )}
            onDragEnter={()=> (
              dragged_over_subject.current = i
            )}
            onDragEnd={handle_selected_subject_drag}
            onDragOver={(e)=> e.preventDefault()}
            >
            {(val != '') ? subject_list[parseInt(val)] : ''}
            <button className="remove_selected_subject_button" 
              onClick={()=> (
                remove_subject.current = i,
                handle_remove_selected_subject_button_click()
              )}
            >
              x
            </button>
          </p>
        })}
      </div>
  )
}

export default UserSelectedOptions;