// quiz.js
Page({
  data: {
    questions: [
      {
        id: 1,
        type: 'single',
        question: '小程序的主要开发语言是？',
        options: ['JavaScript', 'Python', 'Java', 'C#'],
        answer: 0
      },
      {
        id: 2,
        type: 'multiple',
        question: '以下哪些是小程序的主要组成部分？',
        options: ['js文件', 'json文件', 'wxml文件', 'wxss文件', 'java文件'],
        answer: [0, 1, 2, 3]
      }
    ],
    currentQuestionIndex: 0,
    selectedAnswer: [],
    showNext: false
  },
  onLoad: function (options) {
    this.setData({
      totalQuestions: this.data.questions.length
    })
  },
  selectOption: function (e) {
    const index = e.currentTarget.dataset.index
    const currentQuestion = this.data.questions[this.data.currentQuestionIndex]
    let selectedAnswer = this.data.selectedAnswer
    if (currentQuestion.type === 'single') {
      selectedAnswer = [index]
    } else {
      const pos = selectedAnswer.indexOf(index)
      if (pos === -1) {
        selectedAnswer.push(index)
      } else {
        selectedAnswer.splice(pos, 1)
      }
    }
    this.setData({
      selectedAnswer: selectedAnswer,
      showNext: selectedAnswer.length > 0
    })
  },
  nextQuestion: function () {
    const currentQuestion = this.data.questions[this.data.currentQuestionIndex]
    const selectedAnswer = this.data.selectedAnswer
    if (this.isCorrect(currentQuestion, selectedAnswer)) {
      getApp().globalData.userScore++
    }
    if (this.data.currentQuestionIndex < this.data.questions.length - 1) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1,
        selectedAnswer: [],
        showNext: false
      })
    } else {
      wx.navigateTo({
        url: '../result/result',
      })
    }
  },
  isCorrect: function (question, answer) {
    if (question.type === 'single') {
      return answer[0] === question.answer
    } else {
      return JSON.stringify(answer.sort()) === JSON.stringify(question.answer.sort())
    }
  }
})
