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
      quotes: ["It's not my fault.", "Your focus determines your reality", "Somebody has to save our skins", "In my experience there is no such thing as luck", "I find your lack of faith disturbing",
      "Traveling through hyperspace ain't like dusting crops, farm boy", "The force is strong with this one", "Judge me by my size, do you?", "May the Force be with you", "I think I just blasted it", 
      "I’m one with the Force, and the Force is with me"],
      quote: [],
      quoteIndex: 0,
      author: ["Han Solo", "Qui-Gon Jinn", "Leia Organa", "Obi-Wan Kenobi", "Darth Vader", "Han Solo",  "Darth Vader", "Yoda", "General Dodonna", "Luke Skywalker", "Chirrut Imwe"],
      authorIndex: 0,
      colorIndex:  0,
      colors: ["#00FFFF",  "#E6E6FA", "#F4A460", "#FA8072", "#98FB98", "#FF00FF", "#FF6347", "#66CDAA", "#FF4500", "#FFD700"],
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
    let colorCounter = this.state.colorIndex;
    let color = this.state.colors[colorCounter];
    let quoteCounter = this.state.quoteIndex;
    let authorCounter = this.state.authorIndex;
    if (colorCounter === this.state.colors.length - 1) {
      colorCounter = -1; 
      }
    if (quoteCounter === this.state.quotes.length -1 || authorCounter === this.state.author.length -1) {
      quoteCounter = -1;
      authorCounter= -1;
    }
     console.log(this.state.colorIndex)
     console.log(color)
        this.setState(
           {
            colorIndex: colorCounter + 1,
            quoteIndex: quoteCounter + 1,
            authorIndex: authorCounter +1,
           }
          )
     
      }
  

  render() {
    return(
      <div style={{background: this.state.colors[this.state.colorIndex]}} className="vh-100 flex items-center justify-center bg-light-green">
        <Display id="quote-box">
          <Quote quotes={this.state.quotes} quoteIndex={this.state.quoteIndex}
           author={this.state.author} authorIndex={this.state.authorIndex}/>
          <DisplayBottom>
            <ShareSectionColumn>
              <ShareSectionRow> 
                <Share colors={this.state.colors}  colorIndex={this.state.colorIndex}/>
              </ShareSectionRow>
            </ShareSectionColumn>
            <QuoteSectionColumn>
              <QuoteSectionRow>
                <NewQuote onPress={this.handleClick}
                colors={this.state.colors}  colorIndex={this.state.colorIndex}
                 />
              </QuoteSectionRow>
            </QuoteSectionColumn>
          </DisplayBottom>
        </Display>
      
      </div>
      )
  }




}


export default App;
