//////////////////
//Site Preloader//
///////////////////

$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})


$(document).ready(function(){
	////////////////////////////////////////
	////////////////////////////////////////
	//Subscribe Form Deploy//
	////////////////////////////////////////
	////////////////////////////////////////
	
	$('.subscribe').click(function(){
		$('#modal-hider').fadeIn();
		$('#modal-body').fadeIn();	
		document.ontouchmove = function(event){ event.preventDefault();}
		$('body,html').animate({scrollTop:0},500);
		return false;		
	});
	
	////////////////////////////////////////
	////////////////////////////////////////
	/*Page Coach Arrows Showere*/
	////////////////////////////////////////
	////////////////////////////////////////	
	
	$('.enable-coach').click(function(){
		$(this).addClass('active-nav');
		$('.page-coach').fadeIn(200);
		document.ontouchmove = function(event){ event.preventDefault();}
	});
	
	$('.page-coach').click(function(){
		$('.enable-coach').removeClass('active-nav');
		$('.page-coach').fadeOut(200);
		document.ontouchmove = function(event){ event.allowDefault();}
	});

	////////////////////////////////////////
	////////////////////////////////////////
	/*Big White notifications */
	////////////////////////////////////////
	////////////////////////////////////////
	
	$('.white-notification a em').click(function(){
		$(this).parent().parent().parent().hide(200);
		return false;
	});
	
	$('.white-notification').click(function(){
		return false;
	});
	
	////////////////////////////////////////
	////////////////////////////////////////
	/*Go back to top button*/
	////////////////////////////////////////
	////////////////////////////////////////	
	
	$('.go-up').click(function() {
		$('body,html').animate({scrollTop:0},500);
		return false;
	});


	/////////////////////////////////////////////////////////////////////////////
	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	/////////////////////////////////////////////////////////////////////////////
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")


	/////////////////////////////////////////////////////////////////////////////////////////////
	//Detect user agent for known mobile devices and show hide elements for each specific element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').show();	 }  

	
	////////////////////////////////////////
	////////////////////////////////////////
	// Creating a cookie for the modal form! 
	////////////////////////////////////////
	////////////////////////////////////////
	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	function eraseCookie(name) {	createCookie(name,"",-1);	}
	
	var webappStatus = readCookie('webappIsClosed');

	////////////////////////////////////////
	////////////////////////////////////////
	/*Show and Close WebApp*/	
	////////////////////////////////////////
	////////////////////////////////////////
		
	$('.delete-cookie').click(function(){
		eraseCookie('webappIsClosed');
		return false;
	});
	
	if(window.navigator.standalone==true){	$('.webapp').hide();	}
	
		
	$('.close-webapp').click(function(){
		createCookie('webappIsClosed', 'true' , 7);
		$('.webapp').animate({
			bottom: '-100',
		}, 500, function() {
			$('.webapp').hide();
		});
	});	
	
	if(isiPhone > -1){
		$('.webapp').delay(1000).animate({
			bottom: '0',
		}, 500, function(){});		
	};

	if(webappStatus == 'true'){
		$('.webapp').hide();	
	};


	///////
	//Tab//
	///////
	$('#tab').tabify();

});

(function (a) {
    a.fn.extend({
        tabify: function (e) {
            function c(b) {
                hash = a(b).find("a").attr("href");
                return hash = hash.substring(0, hash.length - 4)
            }
            function f(b) {
                a(b).addClass("active");
                a(c(b)).show();
                a(b).siblings("li").each(function () {
                    a(this).removeClass("active");
                    a(c(this)).hide()
                })
            }
            return this.each(function () {
                function b() {
                    location.hash && a(d).find("a[href=" + location.hash + "]").length > 0 && f(a(d).find("a[href=" + location.hash + "]").parent())
                }
                var d = this,
                    g = {
                        ul: a(d)
                    };
                a(this).find("li a").each(function () {
                    a(this).attr("href", a(this).attr("href") + "-tab")
                });
                location.hash && b();
                setInterval(b, 100);
                a(this).find("li").each(function () {
                    a(this).hasClass("active") ? a(c(this)).show() : a(c(this)).hide()
                });
                e && e(g)
            })
        }
    })
})(jQuery);

