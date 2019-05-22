Page({
  obligationPage: function () {
    wx.redirectTo({
      url: '../obligation-page/index',
    })
  },
  deliverPage: function () {
    wx.redirectTo({
      url: '../deliver-page/index',
    })
  },
  noOrder: function () {
    wx.redirectTo({
      url: '../no-order/index',
    })
  },
  receivedPage: function () {
    wx.redirectTo({
      url: '../received-page/index',
    })
  },
  afterPage: function () {
    wx.redirectTo({
      url: '../after-page/index',
    })
  },
})