const questionsDao  = require("../daos/questions-dao")

const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (quizId) => {
    return questionsDao.findQuestionsForQuiz(quizId)
}

const findQuestionById = (questionId) => {
    return questionsDao.findQuestionById(questionId)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
}