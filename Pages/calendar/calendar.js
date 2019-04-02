// Pages/calendar/calendar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liquid: [
      {
        type: "节假日",
        title: "国庆节",
        emoji: "emoji",
        time: "距今12天",
        author: "方 正",
        wallpaper:"http://pp8qnwtjv.bkt.clouddn.com/surge-lamp.jpg",

      },
      {
        type: "钉一下",
        title: "记得买猫粮哦！记得买猫粮哦！记得买猫粮哦！",
        emoji: "emoji",
        time: "2小时前",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg1.jpg",
        userImg: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg2.jpg"
      },
      {
        type: "时光轴",
        title: "恋爱纪念&&结婚纪念",
        emoji: "emoji",
        time: "4月10日",
        author: "方 正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg",
        FYI:"蛮横天真可爱 都是你不可解的魔术成份"

      },
      {
        type: "记忆碎片",
        emoji: "emoji",
        time: "4月11日",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg4.jpg",
        num:"2"

      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: app.serverUrl + '/login', // 仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        username: 'zh',
        password: '123456'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {

      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  close: function () {
    wx.switchTab({
      url: '../../index/index',
    })
  }
})