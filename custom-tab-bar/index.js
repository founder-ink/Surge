Component({
  data: {
    selected: 0,
    list: [{
      pagePath: "/Pages/index/index",
      img: "../image/icon/icon_Inbox.png",
      active: "active",
      normal: "normal"
    }, 
    {
      pagePath: "/Pages/index2/index2",
      img: "../image/icon/icon_namecard_fill.png",
      active: "active space-left",
      normal: "normal space-left"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      let data = e.currentTarget.dataset
      let url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})