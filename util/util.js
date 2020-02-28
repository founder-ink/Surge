function redirectToUser() {
  wx.redirectTo({
    url: '/pages/user/user',
  })
}

function redirectToCalendar() {
  wx.redirectTo({
    url: '/pages/calendar/calendar',
  })
}

function wxQuery(property) {
  //创建节点选择器
  let info = []
  let query = wx.createSelectorQuery();
  //选择id
  query.select(property).boundingClientRect()
  query.exec((res) => {
    //res就是所有标签元素的信息数组
    info = res
  })
  return info
}

module.exports = {
  redirectToUser: redirectToUser,
  redirectToCalendar: redirectToCalendar,
  wxQuery: wxQuery
}
