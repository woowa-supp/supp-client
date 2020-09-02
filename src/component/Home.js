import React from "react";
import { useHistory } from "react-router-dom";
import SuppButton from "./common/SuppButton";
import { HOME_SUBTITLE, HOME_TITLE } from "../const/constants";

const Home = (props) => {
    const history = useHistory();

    const startSurvey = () => {
        history.push("/survey-type")
    }

  const loadButtonsByLogin = () => {
    if (true) {
      return (
        <div className="home-buttons">
          <SuppButton
            content="조사 시작하기"
            fontColor="#ffffff"
            bgColor="#007bff"
            handleClick={startSurvey}
          />
          <SuppButton
            content="로그아웃"
            fontColor="#ffffff"
            bgColor="#117a8b"
          />
        </div>
      );
    } else {
      return (
        <div className="home-buttons">
          <SuppButton
            content="Github으로 로그인하기"
            fontColor="#ffffff"
            bgColor="#28a745"
          />
        </div>
      );
    }
  };

  return (
    <div className="home">
      <div className="title">{HOME_TITLE}</div>
      <div className="subtitle">{HOME_SUBTITLE}</div>
      {loadButtonsByLogin()}
    </div>
  );
};

export default Home;
