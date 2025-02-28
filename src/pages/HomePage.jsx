import React from "react";
import AllList from "../components/AllListContainer";
import Header from "../components/Header";
import MyList from "../components/MyListContainer";

const HomePage = () => {
  return (
    <div>
      <Header />

      <MyList />
      <AllList />
    </div>
  );
};

export default HomePage;
