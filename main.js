"use strict";$(function(){for(var t=void 0!==GLOBAL_CONFIG.Snackbar,a=($("#page-header").width(),$("#search_button").outerWidth()),o=0,e=0;e<$("#page-header .menus_item").length;e++)o+=$("#page-header .menus_item").eq(e).outerWidth();function s(){$("#page-header .toggle-menu").addClass("is_visible"),$("#page-header .menus,.search span").addClass("is_invisible")}function i(e){var i;"1"==e?i=$("#blog_name").width()+a+o>$("#page-header").width()-300:"2"==e?i=$("#blog_name").width()+a+o>$("#page-header").width():"3"==e&&(i=$("#blog_name").width()+a+o>$("#page-header").width()),i?s():($("#page-header .toggle-menu").removeClass("is_visible"),$("#page-header .menus,.search span").removeClass("is_invisible"))}function n(){$("#page-header").removeClass("open-sidebar"),$("body").animate({paddingLeft:0},200),$("#sidebar").animate({},function(){$("#sidebar").css("transform","translateX(0px)")}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"})})}function d(){$("#page-header").addClass("open-sidebar"),$("body").animate({paddingLeft:300},200),$("#sidebar").animate({},function(){$("#sidebar").css("transform","translateX(300px)")}),$("#toggle-sidebar").animate({},function(){$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"})})}if((37<$("#page-header").height()||window.innerWidth<7)&&s(),$(window).bind("resize",function(){768<window.innerWidth?i(3):s()}),$("#page-header").css({opacity:"1",animation:"headerNoOpacity .7s"}),$("#sidebar").hasClass("auto_open")?0<$(".sidebar-toc__content").children().length?($("#toggle-sidebar").addClass("on"),$(".layout_post").animate({},function(){setTimeout(function(){$("#toggle-sidebar").addClass("on"),d()},300),i(1)})):$("#toggle-sidebar").css("display","none"):$("#toggle-sidebar").css("opacity","1"),$("#toggle-sidebar").on("click",function(){if(!isMobile()&&$("#sidebar").is(":visible")){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),e?(n(),setTimeout(function(){i(2)},300)):(i(1),d())}}),$(".scroll-down").on("click",function(){scrollTo("#content-outer")}),$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;if(t){var e=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(e)}else alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}}),$("figure.highlight").wrap('<div class="code-area-wrap"></div>'),"true"==GLOBAL_CONFIG.highlight_copy){var r=$('<i class="fa fa-clipboard" aria-hidden="true"></i>'),c=$('<div class="copy-notice"></div>');$(".code-area-wrap").prepend(r),$(".code-area-wrap").prepend(c),$(".code-area-wrap .fa-clipboard").on("click",function(){var e=window.getSelection(),i=document.createRange();i.selectNodeContents($(this).siblings("figure").find(".code pre")[0]),e.removeAllRanges(),e.addRange(i);e.toString();!function(e,i){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),t?snackbarShow(GLOBAL_CONFIG.copy.success):$(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1,right:30},450,function(){setTimeout(function(){$(i).prev(".copy-notice").animate({opacity:0,right:0},650)},400)})}catch(e){if(!t)return $(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1,right:30},650,function(){setTimeout(function(){$(i).prev(".copy-notice").animate({opacity:0,right:0},650)},400)});snackbarShow(GLOBAL_CONFIG.copy.success)}else t?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(0,this),e.removeAllRanges()})}if("true"==GLOBAL_CONFIG.highlight_lang){var l,h,u=$('<div class="code_lang"></div>');$("figure").before(u),$("figure").each(function(){"js"==(l=h=$(this).attr("class").split(" ")[1])&&(h="javascript"),"md"==l&&(h="markdown"),"plain"==l&&(h="code"),"py"==l&&(h="python"),$(this).siblings(".code_lang").text(h)})}if("true"==GLOBAL_CONFIG.highlight_shrink)var g=$('<i class="fa fa-angle-down code-expand code-closed" aria-hidden="true"></i>');else g=$('<i class="fa fa-angle-down code-expand" aria-hidden="true"></i>');if($(".code-area-wrap").prepend(g),$(".code-area-wrap .code-expand").on("click",function(){$(this).hasClass("code-closed")?($(this).siblings("figure").find("figcaption").show(),$(this).siblings("figure").find("table").show(),$(this).removeClass("code-closed")):($(this).siblings("figure").find("figcaption").hide(),$(this).siblings("figure").find("table").hide(),$(this).addClass("code-closed"))}),"false"==GLOBAL_CONFIG.medium_zoom){0===(v=$("#post-content img").not(".no-fancybox")).length&&(v=$(".justified-gallery img").not(".no-fancybox"));for(e=0;e<v.length;e++){var f=v[e].src?v[e].src:v.eq(e).attr("data-src"),m=$('<a href="'+f+'" data-fancybox="group" data-caption="'+v[e].alt+'" class="fancybox"></a>'),p=$(v[e]).wrap(m),b=v[e].alt;b&&p.after('<div class="img-alt">'+b+"</div>")}$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]})}else{var v;if((v=$(".justified-gallery img")).length)for(e=0;e<v.length;e++)m=$("<div></div>"),p=$(v[e]).wrap(m);var C=mediumZoom(document.querySelectorAll("#post img,.justified-gallery img"));C.on("open",function(){var e="dark"==$(document.documentElement).attr("data-theme")?"#2d3032":"#fff";C.update({background:e})})}function w(){$(".toggle-menu").hasClass("open")&&($(".toggle-menu").removeClass("open").addClass("close"),$("body").removeClass("open-mobile-menus"),$("#menu_mask").fadeOut())}function y(){$("#mobile-toc-button").hasClass("open")&&($("#mobile-toc-button").removeClass("open").addClass("close"),$("body").removeClass("open-mobile-toc"),$("#menu_mask").fadeOut())}$(".toggle-menu").on("click",function(){$(".toggle-menu").hasClass("close")&&($(".toggle-menu").removeClass("close").addClass("open"),$("body").addClass("open-mobile-menus"),$("#menu_mask").fadeIn(),$("#toggle-sidebar").hasClass("on")&&n())}),$("#mobile-toc-button").on("click",function(){$("#mobile-toc-button").hasClass("close")&&($("#mobile-toc-button").removeClass("close").addClass("open"),$("body").addClass("open-mobile-toc"),$("#menu_mask").fadeIn())}),$("#menu_mask").on("click touchstart",function(e){w(),y(),$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){d()},300)}),$(window).on("resize",function(e){$(".toggle-menu").is(":visible")||w(),$("#mobile-toc-button").is(":visible")||y()}),$("#mobile-sidebar-toc a").on("click",function(){y()});var k=0;function _(){$(".recent-post-info").each(function(){var e=$(".recent-post-item").height(),i=$(this).height();$(this).css({"padding-top":(e-i)/2,"padding-bottom":(e-i)/2})})}$(".toc-child").hide(),$(window).scroll(throttle(function(e){var i=$(this).scrollTop();isMobile()||(function(e){var i=$("#content-outer").height(),t=$(window).height(),a=t<i?i-t:$(document).height()-t,o=e/a,s=Math.round(100*o),n=100<s?100:s;$(".progress-num").text(n),$(".sidebar-toc__progress-bar").animate({width:n+"%"},100)}(i),function(i){if(0===$(".toc-link").length)return;var e=$("#post-content").find("h1,h2,h3,h4,h5,h6"),t="";e.each(function(){var e=$(this);i>e.offset().top-25&&(t="#"+$(this).attr("id"))}),""===t&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a=$(".toc-link.active");if(t&&a.attr("href")!==t){!function(e){window.history.replaceState&&e!==window.location.hash&&window.history.replaceState(void 0,void 0,e)}(t),$(".toc-link").removeClass("active");var o=$('.toc-link[href="'+t+'"]');o.addClass("active");var s=o.parents(".toc-child"),n=0<s.length?s.last():o;!function(e){if(e.is(":visible"))return;e.fadeIn(400)}(n.closest(".toc-item").find(".toc-child")),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}}(i),function(e){if($(".toc-link").hasClass("active")){var i=$(".active").offset().top,t=$("#sidebar").scrollTop();i>e+$(window).height()-50?$("#sidebar").scrollTop(t+100):i<e+50&&$("#sidebar").scrollTop(t-100)}}(i));var t=function(e){var i=k<e;return k=e,i}(i);56<i?(t?$("#page-header").hasClass("visible")&&$("#page-header").removeClass("visible"):$("#page-header").hasClass("visible")||$("#page-header").addClass("visible"),$("#page-header").addClass("fixed"),"0"===$("#rightside").css("opacity")&&$("#rightside").animate({},function(){$(this).css({opacity:"1",transform:"translateX(-38px)"})})):(0===i&&$("#page-header").removeClass("fixed").removeClass("visible"),$("#rightside").animate({},function(){$("#rightside").css({opacity:"",transform:""})}))},300)),$("#go-up").on("click",function(){scrollTo("body")}),$(".toc-link").on("click",function(e){e.preventDefault(),function(e){scrollTo(e)}($(this).attr("href"))}),$("#readmode").click(function(){"dark"==Cookies.get("theme")&&("dark"==$(document.documentElement).attr("data-theme")?$(document.documentElement).attr("data-theme",""):$(document.documentElement).attr("data-theme","dark")),$("body").toggleClass("read-mode"),$("#to_comment").toggleClass("is_invisible")}),$("#font_plus").click(function(){var e=parseFloat($("body").css("font-size")),i=parseFloat($("pre").css("font-size")),t=parseFloat($("code").css("font-size"));$("body").css("font-size",e+1),$("pre").css("font-size",i+1),$("code").css("font-size",t+1)}),$("#font_minus").click(function(){var e=parseFloat($("body").css("font-size")),i=parseFloat($("pre").css("font-size")),t=parseFloat($("code").css("font-size"));$("body").css("font-size",e-1),$("pre").css("font-size",i-1),$("code").css("font-size",t-1)}),768<$(window).width()&&$(".menus_item_child").each(function(){var e=$(this).siblings("a").outerWidth(!0),i=$(this).outerWidth(!0);$(this).css("margin-left",-(i/2-e/2))}),$(".menus-expand").on("click",function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))}),$("#rightside_config").on("click",function(){$("#rightside-config-hide").hasClass("rightside-in")?($("#rightside-config-hide").css("animation","rightside_out_animate .3s"),$("#rightside-config-hide").removeClass("rightside-in"),$("#rightside-config-hide").animate({},function(){setTimeout(function(){$("#rightside-config-hide").css({animation:"",display:""})},300)})):($("#rightside-config-hide").addClass("rightside-in"),$("#rightside-config-hide").animate({},function(){$("#rightside-config-hide").css("display","block")}))}),768<$(window).width()&&_(),$(window).bind("resize",function(){768<$(window).width()&&_()});GLOBAL_CONFIG.copy_copyright_js;var L=GLOBAL_CONFIG.copyright;function G(){$("#darkmode").removeClass("fa-moon-o").addClass("fa-sun-o")}function O(){$("#darkmode").removeClass("fa-sun-o").addClass("fa-moon-o")}L&&(document.body.oncopy=function(e){e.preventDefault();var i,t=window.getSelection(0).toString();return i=45<t.length?t+"\n\n\n"+L.languages.author+"\n"+L.languages.link+"\n"+L.languages.source+"\n"+L.languages.info:t,e.clipboardData?e.clipboardData.setData("text",i):window.clipboardData.setData("text",i)}),$(".justified-gallery").length&&($(".justified-gallery img").each(function(e,i){var t=$(i).attr("data-src");$(i).attr("src",t)}),$(".justified-gallery > p > .fancybox,.justified-gallery > p > div").unwrap(),$("head").append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/css/justifiedGallery.min.css">'),loadScript("https://cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/js/jquery.justifiedGallery.min.js",function(){"function"==typeof $.fn.justifiedGallery&&$(".justified-gallery").justifiedGallery({rowHeight:220,margins:4})})),"1"!=autoChangeMode&&"2"!=autoChangeMode||("dark"==Cookies.get("theme")?G():O()),$("#darkmode").click(function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(G(),activateDarkMode(),Cookies.set("theme","dark",{expires:2}),t&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(O(),activateLightMode(),Cookies.set("theme","light",{expires:2}),t&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day))})});