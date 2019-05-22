Page({
  discountHaved:function(){
    wx.redirectTo({
      url: '../discount-haved/index',
    })
  },
  discountPast: function () {
    wx.redirectTo({
      url: '../discount-past/index',
    })
  }
})