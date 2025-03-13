// result.js
Page({
  data: {
    score: 0,
    totalQuestions: 0
  },
  onLoad: function (options) {
    const app = getApp()
    this.setData({
      score: app.globalData.userScore,
      totalQuestions: app.globalData.totalQuestions
    })
  },
  restartQuiz: function () {
    const app = getApp()
    app.globalData.userScore = 0
    wx.redirectTo({
      url: '../quiz/quiz',
    })
  },
  backToHome: function () {
    wx.navigateBack({
      delta: 2,
    })
  }
})
