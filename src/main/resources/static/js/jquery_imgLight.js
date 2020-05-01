//function imgLight(id) {
//	this.oDiv = $(id);
//	this.oImg = $$(odiv,"img");
//	this,oLi = $$(oDiv,"li");
//	this.oView = function (obj) {
//		var iMain = Obj;
//		var iSpeed = 1;
//		var timer = null;
//		iMain.onmouseout = function () {
//			Oclose(this);
//		}
//		timer = setInterval(function () {
//			imain.style.filter = 'alpha(opacity =' iSpeed+')';
//			iMain.style.opacity = iSpeed/100;
//			iSpeed += 1;
//			if(iSpeed >= 60){
//				clearInterval(timer);
//			}
//		},1);
//	}
//	this.oClose = function (obj) {
//		var oMain = obj;
//		var oSpeed = 60;
//		var otimer = null;
//		otimer = setInterval(function () {
//			oMain.style.filtre= 'alpha(opacity =' oSpeed+')';
//			oMain.style.opacity = oSpeed/100;
//			oSpeed -= 1;
//			if(oSpeed <= 0){
//				clearInterval(otimer);
//				oMain.style.display = "none;"
//			}
//		},1);
//	}
//	
//	for(var i = 0; i < oLi.length;i++){
//		var oThis = oLi[i];
//		oThis.onmouseover = function () {
//			var oWidth = $$(this,"img")[0].offsetWidth;
//			war oHeight = $$(this,"img")[0].offsetHeight;
//			this.firstChild.style.width = oWidth + "px";
//			this.firstChild.style.height = oHeight + "px";
//			this.firstChild.style.display = "block";
//			oView(this.firstChild);
//		}
//		oThis.onClick = function () {
//			window.location = $$(this.firstChild,"a")[0].href;
//		}
//	}
//}
//
//function $(id) {
//	return typeof id == "string"?document.getElementById(id):id;
//}
//
//function $$(oParent,elem) {
//	return(oParent || document).getElementsByTagName(elem);
//}
//
//window.onload = function () {
//	var newImg = imgLight("show");
//}

function $(id){return typeof id === "string" ? document.getElementById(id) : id;}

function $$(oParent, elem){return (oParent || document).getElementsByTagName(elem);}

function imgLight(id)

{

    this.oDiv=$(id); 

 this.oImg=$$(oDiv,"img");  

 this.oLi=$$(oDiv,"li"); 

 this.oView=function(Obj)

 {

     var iMain=Obj;

  var iSpeed=1;

        var timer=null;

  iMain.onmouseout=function(){oClose(this);}

        timer=setInterval(function(){

      iMain.style.filter='alpha(opacity='+iSpeed+')';

            iMain.style.opacity=iSpeed/100;

      iSpeed+=1;

      if(iSpeed>=60){clearInterval(timer);}

   },1); 

 }

 this.oClose=function(Obj)

 {

     var oMain=Obj;

  var oSpeed=60;

  var otimer=null;

        otimer=setInterval(function(){

      oMain.style.filter='alpha(opacity='+oSpeed+')';

            oMain.style.opacity=oSpeed/100;

      oSpeed-=1;

      if(oSpeed<=0){clearInterval(otimer);oMain.style.display="none";};

   },1); 

 }

 for(var i=0;i<oLi.length;i++)

 {

     var oThis=oLi[i];

     oThis.onmouseover=function()

  {

      var oWidth=$$(this,"img")[0].offsetWidth;

      var oHeight=$$(this,"img")[0].offsetHeight;

      this.firstChild.style.width=oWidth+"px";

   this.firstChild.style.height=oHeight+"px";

      this.firstChild.style.display="block";

   oView(this.firstChild);

  }

  oThis.onclick=function()

  {

      window.location=$$(this.firstChild,"a")[0].href;

  }

 }

}



window.onload=function()

{

    var newImg=imgLight("index-box");

}
