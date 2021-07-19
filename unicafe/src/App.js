import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  console.log("props: ", props);
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Display = (props) => {
  if (
    props.feedback.good === 0 &&
    props.feedback.neutral === 0 &&
    props.feedback.bad === 0
  ) {
    return <div>no feedback given</div>;
  }

  return (
    <div>
      <Statistics value={props.feedback.good} text="good" />
      <Statistics value={props.feedback.neutral} text="neutral" />
      <Statistics value={props.feedback.bad} text="bad" />
      <Statistics
        value={
          props.feedback.good + props.feedback.neutral + props.feedback.bad
        }
        text="all"
      />
      <Statistics
        value={
          (props.feedback.good - props.feedback.bad) /
          (props.feedback.good + props.feedback.neutral + props.feedback.bad)
        }
        text="average"
      />
      <Statistics
        value={[
          (props.feedback.good /
            (props.feedback.good +
              props.feedback.neutral +
              props.feedback.bad)) *
            100,
          <span key="1">&#37;</span>,
        ]}
        text="positive"
      />
    </div>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const setToFeedback = (props) => {
    if (props === "good") {
      setFeedback({ ...feedback, good: feedback.good + 1 });
    } else if (props === "neutral") {
      setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
    } else {
      setFeedback({ ...feedback, bad: feedback.bad + 1 });
    }
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setToFeedback("good")} text="good" />
        <Button handleClick={() => setToFeedback("neutral")} text="neutral" />
        <Button handleClick={() => setToFeedback("bad")} text="bad" />{" "}
      </div>
      <div>
        <h1>statistics</h1>
        <Display feedback={feedback} />
      </div>
    </div>
  );
};

export default App;
