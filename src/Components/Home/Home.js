import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="text-center">
      <header className="App-header">
        <img
          src={
            "https://thumbs.dreamstime.com/b/tution-sign-wooden-board-tution-sign-wooden-board-white-isolated-background-167887390.jpg"
          }
          className="App-logo"
          alt="logo"
        />
        <h1 className="App-title">Welcome </h1>
      </header>
      <p className="App-sub">Here You Can Reset Password Using Email</p>
    </div>
  );
};

export default Home;
