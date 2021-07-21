import { useState } from "react";

const AnecdoteDay = (props) => {
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
      <Vote vote={props.addVote} />
      <Next nextAnecdote={props.nextAnecdote} />
    </div>
  );
};

const AnecdoteMostVote = (props) => {
  if (props.anecdotes) {
    let tmp = [...props.points];
    tmp.sort();
    let mostVoted =
      props.anecdotes[
        props.points.findIndex((data) => data === tmp[tmp.length - 1])
      ];

    return (
      <div>
        <h1>Anecdote with the Most Votes</h1>
        <p>{mostVoted}</p>
        <p>has {tmp[tmp.length - 1]} votes</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Anecdote with the Most Votes</h1>
    </div>
  );
};

const Next = (props) => {
  return (
    <span>
      <button onClick={props.nextAnecdote}>next anecdote</button>
    </span>
  );
};

const Vote = (props) => {
  return (
    <span>
      <button onClick={props.vote}>vote</button>
    </span>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const copy = [...points];
  const addVote = () => {
    copy[selected] += 1;
    setPoints(copy);
  };
  const nextAnecdote = () => {
    return selected === anecdotes.length - 1
      ? setSelected(0)
      : setSelected(selected + 1);
  };

  return (
    <div>
      <AnecdoteDay
        nextAnecdote={() => nextAnecdote()}
        addVote={() => addVote()}
        anecdote={anecdotes[selected]}
        votes={points[selected]}
      />
      <AnecdoteMostVote anecdotes={anecdotes} points={points} />
    </div>
  );
};

export default App;
