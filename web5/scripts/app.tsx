//************* basic FREEZER TypeScript definition
interface IFreezerStatic {
  new <S>(par: S): IFreezerState<S>;
}
declare var Freezer: IFreezerStatic;

interface IFreezerCommon {
  getListener?: any;
  transact?: () => void;
  run?: () => void;
  now?: () => void;
}

interface IFreezerState<S> extends IFreezerCommon {
  remove?: (propName: string | string[]) => void;
  set?: (propName: string, newItem: S) => S; //listener of newItem is not preserved
  reset?: (newItem: S) => S; //listener of newItem is preserved
  get?: () => S;
}
interface IFreezerArray<S> extends Array<S>, IFreezerCommon {
  set?: (idx: number, newItem: S) => S;
  prepend?: (data: Array<S>) => void;
  append?: (data: Array<S>) => void;
}

//************* REACT.js event type
type reactEvent = (ev: React.SyntheticEvent) => void;

//************* FREEZER-REACT updatable component helper
class FreezerReactComponent<T, S extends IFreezerState<any>> extends React.Component<T, S>{
  constructor(props: T, initState: S) {
    super(props);
    this.state = initState;
  }
  componentDidMount = () => this.state.getListener().on('update', newState => this.setState(newState, () => this.state = newState));
  componentWillUnmount = () => this.state.getListener().off('update');
}

//************** stronlgy typed MODEL
interface IRootState extends IFreezerState<IRootState> { titleItem: ITitleState; listItems: IFreezerArray<IListItemState>; }
interface IRootProp { initState: IRootState; }
interface ITitleState extends IFreezerState<ITitleState> { title: string; }
interface IListItemState extends IFreezerState<IListItemState> { itemId: number; }
interface IListItemProp { initState: IListItemState; key:string }

//************** ROOT STORE
var cnt = 0;
var globalRootStore = new Freezer<IRootState>({
  titleItem: { title: 'title ' + cnt++ }, //title component
  listItems: [{ itemId: cnt++ }, { itemId: cnt++ }, { itemId: cnt++ }] //list items components
});

//************** ROOT component
class RootComponent extends FreezerReactComponent<IRootProp, IRootState>{
  constructor(props: IRootProp) {
    super(props, props.initState);
  }
  render() {
    return <div>
      <h3><TitleComponent/></h3>
      <a href="#" onClick={this.addItem}>add item</a><br/>
      <ul>{this.state.listItems.map(item => <ListItemComponent key={item.itemId.toString()} initState={item}/>) }</ul>
      ...<TitleComponent/>...
      </div>;
  }
  //----- try one from those variants
  addItem: reactEvent = ev => { ev.preventDefault(); this.state.titleItem.reset({ title: 'title ' + cnt++ }); this.state.listItems.push({ itemId: cnt++ }); }; //modify, update event is called;
  //addItem = ev => { this.state.set('titleItem', { title: 'title ' + Parent.cnt++ }); this.state.root.push({ itemId: Parent.cnt++ }); }; //replace, no update event is called
}


//************* CHILD LI component
class ListItemComponent extends FreezerReactComponent<IListItemProp, IListItemState>{
  constructor(props: IListItemProp) {
    super(props, props.initState);
  }
  //----- try one from those variants
  render() { return <li><a href="#" onClick={this.modifyItem}>item {this.state.itemId}</a></li>; } //no render when new item is added
  //render() { return <li><TitleComponent/> <a href="#" onClick={this.modifyItem}>item {this.state.itemId}</a></li>; } //render needed because of title changed when new item is added
  modifyItem: reactEvent = ev => { ev.preventDefault(); this.state.reset({ itemId: cnt++ }); };
}

//************* TITLE component
class TitleComponent extends FreezerReactComponent<{}, ITitleState>{
  constructor(props: ITitleState) {
    super(props, globalRootStore.get().titleItem);
  }
  render() { return <span>{this.state.title}</span>; }
}

//************* RENDER to body
React.render(<RootComponent initState={globalRootStore.get() }/>, document.body);
