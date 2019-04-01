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
module.exports = {
  redirectToUser: redirectToUser,
  redirectToCalendar: redirectToCalendar
}
