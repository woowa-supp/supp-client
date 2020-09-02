import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MultipleChoice from "./MultipleChoice";
import ShortWriting from "./ShortWriting";
import { SURVEY_STYLE_STAGES } from "../../const/stages";

const SurveyStyle = (props) => {
  const [stage, setStage] = useState(0);
  const history = useHistory();

  const updateStage = () => {
    // todo set answer
    setStage(stage + 1);
  };

  const submitResult = () => {
    // todo api to server and redirect with type result page
    updateStage();
    history.push(`/survey-result/ninja`);
  };

  if (stage <= 4) {
    return (
      <div>
        <div className="title">{SURVEY_STYLE_STAGES[stage].question}</div>
        <MultipleChoice
          choices={SURVEY_STYLE_STAGES[stage].choices}
          handleClick={updateStage}
        />
      </div>
    );
  } else if (stage <= 6) {
    return (
      <div>
        <div className="title">{SURVEY_STYLE_STAGES[stage].question}</div>
        <ShortWriting
          content={SURVEY_STYLE_STAGES[stage].content}
          handleClick={updateStage}
          buttonContent={SURVEY_STYLE_STAGES[stage].buttonContent}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div className="title">{SURVEY_STYLE_STAGES[stage].question}</div>
        <ShortWriting
          content={SURVEY_STYLE_STAGES[stage].content}
          handleClick={submitResult}
          buttonContent={SURVEY_STYLE_STAGES[stage].buttonContent}
        />
      </div>
    );
  }
};

export default SurveyStyle;
