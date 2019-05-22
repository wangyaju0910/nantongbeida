Page({
  obligationPage:function(){
    wx.redirectTo({
      url: '../obligation-page/index',
    })
  },
  deliverPage: function () {
    wx.redirectTo({
      url: '../deliver-page/index',
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
  afterPage: function () {
    wx.redirectTo({
      url: '../after-page/index',
    })
  },
})