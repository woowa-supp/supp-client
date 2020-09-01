import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import SurveyType from "../component/SurveyType";
import SurveyStyle from "../component/SurveyStyle";
import SurveyResult from "../component/SurveyResult";
import MyPage from "../component/MyPage";

const Routes = (props) => {
  return (
    <div className="main-container">
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/survey-type">
            <SurveyType />
          </Route>
          <Route path="/survey-style">
            <SurveyStyle />
          </Route>
          <Route path="/survey-result">
            <SurveyResult />
          </Route>
          <Route path="/my-page">
            <MyPage />
          </Route>
        </Switch>
      </>
    </div>
  );
};

export default Routes;
