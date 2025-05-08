const express = require("express");
const router = express.Router();

// find the courses relevant to the subject ids parsed in the url
// retrieve and send all the information about those courses in the response
// subject ids are indexes of subjects array declared in the global state of the client side
router.get("", (req, res) => {
  const subjects = req.query.subjects;
  if (!subjects || subjects == "") {
    res.status(422).send("selected subjects cannot be empty");
  }

  // split the subject ids into individual ones
  // then traverse the prefix tree to find the relevant courses
  const courses = req.data.search_courses(subjects.split(','))
  
  // courses contains course ids
  // use the course ids to fetch the information about the courses stored in the db
  const sql_query = `SELECT * FROM courses WHERE id IN (${courses.join(',')})`
  db.query(sql_query, (err,result)=>{
    if (err) {
        return console.error(err.message);
    } else {
        res.send(result);
    }
  });
})

module.exports = router;