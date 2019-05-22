//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  indexPage: function() {
    wx.reLaunch({
      url: '../index/index',
    })
  },
  obligationPage: function() {
    wx.navigateTo({
      url: '../obligation-page/index',
    })
  },
  deliverPage: function() {
    wx.navigateTo({
      url: '../deliver-page/index',
    })
  },
  takePage: function() {
    wx.navigateTo({
      url: '../take-page/index',
    })
  },
  afterPage: function() {
    wx.navigateTo({
      url: '../after-page/index',
    })
  },
  applyEnter: function() {
    wx.navigateTo({
      url: '../apply-enter/index',
    })
  },
  integralPage: function() {
    wx.navigateTo({
      url: '../integral-page/index',
    })
  },
  attentionStore: function() {
    wx.navigateTo({
      url: '../attention-store/index',
    })
  },
  footprintPage: function() {
    wx.navigateTo({
      url: '../footprint-page/index',
    })
  },
  memberModification: function() {
    wx.navigateTo({
      url: '../member-modification/index',
    })
  },
  addressHave: function() {
    wx.navigateTo({
      url: '../address-have/index',
    })
  },
  noEvaluate: function() {
    wx.navigateTo({
      url: '../no-evaluate/index',
    })
  },
  discountHave: function() {
    wx.navigateTo({
      url: '../discount-havee/index',
    })
  },
  articlesLaw: function () {
    wx.navigateTo({
      url: '../articles-law/index',
    })
  },
  creditExchange:function(){
    wx.navigateTo({
      url: '../credit-exchange/index',
    })
  }
})