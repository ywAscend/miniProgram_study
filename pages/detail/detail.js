// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {},
    recommendVideoInfo: [],
    commentListData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('详情页id', options)
    let videoId = options.id
    this.getCurrentVideo(videoId)
    this.getRecommendVideo(videoId)
    this.getCommentList(videoId)
  },

  //获取视频详情的id
  getCurrentVideo(videoId) {
    let _this = this
    wx.request({
      url: `https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=${videoId}`,
      success(res) {
        if (res.data.code === "0") {
          _this.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })

    let videoInfoData = {
      "author": "飞鱼不在天",
      "commentCount": "4985",
      "date": "2-26",
      "id": '',
      "playCount": "101.8万",
      "videoSrc": "https://cn-jsnt-dx-v-10.bilivideo.com/upgcxcode/98/34/156813498/156813498-1-16.mp4?expires=1583210100&platform=html5&ssig=GdThbx-lPT0FK4Dq-ZKByQ&oi=1699834782&trid=e132472277e94599bbb38dca8479a7cfh&nfc=1&nfb=maPYqpoel5MI3qOUX6YpRA==&mid=0",
      "videoTitle": "这十个软件,让你的电脑舒适度提升1400%"
    }
    this.setData({
      videoInfo: videoInfoData
    })
  },
  //获取推荐视频
  getRecommendVideo(videoId) {
    let _this = this
    wx.request({
      url: `https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=${videoId}`,
      success(res) {
        if (res.data.code === "0") {
          _this.setData({
            recommendVideoInfo: res.data.data.othersList
          })
        }
      }
    })

    let otherVideoInfoData = [
      {
        "imgSrc": "https://i.loli.net/2020/03/03/svBRIkxey1NW49z.jpg",
        "duraton": "2:57",
        "title": "【短的发布会】全场虎狼之词！iQOO 3现场相声竟成真香865？？？",
        "playMsg": "32.8万",
        "commentCount": "3738"
      }, {
        "imgSrc": "https://i.loli.net/2020/03/03/PZO7v2aFHYJfIhT.jpg",
        "duraton": "3:49",
        "title": "【憋疯啦！？】3个神级APP让你一直宅！！",
        "playMsg": "33.4万",
        "commentCount": "1419"
      }, {
        "imgSrc": "https://i.loli.net/2020/03/03/cnpjqEs9PMKzaRB.jpg",
        "duraton": "24:13",
        "title": "吐血推荐：私人珍藏的22款良心Windows软件装机必备",
        "playMsg": "103.2万",
        "commentCount": "4273"
      }, {
        "imgSrc": "https://i.loli.net/2020/03/03/4F5Ga2oAm9YEnsh.jpg",
        "duraton": "7:44",
        "title": "【win10美化教程】小白#也可以有一个属于自己的桌面！！！",
        "playMsg": "6.6万",
        "commentCount": "122"
      }
    ]
    this.setData({
      recommendVideoInfo: otherVideoInfoData
    })
  },
  //获取评论
  getCommentList(videoId) {
    let _this = this
    wx.request({
      url: `https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili//commentList?id=${videoId}`,
      success(res) {
        if (res.data.code === "0") {
          _this.setData({
            commentList: res.data.data.commentList
          })
        }
      }
    })

    let commentListData =  {
      "commentTotalCount":"4546",
      "commentList":[
      {
        "userIconSrc": "https://i.loli.net/2020/03/03/e9Yg4lDKbmrL6PV.png",
        "userName": "博学於文",
        "comment": "你这也太快了吧，从余承东发布会手上抢的吧[喜极而泣]",
        "commentDate": "2-26"
      },{
        "userIconSrc":"https://i.loli.net/2020/03/03/9ukRN5otJ4BriFG.jpg",
        "userName":"啊Y呀呀呀",
        "comment":"其实小泽就坐在发布会后面，余承东在上面讲话，他已经在下面发视频了[doge]",
        "commentDate":"2-26"
      },
      {
        "userIconSrc": "https://i.loli.net/2020/03/03/OiDETMdhB3uJrGU.jpg",
        "userName": "AGEN2333",
        "comment": "换配置高的电脑，效率提高20000%",
        "commentDate": "2-26"
      },  {
        "userIconSrc": "https://i.loli.net/2020/03/03/Y1Nt9speL5FOWBn.jpg",
        "userName": "毁天灭地影魔摇大",
        "comment": "俺实名推荐：1杀毒软件：360安全卫士＋360杀毒＋金山毒霸＋电脑管家；2.浏览器：360浏览器＋2345浏览器＋搜狗浏览器；3视频软件：爱奇艺＋爱奇艺万能播放器＋腾讯视频；4驱动：鲁大师；5.输入法：极品输入法＋百度输入法；6.音频软件：酷我音乐 ！以上套餐要搭配使用，效果更佳！自从用了这些，我从开机15秒一下子提高到只要三分钟，别提有多开心了！[doge]",
        "commentDate": "昨天"
      }, {
        "userIconSrc": "https://i.loli.net/2020/03/03/xV8n1yXMm4CWDEd.jpg",
        "userName": "KVista",
        "comment": "压缩软件推荐Bandizip，免费软件。对于压缩包内一级目录文件数不同的压缩包自动选择是否解压到新建的以压缩文件名命名的目录下（说的很罗嗦，试一下就知道有多好用了）。界面也比winrar好看很多",
        "commentDate": "2-26"
      }, {
        "userIconSrc": "https://i.loli.net/2020/03/03/OVs6Q7KoTgHnBIu.jpg",
        "userName": "小鶱鶱",
        "comment": "以前都说女人为偶像撕起逼来很恐怖（所谓的饭圈文化），现在看来数码圈的男的撕逼起来一点不比饭圈女孩弱，果然恶心的人在哪个圈子都会让圈内圈外的人恶心[微笑]",
        "commentDate": "2-24"
      }, {
        "userIconSrc": "https://i.loli.net/2020/03/03/9OK82hS6urBMzTe.jpg",
        "userName": "哦那你很棒喽",
        "comment": "恕我直言某音就是个垃圾[嫌弃]",
        "commentDate": "2-23"
      },
    ]}
    this.setData({
      commentListData: commentListData
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