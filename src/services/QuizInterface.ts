export interface Score {
  name: string;
  value: number;
}

export interface Option {
  optionText: string;
  id: string;
}

export interface Question {
  id: string;
  options: Option[];
  questionText: string;
}

export interface Quiz {
  id: string;
  createdAt: Date;
  questions: Question[];
  scores: Score[];
}
