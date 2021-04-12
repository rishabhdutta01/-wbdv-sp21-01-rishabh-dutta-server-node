module.exports = (app) => {
    const questionService = require("../services/questions/questions-service")

    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions()
        res.send(questions)
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        res.send(questionService.findQuestionsForQuiz(quizId))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
}