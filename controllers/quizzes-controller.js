const quizzesService = require("../services/quizzes/quiz-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        res.send(quizzesService.findAllQuizzes())
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        res.send(quizzesService.findQuizById(quizId))
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}