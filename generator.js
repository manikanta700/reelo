const _ = require('lodash');

class QuestionPaperGenerator {
  constructor(questions) {
    this.questions = questions;
  }

  generateQuestionPaper(input_question_paper_req) {
    const totalMarks = input_question_paper_req.totalMarks
    const difficultyDistribution = input_question_paper_req.difficultyDistribution
    const questionPaper = [];


    var check_percentage = 0 
    difficultyDistribution.forEach((elem) => {

       check_percentage += elem.percentage
       const marks_sum = Math.round((totalMarks * elem.percentage) / 100);
       const selectedQuestions = [];

        // Shuffle the array of filtered questions
        const shuffledQuestions = _.shuffle(_.filter(this.questions, {[Object.keys(elem)[0]]:elem[Object.keys(elem)[0]]} ));
        // console.log(shuffledQuestions)

        for (const question of shuffledQuestions) {
        if (_.sumBy(selectedQuestions, 'marks') < marks_sum) {
            selectedQuestions.push(question);
        } else {
            break; // Exit the loop when the total marks are reached
        }
        }

        

        questionPaper.push(...selectedQuestions);
    });


    if(check_percentage!=100){
      // Handling the case when given percentages sum is not 100
      console.error('Can`t make the Question paper as  given difficulty distribution percentages sum is not 100');
      process.exit(1);

    }
    else if ( _.sumBy(questionPaper, 'marks') !== totalMarks) {
        // Handling case where the total marks of the generated paper do not match the specified total marks
        console.error('Can`t make the Question paper as total marks of the generated paper with given difficulty distribution do not match the specified total marks.');
        process.exit(1);
      }
      

    return questionPaper;
  }
}

module.exports = QuestionPaperGenerator;
