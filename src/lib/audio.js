// export const setup = () => {
//   let audioCtx = new AudioContext();
//   let audioAnal = audioCtx.createAnalyser();

//   let audio = new Audio();
//   audio.src = "http://145.239.26.146:7750/;stream/1";
//   audio.crossOrigin = "anonymous";
//   audio.volume = 0.15;

//   audioSrc = audioCtx.createMediaElementSource(audio);
//   audioSrc.connect(audioCtx.destination);
//   audioSrc.connect(audioAnal);

//   audioAnal.fftSize = 256;
//   audioAnal.smoothingTimeConstant = 0.75;

//   dataArray = new Uint8Array(audioAnal.frequencyBinCount);
//   dataArray2 = new Uint8Array(audioAnal.frequencyBinCount);
// };
