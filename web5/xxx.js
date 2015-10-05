var mod1;
(function (mod1) {
    var class1 = (function () {
        function class1() {
        }
        return class1;
    })();
    mod1.class1 = class1;
})(mod1 || (mod1 = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        _super.apply(this, arguments);
    }
    MyComponent.prototype.render = function () {
        var name = 'ahoj';
        var obj = (_a = {}, _a[name] = 'xxx', _a);
        var arr = [1, 2, 3];
        for (var _i = 0, _b = [1, 2, 3]; _i < _b.length; _i++) {
            var i = _b[_i];
        }
        var _c = [1, 2, 3, 4, 5, 6], x = _c[0], y = _c[1], _d = _c[2], z = _d === void 0 ? 5 : _d;
        var x = 1;
        var y = 2;
        _e = [y, x], x = _e[0], y = _e[1];
        return React.createElement("span", {"class": "btn"}, this.props.class);
        var _a, _e;
    };
    return MyComponent;
})(React.Component);
var prop = { xx: 5 };
var root = React.createElement(MyComponent, {"class": "btn", "num": 1, "bol": true, "obj": prop}, React.createElement("div", null, "xxx"), " dddd ", React.createElement("span", null, "ssss"));
React.render(root, document.getElementsByTagName('body')[0]);
function isCat(a) {
    return a.name === 'cat';
}
function isDog(a) {
    return a.dogname === 'dog';
}
function call(x) {
    if (typeof x === 'string') {
        x = '';
    }
    else if (typeof x === 'number') {
        x = 5;
    }
    else if (isCat(x)) {
        x.name = '';
    }
    else if (isDog(x)) {
        x.dogname = '';
    }
}
