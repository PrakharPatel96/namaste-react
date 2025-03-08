import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      user: {
        login: "Dummy",
        avatar_url: "",
        url: "Dummy",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");
    try {
      const response = await fetch(
        "https://api.github.com/users/prakharpatel96"
      );
      if (!response.ok) {
        console.log("Response not okay");
        return;
      }
      const userData = await response.json();
      if (!userData) {
        console.log("No user Data Present");
        return;
      }
      this.setState({
        user: userData,
      });
    } catch (err) {
      console.log("Error in API call", err);
    }
    this.interval = setInterval(() => {
      console.log("Interval ?");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, contact, github } = this.props;
    const { count, count2 } = this.state;
    const { login, avatar_url, url } = this.state.user;

    return (
      <div className="user-container">
        <img src={avatar_url} alt="GitHub Logo" />
        <h2> Name: {login}</h2>
        <h2>Github: {url}</h2>
        <div>
          Count: {count}, {count2}
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default UserClass;
