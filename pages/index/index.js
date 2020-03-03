Page({

  /**
   * 页面的初始数据
   */
  data: {

    //被点击的首页导航的菜单的索引
    currentIndexNav: 0,
    //首页导航数据
    navList: [],
    //轮播图数据
    swiperList: [],
    //视频列表数据
    videoList:[]
  },

  //点击首页导航按钮
  activeNav(event) {
    this.setData({
      currentIndexNav: event.target.dataset.index
    })
  },


  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let _this = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res) {
        if (res.data.code === "0") {
          _this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
    let swiperListData = [
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/sycp/creative_img/202002/a6a3a4a352ce478f15f1981bd105cc50.jpg@1100w_484h_1c_100q.jpg"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/36c987438c969600c09524df5b82ed64022963bc.jpg@1100w_484h_1c_100q.jpg"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/2e0f9f2f8319855aa4ba18b24f4cb4498e1b6165.png@1375w_605h_1c_100q.webp"
      },
      {
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/sycp/creative_img/202002/4d0ecd2576b3d314a8011b60135fc5ee.jpg@1100w_484h_1c_100q.jpg"
      }
    ]
    this.setData({
      swiperList: swiperListData
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    let _this = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res) {
        if (res.data.code === 0) {
          _this.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
    let navListData = [
      { "text": "首页", "id": "0" },
      { "text": "动画", "id": "1" },
      { "text": "番剧", "id": "2" },
      { "text": "国创", "id": "3" },
      { "text": "音乐", "id": "4" },
      { "text": "舞蹈", "id": "5" },
      { "text": "科技", "id": "6" },
      { "text": "游戏", "id": "7" },
      { "text": "娱乐", "id": "8" },
      { "text": "鬼畜", "id": "9" },
      { "text": "电影", "id": "10" },
      { "text": "电视剧", "id": "11" },
      { "text": "纪录片", "id": "12" },
      { "text": "影视", "id": "13" },
      { "text": "时尚", "id": "14" },
      { "text": "生活", "id": "15" },
      { "text": "广告", "id": "16" },
      { "text": "直播", "id": "17" },
      { "text": "相簿", "id": "18" },
    ]
    this.setData({
      navList: navListData
    })
  },
  /**
   * 获取视频列表
   */
  getVedioList(){
    let _this = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoList",
      success(res){
        if(res.data.code === '0'){
          _this.setData({
            videoList: res.data.data.videoList
          })
        }
      }
    })
    let videoListData = [
      {
        "id":"0",
        "link":"",
        "imgSrc":"https://i.loli.net/2020/03/03/Wqcnglk4azLopXv.jpg",
        "desc":"这十个软件,让你的电脑舒适度提升1400%",
        "playCount":"79.7万",
        "commentCount":"3477",
        "videoSrc":"https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/98/34/156813498/156813498-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1582865827&gen=playurl&os=cosbv&oi=1699834782&trid=e0b12f0185f84da7be6c6fee3d31a341h&platform=html5&upsig=fd89347f5d84199e9ed52d4c04788b9d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0"
      },{
        "id":"1",
        "link":"",
        "imgSrc":"https://i.loli.net/2020/03/03/prsl2DIFJv9qEjW.jpg",
        "desc":"恐 怖 游 戏（确信）",
        "playCount":"141.2万",
        "commentCount":"7.4万",
        "videoSrc":"https://cn-zjwz3-dx-v-04.bilivideo.com/upgcxcode/64/88/156038864/156038864-1-16.mp4?expires=1582818300&platform=html5&ssig=SmW7ycXHB14QKLXZFgMfSg&oi=1699834782&trid=82bf587270624977a576687bb82a2f55h&nfc=1&nfb=maPYqpoel5MI3qOUX6YpRA==&mid=0"
        },{
        "id":"2",
        "link":"",
        "imgSrc":"https://i.loli.net/2020/03/03/lHVYrQRgUEbczkf.jpg",
        "desc":"LOL版本弃子史诗加强 用膝盖就能混分的套路[有点骚东西]",
        "playCount":"118.8万",
        "commentCount":"1.6万",
        "videoSrc":"https://upos-sz-mirrorhw.bilivideo.com/upgcxcode/07/22/156222207/156222207-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1582818718&gen=playurl&os=hwbv&oi=1699834782&trid=d9e527be60e8470d9df3c28b56cd3dbfh&platform=html5&upsig=48beb10a8bc219bd6c80ff208ee70f81&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0"
        },{
        "id":"3",
        "link":"",
        "imgSrc":"https://i.loli.net/2020/03/03/svBRIkxey1NW49z.jpg",
        "desc":"【短的发布会】全场虎狼之词！iQOO 3现场相声竟成真香865？？？",
        "playCount":"54.5万",
        "commentCount":"3467",
        "videoSrc":"https://cn-zjwz3-dx-v-05.bilivideo.com/upgcxcode/63/91/156989163/156989163-1-16.mp4?expires=1582866000&platform=html5&ssig=QnLwBOQcuVKZKzqukqvBiQ&oi=1699834782&trid=ace29109fa804b048fbed479d81d1b51h&nfc=1&nfb=maPYqpoel5MI3qOUX6YpRA==&mid=0"
        },{
          "id":"4",
          "link":"",
          "imgSrc":"https://i.loli.net/2020/03/03/TWKgBHUsin5Ylcq.jpg",
          "desc":"【师 生 对 线】这网课上得就尼玛离谱！",
          "playCount":"217.5万",
          "commentCount":"1.7万",
          "videoSrc":"https://cn-jstz-dx-v-05.bilivideo.com/upgcxcode/37/05/154970537/154970537-1-16.mp4?expires=1582817700&platform=html5&ssig=Wxmk2DHTxlPUrNLS5iDjgQ&oi=1699834782&trid=1928e4297e184855b7976eea924aec61h&nfc=1&nfb=maPYqpoel5MI3qOUX6YpRA==&mid=0"
          },{
          "id":"5",
          "link":"",
          "imgSrc":"https://i.loli.net/2020/03/03/Hc7VlQFupBOreKh.jpg",
          "desc":"【小泽】华为Mate Xs体验：官方手机壳原来长这样？",
          "playCount":"72.3万",
          "commentCount":"9002",
          "videoSrc":"https://cn-zjwz3-dx-v-06.bilivideo.com/upgcxcode/12/92/156029212/156029212-1-16.mp4?expires=1582865700&platform=html5&ssig=X4ruUrHGRcDq9arMhe7ebA&oi=1699834782&trid=95f2fdd4711341a3a76246dfb860f903h&nfc=1&nfb=maPYqpoel5MI3qOUX6YpRA==&mid=0"
        }
    ]
    this.setData({
      videoList:videoListData
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({title:'加载中...'})
    //获取首页导航数据
    this.getNavList()
    //获取轮播图数据
    this.getSwiperList()
    //获取视频列表数据
    this.getVedioList()
    setTimeout(() => {
      wx.hideLoading()
    }, 800)

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