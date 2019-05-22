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
  videoRecommend:function(){
    wx.redirectTo({
      url: '../video-recommend/index',
    })
  },
  regionPage: function () {
    wx.redirectTo({
      url: '../region-page/index',
    })
  },
  nowPlay: function () {
    wx.navigateTo({
      url: '../now-play/index',
    })
  }
})
