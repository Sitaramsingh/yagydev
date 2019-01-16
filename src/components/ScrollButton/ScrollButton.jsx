import React, {Component} from 'react';
import './ScrollButton.css'

class ScrollButton extends Component{
    constructor(){
        super();
        this.state={
            intervalId: 0,
            scroll: false
        }
    }
    scrollTop() {
       window.scroll( {top: 0, left:0, behavior: 'smooth'})
      }
      scrollBottom() {
          
        window.scrollTo(0,document.body.scrollHeight,  'smooth');
       }
    render(){
        return(
            <div>
                    <button  className="scrollButton"
                       onClick={() => {this.scrollTop()}}
                    >
                    Go to Top
                </button> 
                <button  className="myBtn"
                     onClick={() => {this.scrollBottom()}}
                >
                    Go to Bottom
                </button>      
            </div>
        )
    }
}
export default ScrollButton;