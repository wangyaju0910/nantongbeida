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
  attentionPage:function(){
    wx.navigateTo({
      url: '../attention-page/index',
    });
  },
  regionPage:function(){
    wx.navigateTo({
      url: '../region-page/index',
    })
  },
  nowPlay:function(){
    wx.navigateTo({
      url: '../now-play/index',
    })
  }
})
