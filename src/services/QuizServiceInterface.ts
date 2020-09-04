import { Quiz, Score } from "./QuizInterface";

export interface QuizServiceInterface {
  // getQuizzes: () => Promise<Array<Quiz>>;

  getQuiz: (id: string) => Promise<Quiz>;

  createQuiz: (quiz: Quiz) => void;

  // deleteQuiz: (quizId: string) => Promise<Response>;

  // postScore: (quizId: string, score: Score) => Promise<Response>;

  // getScores: (quizId: string) => Score[];
}
