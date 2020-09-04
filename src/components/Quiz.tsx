import React from "react";
import { Quiz } from "../services/QuizInterface";
import Question from "./Question";

interface Props {
  quiz: Quiz | null;
}

const QuizComponent = (props: Props) => {
  const { quiz } = props;
  const [score, setScore] = React.useState<number>(0);

  if (!quiz) return <div />;

  const handleAnswer = (questionId: string, optionId: string): void => {
    const question = quiz.questions.find(
      (question) => question.id === questionId
    );
    if (question?.rightOption === optionId) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h1>{quiz.id}</h1>
      <h3>Your Score: {score}</h3>
      {quiz.questions.map((q) => (
        <Question question={q} onAnswer={handleAnswer} />
      ))}
    </div>
  );
};

export default QuizComponent;
