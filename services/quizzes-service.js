const quizzesDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
        return quizzesDao.findQuizById(quizId)
}

module.exports = {
    findAllQuizzes,
    findQuizById,
}