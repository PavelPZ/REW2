var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FreezerReactComponent = (function (_super) {
    __extends(FreezerReactComponent, _super);
    function FreezerReactComponent(props, initState) {
        var _this = this;
        _super.call(this, props);
        this.state = initState;
        this.state.getListener().on('update', function (newState) { return _this.setState(newState); });
    }
    return FreezerReactComponent;
})(React.Component);
var store = new Freezer({ root: [{ itemId: 0 }, { itemId: 1 }, { itemId: 2 }] });
//https://facebook.github.io/react/docs/reusable-components.html
var Parent = (function (_super) {
    __extends(Parent, _super);
    function Parent(props) {
        var _this = this;
        _super.call(this, props, store.get());
        this.addItem = function (ev) { return _this.state.root.push({ itemId: cnt++ }); };
        this.modifyFirstItem = function (ev) { return _this.state.root[0].set({ itemId: cnt++ }); };
    }
    Parent.prototype.render = function () {
        return React.createElement("div", null, React.createElement("a", {"href": "#", "onClick": this.addItem}, "add item"), React.createElement("br", null), React.createElement("a", {"href": "#", "onClick": this.modifyFirstItem}, "modify first item"), React.createElement("br", null), React.createElement("ul", null, _.map(this.state.root, function (item) { return React.createElement(Child, {"initState": item}); })));
    };
    return Parent;
})(FreezerReactComponent);
var cnt = 4;
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(props) {
        _super.call(this, props, props.initState);
    }
    Child.prototype.render = function () {
        return React.createElement("li", null, this.state.itemId);
    };
    return Child;
})(FreezerReactComponent);
React.render(React.createElement(Parent, null), document.body);
