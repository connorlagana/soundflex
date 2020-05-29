const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python3", [
    "mash.py",
    req.body.instrumental,
    req.body.firstV,
    req.body.secondV,
    req.body.vox,
    req.body.drop,
    req.body.chorus,
    req.body.name,
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
