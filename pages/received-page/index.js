Page({
  noOrder: function () {
    wx.redirectTo({
      url: '../no-order/index',
    })
  },
  deliverPage: function () {
    wx.redirectTo({
      url: '../deliver-page/index',
    })
  },
  obligationPage: function () {
    wx.redirectTo({
      url: '../obligation-page/index',
    })
  },
  takePage: function () {
    wx.redirectTo({
      url: '../take-page/index',
    })
  },
  afterPage: function () {
    wx.redirectTo({
      url: '../after-page/index',
    })
  },
})