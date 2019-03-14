// pages/questions/text/text.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    questionDetail: ["问题1", "问题2", "问题3"],
    answerA: ["A", "AA","AAA"],
    answerB: ["B", "BB", "BBB"],
    answerC: ["C", "CC", "CCC"],
    answerD: ["D", "DD", "DDD"]
    // list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    // listABCD: ['A', 'B', 'C', 'D']  
  },

  // 用户选择选项后自动跳转下一题，当题目答完跳转到index
  answerClick: function () {
    var that = this;
    let index = that.data.index;
    let answerA = that.data.answerA;
    if (answerA[index + 1]) {
      index = index + 1;
      that.setData({ index });
    }else{
        wx.showModal({
          content: '问卷完成！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            };
            wx.navigateTo({
              url: '../../index/index',
            })
          }
        });
    }
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