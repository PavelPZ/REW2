//var root =
//<MyComponent cls="btn" num={1} bol={true} obj={prop}>
//  <div className="xxxx">xxx</div> dddd <span>ssss</span>
//</MyComponent>
//;
function drawText(x, y) {
    var strings = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        strings[_i - 2] = arguments[_i];
    }
    // draw text
}
drawText(10, 20, "hello");
drawText(10, 20, "hello", "world");
var a = ["one", "two"];
drawText.apply(void 0, [10, 20].concat(a));
drawText.apply(void 0, [10, 20, "zero"].concat(a, ["three"]));
