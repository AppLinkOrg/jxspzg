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
    var api=new InstApi;
    api.typeinfo({id:options.id},(typeinfo)=>{

      typeinfo.shanpin.map((item)=>{
          
        item.num=0;
         
      })

    this.Base.setMyData({typeinfo,num:0,price:0});

    })
  }
  onMyShow() {
    var that = this;
  }
  jia(e){
    var index=e.currentTarget.dataset.id;
    var typeinfo=this.Base.getMyData().typeinfo;
     typeinfo.shanpin[index].num++;
     this.Base.setMyData({
      typeinfo
     })
     this.jisuan();
  }
  jian(e){
    var index=e.currentTarget.dataset.id;
    var typeinfo=this.Base.getMyData().typeinfo;
    if(typeinfo.shanpin[index].num>0)
    {
      typeinfo.shanpin[index].num--;
    }
     this.Base.setMyData({
      typeinfo
     })
     this.jisuan();
  }
  jisuan(){
   var typeinfo=this.Base.getMyData().typeinfo;
   var num=0;
   var price=0;
        typeinfo.shanpin.map((item)=>{
           
          if(item.num>0)
          {
            num=num+item.num;
            price=price+item.num*item.price;
          }

        })
     this.Base.setMyData({
 
        num,price

     })
  }
  jiesuan(){
 
  wx.navigateTo({
    url: '/pages/jiesuan/jiesuan',
  })

  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad; 
body.onMyShow = content.onMyShow;
body.jia=content.jia;
body.jian=content.jian;
body.jisuan=content.jisuan;
body.jiesuan=content.jiesuan;
Page(body)