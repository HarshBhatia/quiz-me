export interface Score {
  name: string;
  value: number;
}

export interface Option {
  optionText: string;
  _id: string;
}

export interface Question {
  id: string;
  options: Option[];
  questionText: string;
  rightOption: string;
}

export interface Quiz {
  id: string;
  createdAt: Date;
  questions: Question[];
  scores: Score[];
}
