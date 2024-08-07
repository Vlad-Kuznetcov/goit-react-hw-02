import { useEffect, useState } from "react";
import Descriptions from "./components/Counter/Descriptions/Descriptions";
import Feedback from "./components/Counter/Feedback/Feedback";
import Options from "./components/Counter/Options/Options";
import Notification from "./components/Counter/Notification/Notification";

// function App() {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedLsFeedback = window.localStorage.getItem("feedback");
    return savedLsFeedback
      ? JSON.parse(savedLsFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else
      setFeedback((prev) => ({
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Descriptions />
      <Options updateFeedback={updateFeedback} feedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
