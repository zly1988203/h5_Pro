/**
 * Created by Administrator on 2017/7/1.
 */
$(function (){

    function showError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("定位失败,用户拒绝请求地理定位");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("定位失败,位置信息是不可用");
                break;
            case error.TIMEOUT:
                alert("定位失败,请求获取用户位置超时");
                break;
            case error.UNKNOWN_ERROR:
                alert("定位失败,定位系统失效");
                break;
        }
    }


    function showPosition_baidu(position){

        var latlon = position.coords.latitude+','+position.coords.longitude;

        //baidu
        var url ='http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location='+latlon+'&output=json&pois=0';

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: url,
            beforeSend: function(){
                $("#adrs_city").html('正在定位...');
                $("#adrs_area").html('正在定位...');
            },
            success: function (json) {
                if(json.status==0){
                    var data = json.result;
                    $("#adrs_city").html(data.addressComponent.city);
                    $("#adrs_area").html(data.addressComponent.street+""+data.addressComponent.street_number);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#adrs_city").html(latlon+"地址位置获取失败");
                $("#adrs_area").html(latlon+"地址位置获取失败");
            }
        });
    }


    function showPosition_google(position){
        var latlon = position.coords.latitude+','+position.coords.longitude;

        //google
        var url = 'http://maps.google.cn/maps/api/geocode/json?latlng='+latlon+'&language=CN';
        $.ajax({
            type: "GET",
            url: url,
            beforeSend: function(){
                $("#adrs_city").html('正在定位...');
                $("#adrs_area").html('正在定位...');
            },
            success: function (json) {
                //$("#google_geo").innerHTM = "定位成功";
                if(json.status=='OK'){
                    var results = json.results;
                    $.each(results,function(index,array){
                        if(index == 0){
                            $("#adrs_city").html(array.address_components[1]['long_name']);
                            $("#adrs_area").html(array.address_components[0]['long_name']);
                        }
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#adrs_city").html(latlon+"地址位置获取失败");
                $("#adrs_area").html(latlon+"地址位置获取失败");
            }
        });
    }



    function showPosition1(position){
        var lat = position.coords.latitude; //纬度
        var lag = position.coords.longitude; //经度
        alert('纬度:'+lat+',经度:'+lag);
    }


    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition_baidu,showError);
        }else{
            alert("浏览器不支持地理定位。");
        }
    }

    getLocation();

})