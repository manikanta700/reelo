const fs = require('fs');
 const QuestionPaperGenerator = require('./generator');

// Loading questions from the JSON file
const questionsData = fs.readFileSync('./data/questions.json', 'utf-8');
const questions = JSON.parse(questionsData);

// Example difficulty distribution
const input_question_paper_req = {
      totalMarks:100,
      difficultyDistribution : [
                              { difficulty: 'easy', percentage: 20 },
                              { difficulty: 'medium', percentage: 50 },
                              { difficulty: 'hard', percentage: 30 },
                               ]
      }


// Creating a QuestionPaperGenerator instance
const questionPaperGenerator = new QuestionPaperGenerator(questions);

// Generating the question paper
const generatedPaper = questionPaperGenerator.generateQuestionPaper(input_question_paper_req);

// Displaying the generated question paper
console.log('Generated Question Paper:');
generatedPaper.forEach((question, index) => {
  console.log(`${index + 1}. ${question.question} - ${question.difficulty} - ${question.marks} marks`);
});

