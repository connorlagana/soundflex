const express = require("express");
const { spawn } = require("child_process");
const app = express();
const port = 3001;

// const cors = require("cors");
const bodyParser = require("body-parser");
// const logger = require("morgan");

// const userRouter = require("./router.js");

// app.use(cors());
// app.use(logger("dev"));
app.use(bodyParser.json());

// app.use("/", userRouter);

app.post("/", (req, res) => {
  var dataToSend;
  console.log("ookay", req.body.vox);
  // spawn new child process to call the python script
  const python = spawn("python3", [
    "mash2.py",
    req.body.vox,
    "firstV3",
    "secondV1",
    "vox1",
    "drop1",
    "chorus1",
    "titleOf16",
  ]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

app.listen(port, () =>
  console.log(`Soundflex Backend: 
${port}!`)
);
