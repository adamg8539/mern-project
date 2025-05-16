import { useParams, useSearchParams } from "react-router-dom";

function Courses() {
  const [search_params, set_search_params] = useSearchParams();

  console.log(search_params.get('subjects'))
}

export default Courses;