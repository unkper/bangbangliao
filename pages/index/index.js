Page({
  data: {
    infoList: [
      {
        'image': '/image/home.jpg',
        'time': '4小时前',
        'state': '已领取',
        'name': 'char',
        'tag': '外卖',
        'description': '有没有人啊，幺二四啦！求带七食堂照烧鸡排饭！地址：女子小区(接头地点私聊把)'
      },
      {
        'image': '/image/home.jpg',
        'time': '0507 16：00',
        'state': '--',
        'name': '套马杆的汉字',
        'tag': '聊天',
        'description': '空虚寂寞冷，求小姐姐撩骚'
      },
      {
        'image': '/image/home.jpg',
        'time': '05-07',
        'state': '未领取',
        'name': 'matcha',
        'tag': '快递',
        'description': '小南门唯品会的快递那位小哥哥小姐姐或者大国可以帮忙去一下，13：00前哦，谢谢，地址：女子小区(接头地点私聊把)'
      }
    ],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  //跳转下单界面
  make_order: function (options) {
    wx.navigateTo({
      url: '../order/make_order/make_order',
    })
  },
  //跳转外卖订单界面
  delivery: function (options) {
    wx.navigateTo({
      url: '../order/delivery/delivery',
    })
  },
  //跳转快递订单界面
  express: function (options) {
    wx.navigateTo({
      url: '../order/express/express',
    })
  },
  //跳转添加好友界面
  addFriend: function (options) {
    wx.navigateTo({
      url: '../order/addFriend/addFriend',
    })
  },
})