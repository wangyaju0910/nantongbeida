//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  attentionPage: function () {
    wx.redirectTo({
      url: '../attention-page/index',
    });
  },
  videoRecommend: function () {
    wx.redirectTo({
      url: '../video-recommend/index',
    })
  },
  regionDetail:function(){
    wx.navigateTo({
      url: '../region-detail/index',
    })
  }
})
