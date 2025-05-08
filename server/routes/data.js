const express = require("express");
const router = express.Router();

// used for storing data in the courses table after web scraping
router.post("/add", function(req, res) {

  let sqlQuery = "INSERT INTO courses (course_name, course_link, course_description, course_duration, uac_code, atar_required, est_cost) VALUES (?,?,?,?,?,?,?)";
  let newRecord = [req.body.name, req.body.link, req.body.description, req.body.duration, req.body.uac_code, req.body.atar, req.body.cost];
  db.query(sqlQuery, newRecord, (err,result)=>{
      if (err) {
          return console.error(err.message);
      } else {
          res.send("This course is added to the database, name: " + req.body.name);
      }
  });
});

module.exports = router;