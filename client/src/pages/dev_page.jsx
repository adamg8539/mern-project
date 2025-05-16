import CourseInfo from "../components/course_info";
import './style.css';

// this is a very minimalistic front end used by myself to set subjects to each course
// this was built so that I wouldn't have to manually enter queries for each course
// as that would be prone to errors and mistakes
function DevPage() {
  return (
    <div>
      <CourseInfo />
    </div>
  )
}

export default DevPage;