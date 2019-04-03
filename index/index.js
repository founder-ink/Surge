Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: new Date().getDate(),
    swiper: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    liquid: [
      {
        type: "时光轴",
        title: "恋爱纪念&&结婚纪念",
        emoji: "emoji",
        time: "4月10日",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg",
        FYI: "蛮横天真可爱 都是你不可解的魔术成份"
      },
      {
        type: "时光轴",
        title: "恋爱纪念&&结婚纪念",
        emoji: "emoji",
        time: "4月10日",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg",
        FYI: "蛮横天真可爱 都是你不可解的魔术成份"
      },
      {
        type: "时光轴",
        title: "恋爱纪念&&结婚纪念",
        emoji: "emoji",
        time: "4月10日",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg",
        FYI: "蛮横天真可爱 都是你不可解的魔术成份"
      },
      {
        type: "时光轴",
        title: "恋爱纪念&&结婚纪念",
        emoji: "emoji",
        time: "4月10日",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg",
        FYI: "蛮横天真可爱 都是你不可解的魔术成份"
      },
      {
        type: "时光轴",
        title: "恋爱纪念&&结婚纪念",
        emoji: "emoji",
        time: "4月10日",
        author: "方正",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg",
        FYI: "蛮横天真可爱 都是你不可解的魔术成份"
      }
    ],
    gift: [
      {
        userMessage: "祝福你们",
        userName: "方正",
        userImg: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg7.jpg",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg"
      },
      {
        userMessage: "祝福你们",
        userName: "方正",
        userImg: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg7.jpg",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg"
      },
      {
        userMessage: "祝福你们",
        userName: "方正",
        userImg: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg4.jpg",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg"
      },
      {
        userMessage: "祝福你们",
        userName: "方正",
        userImg: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg4.jpg",
        wallpaper: "http://pp8qnwtjv.bkt.clouddn.com/surge-bg3.jpg"
      }
    ]
  },
  redirectToCalendar: function () {
    wx.redirectTo({
      url: '../Pages/calendar/calendar',
    })
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
