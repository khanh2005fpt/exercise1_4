import React, { useReducer } from 'react';
import { Button, Container, Card, Stack } from 'react-bootstrap';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    case 'NEXT_QUESTION': {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;
      const nextIndex = state.currentQuestion + 1;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        selectedOption: '',
        currentQuestion: nextIndex,
        showScore: nextIndex >= state.questions.length,
      };
    }
    case 'RESTART_QUIZ':
      return initialState;
    default:
      return state;
  }
};

export default function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  const question = state.questions[state.currentQuestion];

  return (
    <Container fluid className="vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
      {state.showScore ? (
        <div className="text-center">
          <h1 className="display-4 mb-4">Your Score: {state.score}/{state.questions.length}</h1>
          <Button variant="light" className="px-4 py-2 fs-5 shadow" onClick={handleRestartQuiz}>
            Restart Quiz
          </Button>
        </div>
      ) : (
        <div className="w-50 text-center">
          <h2 className="mb-3">Question {state.currentQuestion + 1}</h2>
          <h4 className="mb-4">{question.question}</h4>
          <Stack direction="horizontal" gap={3} className="justify-content-center mb-4 flex-wrap">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={state.selectedOption === option ? 'primary' : 'light'}
                className="px-4 py-2 text-dark fs-5"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </Button>
            ))}
          </Stack>
          <Button
            variant="light"
            className="px-5 py-2 fs-5 shadow"
            disabled={!state.selectedOption}
            onClick={handleNextQuestion}
          >
            Next
          </Button>
        </div>
      )}
    </Container>
  );
}