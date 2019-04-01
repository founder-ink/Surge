Component({
  data: {
    selected: 0,
    list: [{
      pagePath: "/index/index",
      iconfont: "icon-icon_Inbox",
      active: "active",
      normal: "normal"
    }, 
    {
      pagePath: "/index/index2",
      iconfont: "icon-discoverfill",
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