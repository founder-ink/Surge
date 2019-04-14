const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 今日
    date: new Date().getDate(),
    // 轮播图
    swiper: [],
    // banner
    liquid: [],
    // 留言
    message: [],
    // 情话
    poem: [],
    tab: [
      {
        image: "../image/icon/Box.png",
        title: "见字如面"
      },
      {
        image: "../image/icon/Camera.png",
        title: "相片"
      },
      {
        image: "../image/icon/Printer.png",
        title: "发布"
      },
      {
        image: "../image/icon/Cloud.png",
        title: "纪念日"
      }
    ]
    
  },
  // 跳转日历页面
  redirectToCalendar: function () {
    wx.redirectTo({
      url: '../Pages/calendar/calendar',
    })
  },
  // 跳转到相册
  navigateToGallery: function () {
    wx.navigateTo({
      url: '../Pages/gallery/gallery',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.serverUrl + '/slide/querySlide',
      method: "POST",
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          swiper: res.data.data
        })
      }
    })
    wx.request({
      url: app.serverUrl + '/banner/queryBanner',
      method: "POST",
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          liquid : res.data.data
        })
      }
    })
    wx.request({
      url: app.serverUrl + '/message/queryMessage',
      method: "POST",
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          message: res.data.data
        })
      }
    })
    wx.request({
      url: app.serverUrl + '/poem/queryPoem',
      method: "POST",
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        _this.setData({
          poem: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
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

  }
})
