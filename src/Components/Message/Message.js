import React from "react";
import "./Message.scss";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Message({ history }) {
  const [number, setNumber] = React.useState(null);
  const [message, setMessage] = React.useState("");

  function sendMessage() {
    axios
      .post("/api/message", {
        number,
        message
      })
      .then(res => {
        console.log({ res });
        history.push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />
      <div className="contact-info">
        <div>
          <h1 className="contact-title">Got an Issue? Text Us!</h1>
          <div className="phone-info">
            <div>
              <label className="message-label">Callback phone number</label>
              <div>
                <input
                  className="number-input"
                  type="number"
                  onChange={event => setNumber(event.target.value)}
                  placeholder="What's your number?"
                />
              </div>
            </div>
          </div>
          <div className="phone-info">
            <div>
              <label className="message-label">What's the problem?</label>
              <div>
                <textarea
                  className="problem-input"
                  onChange={event => setMessage(event.target.value)}
                  placeholder="My problem is..."
                />
              </div>
            </div>
          </div>
          <div className="center-btn">
            <button className="message-btn" onClick={sendMessage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Message;
