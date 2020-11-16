import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import AddButton from './components/AddButton/AddButton';
import Image from './Image/wheeljpg.jpg';

import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {



  addZeroToInput = val => {
    if (this.props.input !== "") {
      this.props.onAddZero(val);
    }
  }


  generateRandom = () =>{
    let randomNumber = Math.floor(100000 + Math.random() * 900000)
    console.log(randomNumber);
    this.props.onGenerateRandom(randomNumber);
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="group">
            <div classsName="row">
              <Input>{this.props.input}</Input>

            </div>
            <div className="row">
              <Button handleClick={this.props.onAddToInput}>7</Button>
              <Button handleClick={this.props.onAddToInput}>8</Button>
              <Button handleClick={this.props.onAddToInput}>9</Button>
            </div>
            <div className="row">
              <Button handleClick={this.props.onAddToInput}>4</Button>
              <Button handleClick={this.props.onAddToInput}>5</Button>
              <Button handleClick={this.props.onAddToInput}>6</Button>
            </div>
            <div className="row">
              <Button handleClick={this.props.onAddToInput}>1</Button>
              <Button handleClick={this.props.onAddToInput}>2</Button>
              <Button handleClick={this.props.onAddToInput}>3</Button>
            </div>
            <div className="row">
            
              <Button handleClick={this.props.onBackspace}>x</Button>
              <Button handleClick={this.addZeroToInput}>0</Button>
              <ClearButton handleClear={this.props.onClearInput}>Clear</ClearButton>
             
            </div>


            <div className="row">
              <AddButton handleAdd={() => { this.props.onStoreResult(this.props.input) }} > Add Ticket </AddButton>

            </div>

           
            <ul>
              {this.props.storedResults.map(strResult => (
                // <div className="result">
                <li
                  className="result"
                  key={strResult.id}
                  
                >
                  <DeleteIcon className="delete-icon" onClick={() => this.props.onDeleteResult(strResult.id)} />
                  {strResult.value}
                </li>
                // </div>
              ))}
            </ul>
          </div>




          <div className="heading">
            <div className="box-heading">
              <h4> Click the wheel to generate random numbers</h4>
            </div>
            <img
              src={Image}
              className="image"
              onClick={this.generateRandom}
            />
            <div className="box-heading">
              <h4> Ticket number range : 100000-999999</h4>
            </div>
1st line i am done
changed this one
changed this too
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    input: state.input,
    storedResults: state.results
  };

};

const mapDispatchToProps = dispatch => {
  return {
    onAddToInput: (e) => dispatch({ type: 'addToInput', val: e }),
    onAddZero: (e) => dispatch({ type: 'addZeroToInput', val: e }),
    onClearInput: () => dispatch({ type: 'clearInput' }),

    onStoreResult: (result) => dispatch({ type: 'storeResult', result: result }),
    onGenerateRandom: (val) => dispatch({ type: 'generateRandom', randomNumber: val }),

    onDeleteResult: (id) => dispatch({ type: 'deleteResult', resultElId: id }),
    onBackspace: (e) => dispatch({ type: 'backspace', val: e })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
