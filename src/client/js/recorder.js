const startBtn = document.getElementById("startBtn");
const preview = document.getElementById("preview");
let stream;
let recorder;
let videoFile;
const handleDownload = () => {
    const a = document.createElement("a");
    a.href = videoFile;
    a.download = "MyRecording.webm";
    document.body.appendChild(a);
    a.click();
  };

const handleStart = () => {
    startBtn.innerText = "Stop Recording";
    startBtn.removeEventListener("click", handleStart);
    startBtn.addEventListener("click", handleStop);
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    recorder.ondataavailable = (event) => {
        videoFile = URL.createObjectURL(event.data);
        preview.srcObject = null;
        preview.src = videoFile;
  };
    recorder.start();
};

const handleStop = async() => {
    startBtn.innerText = "Download Recording";
    startBtn.removeEventListener("click", handleStop);
    startBtn.addEventListener("click", handleDownload);
    recorder.stop();
};

const init = async() => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio:false, 
    video:true
  });
  preview.srcObject = stream;
  preview.play();
};
init();

startBtn.addEventListener("click", handleStart);