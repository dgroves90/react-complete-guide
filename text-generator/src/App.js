import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './Components/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: "gibberish",
      element: 'p',
      paragraphs: 1,
      wordsFrom: 35,
      wordsTo: 50,
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('http://www.randomtext.me/api/'
    +this.state.type+
    '/'+this.state.element+'-'+this.state.paragraphs+
    '/'+this.state.wordsFrom+'-'+this.state.wordsTo+'/').then((response)=>{
      const textPlain = response.data.text_out.replace('<p>', '').replace('</p>', '');
      this.setState({text:textPlain}, function(){
        console.log(this.state);
      });
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  render(){
    return (
      <div className="App text-success">
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
