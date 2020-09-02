import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SuppButton from "./common/SuppButton";
import { SURVEY_TYPE_STAGES } from "../const/stages";

const SurveyType = (props) => {
  const [stage, setStage] = useState(0);

  const history = useHistory();

  const updateStage = (nextStage) => {
    if (nextStage > 9) {
      // todo api to update survey-style
      history.push("/survey-style");
    } else {
      setStage(nextStage);
    }
  };

  return (
    <div>
      <div className="title">{SURVEY_TYPE_STAGES[stage].question}</div>
      <div className="survey-type-buttons">
        <SuppButton
          content={SURVEY_TYPE_STAGES[stage].leftAnswer}
          fontColor="#ffffff"
          bgColor="#007bff"
          handleClick={() =>
            updateStage(SURVEY_TYPE_STAGES[stage].leftDestination)
          }
        />
        <SuppButton
          content={SURVEY_TYPE_STAGES[stage].rightAnswer}
          fontColor="#ffffff"
          bgColor="#007bff"
          handleClick={() =>
            updateStage(SURVEY_TYPE_STAGES[stage].rightDestination)
          }
        />
      </div>
    </div>
  );
};

export default SurveyType;
