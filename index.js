const fs = require('fs');
 const QuestionPaperGenerator = require('./generator');

// Load questions from the JSON file
const questionsData = fs.readFileSync('./data/questions.json', 'utf-8');
const questions = JSON.parse(questionsData);

// Example difficulty distribution
const difficultyDistribution = [
  { difficulty: 'easy', percentage: 20 },
  { difficulty: 'medium', percentage: 50 },
  { difficulty: 'hard', percentage: 30 },
];

// Example total marks
const totalMarks = 100;


// Create a QuestionPaperGenerator instance
const questionPaperGenerator = new QuestionPaperGenerator(questions);

// Generate the question paper
const generatedPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Display the generated question paper
console.log('Generated Question Paper:');
generatedPaper.forEach((question, index) => {
  console.log(`${index + 1}. ${question.question} - ${question.difficulty} - ${question.marks} marks`);
});

