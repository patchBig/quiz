// index.js
Page({
  data: {
    // 页面的初始数据
  },
  onLoad: function (options) {
    // 页面加载时执行的函数
  },
  startQuiz: function () {
    // 开始答题按钮点击事件处理函数
    wx.navigateTo({
      url: '../quiz/quiz',
    })
  }
})
