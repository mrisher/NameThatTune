const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="app"></div></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;

// mock URL.createObjectURL
global.URL.createObjectURL = () => "";
// mock AudioContext
global.window.AudioContext = class {
  createGain() { return { connect: () => {}, gain: { value: 1 } }; }
  createAnalyser() { return { connect: () => {}, fftSize: 2048 }; }
  createDelay() { return { connect: () => {} }; }
  createBiquadFilter() { return { connect: () => {}, frequency: { value: 1 }, Q: { value: 1 }, gain: { value: 1 } }; }
  createChannelSplitter() { return { connect: () => {} }; }
  createChannelMerger() { return { connect: () => {} }; }
  createMediaElementSource() { return { connect: () => {} }; }
  decodeAudioData() { return Promise.resolve({}); }
  get destination() { return {}; }
  get currentTime() { return 0; }
};

const Webamp = require("webamp");
const webamp = new Webamp();
webamp.renderWhenReady(document.getElementById("app")).then(() => {
  const html = document.getElementById("app").innerHTML;
  console.log(html);
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
