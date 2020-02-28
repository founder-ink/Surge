// Pages/gallery/gallery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabKey: "all",
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
    tabList: [
      {
        label: "全部",
        tabKey: "all",
        images: [
          {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/09.jpg",
            mark: "爱情",
            sign: "爱你"
          },
          {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/10.jpg",
            mark: "爱情",
            sign: "爱你"
          },
          {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/11.jpg",
            mark: "爱情",
            sign: "爱你"
          },
          {
            image: "https://spoiler-1257360572.cos.ap-beijing.myqcloud.com/images/gallery/12.jpg",
            mark: "爱情",
            sign: "爱你"
          }
        ]
      },
      {
        label: "婚纱照",
        tabKey: "all1"
      },
      {
        label: "结婚照",
        tabKey: "all2"
      },
      {
        label: "大连",
        tabKey: "all3"
      },
      {
        label: "北京",
        tabKey: "all4"
      },
      {
        label: "丽江",
        tabKey: "all5"
      },
      {
        label: "呼和浩特",
        tabKey: "all6"
      },
      {
        label: "巴彦淖尔",
        tabKey: "all7"
      },
    ]

  },
  tabSwitch:function (e) {
    debugger
    let tabKey = e.currentTarget.dataset.key
    this.setData(
      {
        tabKey: tabKey
      }
      )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let galleryId = options.galleryId
    let galleryTitle = options.galleryTitle
    this.setData({
      galleryTitle: galleryTitle,
      galleryId: galleryId
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