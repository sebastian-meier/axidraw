import { AxiDraw, polyline } from "@thi.ng/axidraw";

(async () => {

// instantiate w/ default options (see docs for info)
const axi = new AxiDraw();

// connect to 1st serial port matching given pre-string or regexp
// (the port used here is the default arg)
await axi.connect("/dev/ttyACM0");
// true

// vertices defining a polyline of a 100x100 mm square (top left at 20,20)
const verts = [[20, 20], [40, 20], [40, 40], [20, 40], [20, 20]];

// convert to drawing commands (w/ custom speed, 25%)
// see docs for config options
const path = polyline(verts, { speed: 0.25 })
// [
//   ["m", [20, 20]],
//   ["d"],
//   ["m", [120, 20], 0.25],
//   ["m", [120, 120], 0.25],
//   ["m", [20, 120], 0.25],
//   ["m", [20, 20], 0.25],
//   ["u"]
// ]

const verts1 = [[100, 100], [120, 100], [120, 120], [100, 100], [100, 100]];

// convert to drawing commands (w/ custom speed, 25%)
// see docs for config options
const path1 = polyline(verts1, { speed: 0.25 })

// draw/send seq of commands
// by default the given commands will be wrapped with a start/end
// command sequence, configurable via options given to AxiDraw ctor)...
await axi.draw(path);
await axi.draw(path1);

})();