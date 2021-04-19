const quizAttemptsModel = require('../db/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    return 100 * numberOfCorrectQuestions / questions.length }

const findAttemptsForQuiz = (qzid) => quizAttemptsModel.find({quiz: qzid}).populate('quiz', 'title _id')

const findLastAttempt = (qzid) => quizAttemptsModel.find({quiz: qzid}).populate('quiz', 'title _id').sort({_id:-1}).limit(1)

const createAttempt = (qid, attempt) =>
    quizAttemptsModel.create({ quiz: qid, answers: attempt, score: scoreQuiz(attempt) })

module.exports = { createAttempt, findAttemptsForQuiz, findLastAttempt }