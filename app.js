// TODO
// var App = () => (
//     <div>
//         <h1>Grocery List</h1>
//         <GroceryListItem groceries={['Milk', 'Butter']}></GroceryListItem>
//     </div>
// )

// var GroceryListItem = (props) => (
//     <ul>
//         <li>{props.groceries[0]}</li>
//         <li>{props.groceries[1]}</li>
//     </ul>
// )


// ReactDOM.render(App(), document.getElementById('app'));

class GroceryListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            done: false
        }
    }

    onListItemClick() {
        this.setState({
          done: !this.state.done
        });
      }

    render(){

        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return(
            <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.map(grocery =>
            <GroceryListItem key={grocery} grocery={grocery} />
        )}
    </ul>
)

const result = GroceryList(['Bread', 'Water', 'Eggs'])

ReactDOM.render(
    result,
    document.getElementById('app')
  );
