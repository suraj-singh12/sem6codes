const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const validationMiddleware = [
  check("name").not().isEmpty().withMessage("Student name is required"),
  check("regNo").not().isEmpty().withMessage("Registration Number is required"),
  check("regNo")
    .isLength(8)
    .withMessage("Registration number must be 8 digits"),
  check("rollNo").not().isEmpty().withMessage("Roll Number is required"),
  check("mobile").not().isEmpty().withMessage("Mobile number is required"),
  check("mobile").isLength(10).withMessage("Mobile number must be 10 digits"),
  check("email").not().isEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Invalid Email Format"),
];
app.post("/validateData", validationMiddleware, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    res.send(
      `<h2>Warning Messages:</h2> <ul><li>${errorMessages.join(
        "</li><li>"
      )}</li></ul>`
    );
  } else {
    const { name, regNo, rollNo, mobile, email } = req.body;
    res.send(
      `Student Details Submitted: Name - ${name}, Reg. No. - ${regNo}, Roll No. - ${rollNo}, Mobile No. - ${mobile}, Email Id - ${email}`
    );
  }
});

app.listen(port, () => {
  console.log("Listening on port", port);
});
