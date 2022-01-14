import './App.css';
import React, { Component } from "react";

import Haha from "./img/haha.png";
import "./css/app.css";
import Iloveu from "./img/iloveu.gif";
import Doitagain from "./img/doitagain.gif";
import Gif from "./component/Gif"



class AppWeb extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      status: true,
      complete: false
    }
    this.IgnoreButtonClick = this.IgnoreButtonClick.bind(this);
    this.AcceptButtonClick = this.AcceptButtonClick.bind(this);
  }
  IgnoreButtonClick() {
    this.setState(state => {
      return {
        status: !this.state.status,
        count: this.state.count + 1
      }
    });
  }
  AcceptButtonClick() {
    this.setState(state => {
      return {
        complete: !this.state.complete
      }
    });
  }
  render() {
    let { status, count, complete } = this.state
    return (
      <div className="App">
        <div>
          {
            complete === true && <div>
              <Gif img={Iloveu} />
              <Gif img={Iloveu} />
              <Gif img={Iloveu} />
              <Gif img={Iloveu} />
              <Gif img={Iloveu} />
              <Gif img={Iloveu} />

            </div>
          }
          {
            count === 3 && <Gif img={Doitagain} />
          }
          {
            count === 3 && setTimeout(() => window.location.reload(), 3000)
          }
        </div>
        {
          (count !== 3 && complete === false) && <div className="main-content">
            {
              status === true && <div className="Button-left-area">
                <div className="Button Green" onClick={this.AcceptButtonClick}>
                  <p >Đồng ý luôn</p>
                </div>
              </div>
            }
            {
              status === !true && <div className="Button-right-area">
                <div className="Button Red" onClick={this.IgnoreButtonClick}>
                  <p>hông nha bé ơi!!!!</p>
                </div>
              </div>
            }
            <div >
              <img src={Haha} width={600} height={400} />
            </div>
            {
              status === !true && <div className="Button-left-area">
                <div className="Button Green" onClick={this.AcceptButtonClick}>
                  <p >Đồng ý luôn</p>
                </div>
              </div>
            }
            {
              status === true && <div className="Button-right-area">
                <div className="Button Red" onClick={this.IgnoreButtonClick}>
                  <p>hông nha bé ơi!!!!</p>
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default AppWeb;
