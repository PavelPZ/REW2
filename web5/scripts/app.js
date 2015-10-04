var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//************* FREEZER-REACT updatable component helper
var FreezerReactComponent = (function (_super) {
    __extends(FreezerReactComponent, _super);
    function FreezerReactComponent(props, initState) {
        var _this = this;
        _super.call(this, props);
        this.componentDidMount = function () { return _this.state.getListener().on('update', function (newState) { return _this.setState(newState, function () { return _this.state = newState; }); }); };
        this.componentWillUnmount = function () { return _this.state.getListener().off('update'); };
        this.state = initState;
    }
    return FreezerReactComponent;
})(React.Component);
//************** ROOT STORE
var cnt = 0;
var globalRootStore = new Freezer({
    titleItem: { title: 'title ' + cnt++ },
    listItems: [{ itemId: cnt++ }, { itemId: cnt++ }, { itemId: cnt++ }] //list items components
});
//************** ROOT component
var RootComponent = (function (_super) {
    __extends(RootComponent, _super);
    function RootComponent(props) {
        var _this = this;
        _super.call(this, props, props.initState);
        //----- try one from those variants
        this.addItem = function (ev) { ev.preventDefault(); _this.state.titleItem.reset({ title: 'title ' + cnt++ }); _this.state.listItems.push({ itemId: cnt++ }); }; //modify, update event is called;
    }
    RootComponent.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h3", null, React.createElement(TitleComponent, null)), React.createElement("a", {"href": "#", "onClick": this.addItem}, "add item"), React.createElement("br", null), React.createElement("ul", null, this.state.listItems.map(function (item) { return React.createElement(ListItemComponent, {"key": item.itemId.toString(), "initState": item}); })), "...", React.createElement(TitleComponent, null), "...");
    };
    return RootComponent;
})(FreezerReactComponent);
//************* CHILD LI component
var ListItemComponent = (function (_super) {
    __extends(ListItemComponent, _super);
    function ListItemComponent(props) {
        var _this = this;
        _super.call(this, props, props.initState);
        //render() { return <li><TitleComponent/> <a href="#" onClick={this.modifyItem}>item {this.state.itemId}</a></li>; } //render needed because of title changed when new item is added
        this.modifyItem = function (ev) { ev.preventDefault(); _this.state.reset({ itemId: cnt++ }); };
    }
    //----- try one from those variants
    ListItemComponent.prototype.render = function () { return React.createElement("li", null, React.createElement("a", {"href": "#", "onClick": this.modifyItem}, "item ", this.state.itemId)); }; //no render when new item is added
    return ListItemComponent;
})(FreezerReactComponent);
//************* TITLE component
var TitleComponent = (function (_super) {
    __extends(TitleComponent, _super);
    function TitleComponent(props) {
        _super.call(this, props, globalRootStore.get().titleItem);
    }
    TitleComponent.prototype.render = function () { return React.createElement("span", null, this.state.title); };
    return TitleComponent;
})(FreezerReactComponent);
//************* RENDER to body
React.render(React.createElement(RootComponent, {"initState": globalRootStore.get()}), document.body);
