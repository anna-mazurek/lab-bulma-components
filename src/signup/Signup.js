import React from "react";
import Navbar from "./../navbar/Navbar";
import FormField from "./../formfield/FormField";
import CoolButton from "./../buttons/CoolButton";
import Message from "./../message/Message";

class Signup extends React.Component {
  render() {
    return (
        <div>
      <div className="container">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" />
        <CoolButton
          action="Submit"
          className=" button is-small is-danger is-rounded my-class"
        ></CoolButton>
      </div>
      <Message title="New message" text="This is the message body"/>
      </div>
    );
  }
}

export default Signup;
