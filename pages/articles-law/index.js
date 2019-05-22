Page({
  fakeClause:function(){
    wx.navigateTo({
      url: '../fake-clause/index',
    })
  },
  userAgreement: function () {
    wx.navigateTo({
      url: '../user-agreement/index',
    })
  },
  privacyPolicy: function () {
    wx.navigateTo({
      url: '../privacy-policy/index',
    })
  },
})