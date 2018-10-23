Page({
 onLoad:function(options){

   wx.hideTabBar({
     animation: true,
     success:function(res){
       console.log(res)
     }
   })
  //  wx.showTabBar({
  //    animation:true,
  //    success:function(res){
  //      console.log(res)
  //    }
  //  })
  //  wx.setTabBarStyle({
  //    color: "#9999cc",
  //    selectedColor:"#b766ad",
  //    backgroundColor:"#ffBFFF",
  //    borderStyle:'black',
  //    success:function(res){
  //      console.log(res);
  //    },
  //    fail:function(res){
  //      console.log(res)
  //    }


  //  })

  //  wx.setTabBarItem({
  //    index: 1,
  //    text:'栀子',
  //    success:function(res){
  //      console.log(res);
  //    },
  //    fail:function(res){
  //      console.log(res)
  //    }
  //  })
  
  

  wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#cbe053',
    animation:{
      duration: 2000,
      timingFunc:'easeIn'
    },
    success:function(res){

    }
  })

 }
})