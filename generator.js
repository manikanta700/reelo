const _ = require('lodash');

class QuestionPaperGenerator {
  constructor(questions) {
    this.questions = questions;
  }

  generateQuestionPaper(input_question_paper_req) {
    const totalMarks = input_question_paper_req.totalMarks
    const difficultyDistribution = input_question_paper_req.difficultyDistribution
    const questionPaper = [];

    difficultyDistribution.forEach(({ difficulty, percentage }) => {
       const marks_sum = Math.round((totalMarks * percentage) / 100);
       const selectedQuestions = [];

        // Shuffle the array of filtered questions
        const shuffledQuestions = _.shuffle(_.filter(this.questions, { difficulty }));

        for (const question of shuffledQuestions) {
        if (_.sumBy(selectedQuestions, 'marks') < marks_sum) {
            selectedQuestions.push(question);
        } else {
            break; // Exit the loop when the total marks are reached
        }
        }

        questionPaper.push(...selectedQuestions);
    });


    if (_.sumBy(questionPaper, 'marks') !== totalMarks) {
        // Handle case where the total marks of the generated paper do not match the specified total marks
        console.error('The total marks of the generated paper do not match the specified total marks.');
        process.exit(1);
      }
      

    return questionPaper;
  }
}

module.exports = QuestionPaperGenerator;
