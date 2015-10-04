//var root =
//<MyComponent cls="btn" num={1} bol={true} obj={prop}>
//  <div className="xxxx">xxx</div> dddd <span>ssss</span>
//</MyComponent>
//;
function drawText(x: number, y: number, ...strings: string[]) {
  // draw text
}

drawText(10, 20, "hello");
drawText(10, 20, "hello", "world");
var a = ["one", "two"];
drawText(10, 20, ...a);
drawText(10, 20, "zero", ...a, "three");