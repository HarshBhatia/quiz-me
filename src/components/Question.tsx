import React from "react";
import { Question } from "../services/QuizInterface";

interface Props {
  question: Question;
  onAnswer: (questionId: string, optionId: string) => void;
}

const QuestionComponent = (props: Props) => {
  const { question, onAnswer } = props;

  const handleAnswerChange = (e: any): void => {
    if (e.target === null) return;
    console.log(e.target.value);
    onAnswer(question.id, e.target.value);
  };

  return (
    <div>
      <h4>{question.questionText}</h4>
      <div>
        {question.options.map((option) => (
          <div>
            <input
              type="radio"
              id={option._id}
              name={question.id}
              value={option._id}
              onChange={handleAnswerChange}
            />
            <label htmlFor="huey">{option.optionText}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
