const express = require("express");
const { spawn } = require("child_process");
const app = express();
const port = 3001;

const arrobj = [
  {
    title: "Stupid Horse",
    artist: "100 Gecs",
    bpm: 98,
  },
  {
    title: "Hey Brother",
    artist: "Avicii",
    bpm: 124,
  },
];

app.get("/", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python3", [
    "mash.py",
    "instrumental2",
    "firstV1",
    "secondV1",
    "vox1",
    "drop1",
    "chorus1",
    "titleOf14",
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
