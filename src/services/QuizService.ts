import { QuizServiceInterface } from "./QuizServiceInterface";

const API_URL: string = "https://66a8ddab713f.ngrok.io";

const QuizService: QuizServiceInterface = {
  getQuiz: async (id) => {
    const response = await fetch(`${API_URL}/quizzes/${id}`);
    const quiz = await response.json();
    return quiz;
  },

  createQuiz: async (q) => {
    const response = await fetch(`${API_URL}/quizzes`, {
      method: "POST",
      body: JSON.stringify(q),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
  },
};

export default QuizService;
