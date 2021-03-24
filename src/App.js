import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    //debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return{
    addItem: () => {
      dispatch(addItem());
    }
  }
}

//export default connect(mapStateToProps, /*mapDispatchToProps*/{addItem})(App); //Can use either argument to incorporate dispatch.
export default connect(state => ({ items: state.items }), { addItem })(App); //Both of these methods work. This one removes the need for "mapStateToProps" and "mapDispatchToProps" functions.