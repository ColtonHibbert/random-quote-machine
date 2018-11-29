import React, { Component } from 'react';
import './App.css';
import Display from './Display.js'; 
import Quote from './Quote.js';
import DisplayBottom from './DisplayBottom.js';
import ShareSectionColumn from './ShareSectionColumn.js';
import QuoteSectionColumn from './QuoteSectionColumn.js';
import ShareSectionRow from './ShareSectionRow.js';
import QuoteSectionRow from './QuoteSectionRow.js';
import NewQuote from './NewQuote.js';
import Share from './Share.js'

class App extends Component {
  constructor(props) {
    super(props )
    this.state = {
      quotes: ["one", "two", "three"],
      quoteIndex: 0,
      colorIndex:  0,
      colors: ["blue",  "red", "green", "orange"],
      buttonClicked: false,
      backgroundColor: 'black',
      isToggleOn: true,
    }
     this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    console.log(this.state.backgroundColor);
  }
  
  handleClick() {
    let counter = this.state.colorIndex;
    let color = this.state.colors[counter];
    let quoteCounter = this.state.quoteIndex;
    if (counter == 3) {
      counter -= 4;
        
      }
     console.log(this.state.colorIndex)
     console.log(color)
        this.setState(
           {
            colorIndex: counter + 1,
            quoteIndex: quoteCounter + 1,
           }
          )
     
      }
  

  render() {
    return(
      <div className="vh-100 flex items-center justify-center bg-light-green">
        <Display>
          <Quote quotes={this.state.quotes} quoteIndex={this.state.quoteIndex}/>
          <DisplayBottom>
            <ShareSectionColumn>
              <ShareSectionRow> 
                <Share />
                <Share />
              </ShareSectionRow>
            </ShareSectionColumn>
            <QuoteSectionColumn>
              <QuoteSectionRow>
                <NewQuote onPress={this.handleClick} />
                
              </QuoteSectionRow>
            </QuoteSectionColumn>
          </DisplayBottom>
        </Display>
      
      </div>
      )
  }




}


export default App;
