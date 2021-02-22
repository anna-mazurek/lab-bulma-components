import React from 'react';
import "./Message.css";

class Message extends React.Component {
    render() {
        return (
            <article className="message is-info">
  <div className="message-header">
    <p>{this.props.title}</p>
    <button className="delete" aria-label="delete"></button>
  </div>
  <div className="message-body">
    {this.props.text}
  </div>
</article>

        )
    }
}

export default Message;
