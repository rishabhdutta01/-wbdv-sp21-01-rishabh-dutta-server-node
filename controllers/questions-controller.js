const questionService = require("../services/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions))

    }

    const findQuestionsForQuiz = (req, res) => {
        questionService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions))
    }

    const findQuestionsById = (req, res) => {
        questionService.findQuestionById(req.params['qid'])
            .then(question => res.json(question))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/questions/:qid", findQuestionsById);
}