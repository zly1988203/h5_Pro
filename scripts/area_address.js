/**
 * Created by Administrator on 2017/7/1.
 */
// 百度地图API功能
var map = new BMap.Map("allmap");
//var point = new BMap.Point(113.48,22.69);
//map.centerAndZoom(point,15);

map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);  // 初始化地图,设置中心点坐标和地图级别
//map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);

var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
});
map.addControl(navigationControl);

var localAdrs;
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r){
//        console.log(r.point)
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);//标出所在地
        map.panTo(r.point);//地图中心移动
        //alert('您的位置：'+r.point.lng+','+r.point.lat);
        var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs){
            localAdrs = rs.addressComponents;
//                alert(rs.address);//弹出所在地址
        });

    }else {
        alert('failed'+this.getStatus());
    }
},{enableHighAccuracy: true})

function G(id) {
    return document.getElementById(id);
}

var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    {"input" : "suggestId"
        ,"location" : map
    });

ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    var str = "";
    var _value = e.fromitem.value;
    var value = "";
    if (e.fromitem.index > -1) {
        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    }
    str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

    value = "";
    if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    }
    str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    G("searchResultPanel").innerHTML = str;
});

var myValue;
ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
    var _value = e.item.value;
    myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

    setPlace();
});

function setPlace(){
    map.clearOverlays();    //清除地图上所有覆盖物
    function myFun(){
        var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        map.centerAndZoom(pp, 18);
        map.addOverlay(new BMap.Marker(pp));    //添加标注
    }
    var local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: myFun
    });
    local.search(myValue);
}