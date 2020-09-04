import React from "react";
import { Quiz } from "./services/QuizInterface";

interface Props {
  quiz: Quiz;
}

const Quiz = (props: Props) => {
  const { quiz } = props;
  return <h1>I am the Quiz</h1>;
};

export default Quiz;
