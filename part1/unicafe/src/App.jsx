import React from 'react';
import { useState } from 'react';

const Header = (props) => <h1>{props.text}</h1>;

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Score = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.score}</td>
    </tr>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.formula}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;

  const total = good + neutral + bad;
  const average = () => ((good - bad) / total).toFixed(1);
  const percentPositive = () => (good / total * 100).toFixed(1) + " %";

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        <tbody>
          <Score text="good" score={good} />
          <Score text="neutral" score={neutral} />
          <Score text="bad" score={bad} />
          <StatisticLine text="all" formula={total} />
          <StatisticLine text="average" formula={average()} />
          <StatisticLine text="positive" formula={percentPositive()} />
        </tbody>
      </table>
    )
  }
}

function App() {
  const [good, setGood] = useState(0);
  const increaseGood = () => setGood(good + 1);

  const [neutral, setNeutral] = useState(0);
  const increaseNeutral = () => setNeutral(neutral + 1);

  const [bad, setBad] = useState(0);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
