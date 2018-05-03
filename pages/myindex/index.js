//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    body: []
  },
  onLoad: function () {
    this.getdata();

  },
  getdata: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:9999/api/activity/app/getMyActivity?token=bc61123cce3846a196999aaafa73a4e1&userId=1275201&sign=41cc5ab712651d777b7f507b79cca0fb&t=iOS&v=2.1.1',
      data: {
        "num": 10,
        "from": 0
      },
      header: {
        'content-type': 'application/json' 
      },
      method: "POST",
      success: function (res) {
        console.log(res.data.body);
       that.setData({
         body: res.data.body
          })

      },
      fail: function (err) { },
      complete: function () { }
    })
  }
})


