//页面跳转的全路径
var pathUrl = "http://10.20.100.70:8020/qianduan/app-besiness-frame/";
//设备类型
var js_iosType = getPhoneType();
function getPhoneType()
{
    var result = false;
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        result = false;
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        result = true;
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        result = false;
    } else if (u.indexOf('iPhone Simulator') > -1) {
        result = true;
    }
    return result;
};

/**
 * 检测版本更新方法
 */
function js_checkForUpdate(){
    if(js_iosType) {
        checkForUpdate();
    }else{
    	
        window.cloudmall.checkForUpdate();
        
    }
};

/**
 * 获取用户信息
 * @returns {*}
 */
function js_getUserInfo(){

    if(js_iosType) {
        return getUserInfo();
    }else{
        return window.nearby.getUserInfo();
    }
};

/**
 * 原生标题显示 html页面之间的跳转  页面间切换不带原生动画
 * @param titleText  标题文字
 * @param imgId      0 搜索按钮图片 1 加号按钮图片
 * @param btnText    按钮文字
 * @param imgUrl     图片链接
 * @param btnUrl     按钮链接
 */
function js_updateViewTitleBar(titleText,imgId,btnText,imgUrl,btnUrl){
    if(js_iosType) {
        //alert(js_iosType);
        updateViewTitleBar(titleText,imgId,btnText,imgUrl,btnUrl);
    }else{
        window.cloudmall.updateViewTitleBar(titleText,imgId,btnText,imgUrl,btnUrl);
    }
}

/**
 * 原生标题显示 原生跳转页面 页面间切换自带原生动画
   * @param titleText 标题
   * @param searchUrl 搜索放大镜的URL，传""表示隐藏放大镜
   * @param addUrl  加号的URL，传""表示隐藏加号
   * @param btnText 右边按钮文字内容
   * @param btnUrl  右边按钮的URL
   * @param isHasYellowBg 按钮是否需要黄色背景，主要用于“添加地址”，默认为false
*/
function js_updateViewTitleBarNewActivity(titleText,searchUrl, addUrl,btnText,btnUrl,isHasYellowBg){
    if(js_iosType) {
        updateViewTitleBarNewActivity(titleText,searchUrl, addUrl,btnText,btnUrl,isHasYellowBg);
    }else{
    	
        window.cloudmall.updateViewTitleBarNewActivity(titleText,searchUrl, addUrl,btnText,btnUrl,isHasYellowBg);
   
    }
}

 /**
   * updateViewSearchBarNewActivity:【更新原生标题栏为搜索标题栏】. <br/>
   * @param hintText 搜索框中的提示文本内容
   * @param searchUrl 搜索的URL，可传入JS方法
   */

function js_updateViewSearchBarNewActivity(hintText ,searchUrl){
    if(js_iosType) {
        updateViewSearchBarNewActivity(hintText ,searchUrl);
    }else{
    
        window.cloudmall.updateViewSearchBarNewActivity(hintText ,searchUrl);
    
    }
}

 /**
   * getSearchText:【获取input的值】. <br/>
  
   */
function js_getSearchText(){
    if(js_iosType) {
        return getSearchText();
    }else{
    
        return window.cloudmall.getSearchText();
        //alert(window.cloudmall.getSearchText())
    }
}


/**
 * 原生提示语句方法
 * @param text  提示语句
 */
function js_showToast(text){
    if(js_iosType) {
    	showToast(text);
    }else{
        window.cloudmall.showToast(text);
    }
};


/**
 * 页面间跳转, 直接返回到列表的写法，一级返回
 * @param title
 * @param url
 */
function js_startSingleTaskActivity(title,url)
{
	if(js_iosType) {
        startSingleTaskActivity(title,url);
    }else{
        window.cloudmall.startSingleTaskActivity(title,url);
    }
	
}

/**
 * 页面间跳转, 直接返回到列表的写法，二级返回
 * @param url1  路径1
 * @param url2  路径2
 */
function js_startDoubleTaskActivity(url1,url2)
{
	if(js_iosType) {
        startDoubleTaskActivity(url1,url2);
    }else{
        window.cloudmall.startDoubleTaskActivity(url1,url2)(title,url);
    }
	
}

/**
 * 页面间跳转
 * @param title
 * @param url
 */
function js_startActivity(title,url){
    //alert(title+"==="+url);
    if(js_iosType) {
        startActivity(title,url);
    }else{
        window.cloudmall.startActivity(title,url);
    }
}

/**
 * 图片上传
 * @param size 当前是第几张
 * @param totalSize 总共允许显示多少张
 */
function upLoadPhotoImg(size,totalSize){
    if(js_iosType) {
        upLoadPhotoImg(size,totalSize);
    }else{
    	
        window.cloudmall.upLoadPhotoImg(size,totalSize);
     
    }
}

/**
 * 图片预览
 * @param jsonArray 图片URL的JSON数组，转为String类型
 * @param currentItem 从0开始算的。点击的是当前第几个
 */
function js_showPhotoImg(jsonArray,currentItem,isDelete){
	if(js_iosType) {
        showPhotoImg(jsonArray,currentItem,isDelete);
    }else{
        window.cloudmall.showPhotoImg(jsonArray,currentItem,isDelete);
    }
}

/**
 *添加图标 扫描和跳转

 */
function js_scanCode(){
	if(js_iosType) {
        scanCode();
    }else{
        window.cloudmall.scanCode();
    }
}

/**
 * 退出登录
 */
function js_loginOut(){
    if(js_iosType) {
        loginOut();
    }else{
        window.cloudmall.loginOut();
    }
}

// ----------------------------  -------------------------

//ios 异步初始化位置(url地址，token值，userType，手机唯一码，小区码，组册手机，登录类型)
function ios_onloadInit(_bcbHost,_token,_userType,_phoneDeviceId,_smallCommunityCode,_registerMobile,_loginType)
{
    js_bcpHost = _bcbHost;
    js_token = _token;
    js_userType = _userType;
    js_phoneDeviceId = _phoneDeviceId;
    js_smallCommunityCode = _smallCommunityCode;
    js_registerMobile = _registerMobile;
    js_loginType = _loginType;
    
    js_custom_init();
}

//android 初始化路径
function android_init()
{
    js_userType = window.cloudmall.getUserType();
    js_companyUserId = window.cloudmall.getCompanyUserId();
    js_userAccount = window.cloudmall.getUserAccount();
    js_userId = window.cloudmall.getUserId();
    js_userName = window.cloudmall.getUserName();
    js_token = window.cloudmall.getToken();

    js_custom_init();
}

var js_userType;     //用户类型
var js_companyUserId;//物业后台对应用户的UID
var js_userAccount;  //用户账号
var js_userId;       //用户ID
var js_userName;     //用户名
var js_token;        //验证用的令牌

$(document).ready(function(){
if(js_iosType){
    return ;
}
//android 在此处调用异步初始化
js_onloadfinish();
});

//-----------------------  -------------------------------
//初始化完后，(ios 和 android)异步调用位置
function js_onloadfinish(){

}

//自定义变量声明
var bcportalUrl;

//(ios 和 android) 自定义初始化位置
function js_custom_init()
{
    //bcportalUrl = js_bcpHost;
}

//此处直接调用android初始化参数
if(!js_iosType){
    android_init();
}

//----------------------- -------------------------------
