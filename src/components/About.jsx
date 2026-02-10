import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us: </h1>
        <h2>This is Food Ordering App</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h3>User: {loggedInUser}</h3>}
        </UserContext.Consumer>
        <UserClass
          name={"First-Prakhar Patel-Class"}
          contact={"+91-9818791506-Class"}
          github={"PrakharPatel96-Class"}
        />
        {/* Uncomment code to play around- */}
        {/* <UserClass
          name={"Second-Elon Musk-Class"}
          contact={"+1-0101001001-Class"}
          github={"ElonMusk01-Class"}
        /> */}
        {/* <User
          name={"Prakhar Patel-Function"}
          contact={"+91-9818791506-Function"}
          github={"PrakharPatel96-Function"}
        /> */}
      </div>
    );
  }
}

export default About;
