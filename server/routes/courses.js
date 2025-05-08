const express = require("express");
const router = express.Router();

// retrieve information about a course given its id
router.get("/:id", (req, res) => {
  sql_query = `SELECT * FROM COURSES WHERE id=${req.params.id}`
  db.query(sql_query, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ success: false, message: 'query error', error: err });
      return;
    }
    res.send(result[0]);
  })
});

// assign course_subjects to a course
// this endpoint was used for assigning subjects to each course by me
router.post("/assign/", (req, res) => {
  let sql_query = `UPDATE courses SET course_subjects=? WHERE id=?`
  const query_data = [req.body.assigned_subjects, req.body.id];
  db.query(sql_query, query_data, (err, result) => {
    if (err) {
      return console.error(err.message);
    } else {
      res.send("Subject IDs assigned to the course " + req.body.id + ": " + req.body.assigned_subjects);
    }
  })
})

module.exports = router;