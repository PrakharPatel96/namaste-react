import { useEffect } from "react";

const User = ({ name, contact, github }) => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Interval Function?");
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="user-container">
      <h2> Name: {name}</h2>
      <h2>Contact: {contact}</h2>
      <h2>Github: {github}</h2>
    </div>
  );
};

export default User;
