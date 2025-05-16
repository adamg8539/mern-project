import { createContext } from "react";
import { useState } from "react";

export const  GlobalContext = createContext(null);

function GlobalState({children}) {

  // list of all available subjects the user can choose from
  const [subject_list, set_subject_list] = useState([
    'English',
    'Mathematics',
    'Biology',
    'Business Studies',
    'Personal Development, Health and Physical Education',
    'Studies of Religion',
    'Modern History',
    'Legal Studies',
    'Chemistry',
    'Community and Family Studies',
    'Visual Arts',
    'Physics',
    'Hospitality',
    'Ancient History',
    'Industrial Techonology',
    'Information Technology',
    'Science'
  ]);


  return <GlobalContext.Provider value={{subject_list, set_subject_list}}>{children}</GlobalContext.Provider>
}

export default GlobalState;