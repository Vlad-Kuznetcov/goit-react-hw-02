import s from "../Options/Options.module.css";

const Options = ({ updateFeedback, feedback }) => {
  return (
    <div>
      <button className={s.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {feedback > 0 ? (
        <button className={s.btn} onClick={() => updateFeedback("reset")}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
