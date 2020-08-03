// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    var api=new InstApi;
    api.commoditytype({},(commoditytype)=>{
 
       this.Base.setMyData({commoditytype})

    })
  }
  detail(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.detail=content.detail;
Page(body)