var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mod1;
(function (mod1) {
    var C = (function () {
        function C() {
        }
        C.prototype.method = function () { };
        Object.defineProperty(C.prototype, "method",
            __decorate([
                readonly,
                enumerable(false), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], C.prototype, "method", Object.getOwnPropertyDescriptor(C.prototype, "method")));
        return C;
    })();
    function readonly(target, key, descriptor) {
        descriptor.writable = false;
    }
    function enumerable(value) {
        return function (target, key, descriptor) {
            descriptor.enumerable = value;
        };
    }
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
    function foo(a, b, c) { }
    function errMsg(props, propName, componentName, msgContinuation) {
        (_a = ["A ", " B ", " C"], _a.raw = ["A ", " B ", " C"], foo(_a, 1, 2));
        return "Invalid prop '" + propName + "' of value '" + props[propName] + "' supplied to '" + componentName + "'" + msgContinuation;
        var _a;
    }
    var _a, _e;
})(mod1 || (mod1 = {}));
