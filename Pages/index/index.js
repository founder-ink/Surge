const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    // 主页
    containerShow: false,
    // 日历
    calendarShow: false,
    // 动画
    calendarAnimation: null,
    // 今日
    date: new Date().getDate(),
    loginShow: false,
    tabShow: false,
    hasUserInfo: false,
    searchBarHidden: true,
    menuHidden: false,
    // 轮播图
    swiper: [
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/01.jpg",
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/02.jpg",
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/03.jpg",
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/04.jpg",
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/05.jpg",
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/06.jpg",
      "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/banner/07.jpg"
    ],
    // 菜单切换
    tab: [
      {
        image: "../../image/icon/Printer.png",
        title: "为你推荐"
      },
      {
        image: "../../image/icon/Camera.png",
        title: "知己好友"
      },
      {
        image: "../../image/icon/Box.png",
        title: "追风少年"
      },
      {
        image: "../../image/icon/Heart.png",
        title: "温馨小窝"
      }
    ],
    featured: {
      categoryTitle: '一期一会',
      gallery: [
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/01.jpg",
          position: "丽江·玉龙雪山",
          mark: "春风十里 不如你",
          sign: "200"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/02.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/03.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/04.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/05.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/06.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/07.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/08.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/09.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/10.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/11.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        },
        {
          image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
          position: "大连",
          mark: "爱情",
          sign: "爱你"
        }
      ],
    },
    fragment: {
      categoryTitle: '生活贴精选',
      fragmentFlow: [
        {
          title: "测试",
          info: "方正",
          dataList: [{
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            title: "爱情",
            avatar: "../../../../../image/icon/User.png",
            author: "方正"
          }, {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            title: "爱情",
            avatar: "../../../../image/icon/User.png",
            author: "方正"
          }, {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            title: "爱情",
            avatar: "../../../../image/icon/User.png",
            author: "方正"
          }]
        },
        {
          title: "测试",
          info: "方正",
          dataList: [{
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            title: "爱情",
            avatar: "../../../../image/icon/User.png",
            author: "方正"
          }, {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            title: "爱情",
            avatar: "../../../../image/icon/User.png",
            author: "方正"
          }, {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            title: "爱情",
            avatar: "../../../../image/icon/User.png",
            author: "方正"
          }]
        },
      ]
    },
    // 留言
    message: [],
  },
  openSetting: function () {
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  checkSession: function () {
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        // 重新登录
        this.login()
      }
    })
  },
  // 获取用户微信信息
  onGotUserInfo: function (e) {
    // this.login()
    this.setData({
      loginShow: false,
      tabShow: true,
      userInfo: e.detail.userInfo
    })
  },
  login: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            // 是否带上登录态信息。
            // 当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；
            // 当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
            withCredentitals: true,
            success: res => {
              this.setData({
                userInfo: res.userInfo
              })
              // 将用户信息存入缓存
              wx.setStorageSync('userInfo', res.userInfo)
              // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: res => {

            }
          })
        }
      }
    })
  },

  // 跳转日历页面
  redirectToCalendar: function (e) {
    // 创建一个动画实例
    let animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 先在 y 轴偏移，然后用 step() 完成一个动画
    animation.translateY(800).step()
    // 用 setData 改变当前动画
    this.setData({
      // 通过export()方法导出数据
      calendarAnimation: animation.export(),
      // 改变 view 里面的 wx：if
      containerShow: false,
      calendarShow: true
    })
    // 设置 setTimeout 来改变 y 轴偏移量，实现有感觉的滑动
    setTimeout(() => {
      animation.translateY(0).step()
      this.setData({
        calendarAnimation: animation.export()
      })
    }, 100)
  },
  // 关闭日历页面
  closeCalendar: function () {
    // 创建一个动画实例
    let animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 先在 y 轴偏移，然后用 step() 完成一个动画
    animation.translateY(800).step()
    // 用 setData 改变当前动画
    this.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变 view 里面的 wx：if
    })
    // 设置 setTimeout 来改变 y 轴偏移量，实现有感觉的滑动
    setTimeout(() => {
      // animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        calendarShow: false,
        containerShow: true
      })
    }, 100)
  },
  // 跳转到相册
  navigateToGallery: function (e) {
    let galleryId = e.currentTarget.dataset.id
    let galleryTitle = e.currentTarget.dataset.title
    debugger
    wx.navigateTo({
      url: `../../Pages/gallery/gallery?galleryId=${galleryId}&galleryTitle=${galleryTitle}`
    })
  },
  // 切换 Tab 标签
  switchTab: function (e) {
    let tabIndex = e.currentTarget.dataset.index
    this.setData({
      tabIndex: tabIndex
    })
  },
  // 切换页面
  switchSwiper: function (e) {
    let tabIndex = e.detail.current;
    this.setData({
      tabIndex: tabIndex
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 微信自身 api
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          scrollHeight: res.windowHeight + 150
        })
      }
    })

    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        loginShow: false,
        tabShow: true,
        userInfo: userInfo
      })
    } else {
      this.setData({
        loginShow: true,
        tabShow: false
      })
    }
  },

  // 轮播图
  onSwiperTap: function (e) {

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
  scroll: function (e) {
    if (e.detail.deltaY < 0 && e.detail.scrollTop > 90) {
      if (this.data.searchBarHidden) {
        this.setData({
          searchBarHidden: false
        })
      }
    } else if (e.detail.deltaY > 0 && e.detail.scrollTop <= 90){
      if (!this.data.searchBarHidden) {
        this.setData({
          searchBarHidden: true
        })
      }
    }
  }
})
