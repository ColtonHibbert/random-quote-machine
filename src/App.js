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
      quotes: [],
      colors: ["blue",  "red", "green"],
      buttonClicked: false,
      backgroundColor: 'black',
    }
     
  }


  componentDidMount() {
    console.log(true);
  }

  

  render() {
    return(
      <div className="vh-100 flex items-center justify-center bg-light-green">
        <Display>
          <Quote />
          <DisplayBottom>
            <ShareSectionColumn>
              <ShareSectionRow> 
                <Share />
                <Share />
              </ShareSectionRow>
            </ShareSectionColumn>
            <QuoteSectionColumn>
              <QuoteSectionRow>
                <NewQuote />
              </QuoteSectionRow>
            </QuoteSectionColumn>
          </DisplayBottom>
        </Display>
      
      </div>
      )
  }




}


export default App;
