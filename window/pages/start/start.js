// pages/start/start.js
Page({

  
  data: {
     val: null
  },
  voteTitle: function(e){
    this.val = e.detail.value;
  },
  bindchange: function(){
    if(this.val == "zjj098"){
      wx.reLaunch({
        url: '../index/index',
        success:function(res){

        },
        fail: function(res){
          console.log(res)
        },

      })

    } else {
      wx.showToast({
        title: "出错啦",
        

      })
    }
  }

 
})