import React from "react";
import "./App.css";
import quizService from "./services/QuizService";
import Quiz from "./components/Quiz";
import { Quiz as TypeQuiz } from "./services/QuizInterface";

const App: React.FunctionComponent<{}> = () => {
  const [quiz, setQuiz] = React.useState<TypeQuiz | null>(null);

  React.useEffect(() => {
    quizService.getQuiz("L4rGZWb5X").then(setQuiz).catch(console.log);
  }, []);

  return (
    <div>
      <h1>Welcome to Quiz Me</h1>
      <Quiz quiz={quiz} />
    </div>
  );
};

export default App;
