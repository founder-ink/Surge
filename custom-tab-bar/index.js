Component({
  data: {
    selected: 0,
    list: [{
      pagePath: "/index/index",
      img: "../image/icon/icon_Inbox.png",
      active: "active",
      normal: "normal"
    }, 
    {
      pagePath: "/index/index2",
      img: "../image/icon/icon_namecard_fill.png",
      active: "active space-left",
      normal: "normal space-left"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})