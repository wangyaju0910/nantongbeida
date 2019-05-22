Page({
  obligationPage: function () {
    wx.redirectTo({
      url: '../obligation-page/index',
    })
  },
  noOrder: function () {
    wx.redirectTo({
      url: '../no-order/index',
    })
  },
  takePage: function () {
    wx.redirectTo({
      url: '../take-page/index',
    })
  },
  receivedPage: function () {
    wx.redirectTo({
      url: '../received-page/index',
    })
  },
  deliverPage: function () {
    wx.redirectTo({
      url: '../deliver-page/index',
    })
  },
})