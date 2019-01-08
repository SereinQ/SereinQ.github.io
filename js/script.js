"use strict";function stepStandard(){$("[data-step='"+sectionStep+"']").toggleClass("hide")}function stopMusic(){music.pause(),$("[data-volume]").addClass("svg-i-mute").addClass("svg-i-mute-dims").removeClass("svg-i-volume").removeClass("svg-i-volume-dims")}function playMusic(){music.play(),$("[data-volume]").removeClass("svg-i-mute").removeClass("svg-i-mute-dims").addClass("svg-i-volume").addClass("svg-i-volume-dims")}function stepLoading(){var t=1*topx;$(".section-form").css("transition-duration",t+"ms"),$(".section-loading").css("transition-duration",.8*t+"ms");var s=parseInt(topx/60),e=parseInt(s/10),a=s-10*e,o=parseInt(topx-60*s),i=parseInt(o/10),n=o-10*i;$("[data-invitation='0']").addClass("hide"),$("[data-invitation='1']").removeClass("hide");var d=-22;$("[data-decimalsMin]").css("top",d*e),$("[data-singleMin]").css("top",d*a),$("[data-decimalsSec]").css("top",d*i),$("[data-singleSec]").css("top",d*n),setTimeout(function(){$("[data-step='"+sectionStep+"']").toggleClass("hide"),$("html, body").animate({scrollTop:$($("#body")).offset().top},t),$(".counter-load span:not(.data-divider)").css("top","0px").css("transition-duration",t+"ms"),setTimeout(function(){stopMusic()},t)},1e3)}function scrollBottom(){$("html,body").animate({scrollTop:document.body.scrollHeight},"0")}var sectionStep,topx=$(document).scrollTop(),music=document.getElementById("LoadingMusic");$(document).ready(function(){sectionStep=1,scrollBottom(),1==sessionStorage.getItem("submit")?$("[data-step='4']").removeClass("hide"):$("[data-step='1']").removeClass("hide"),$("[data-expand]").click(function(){var t=$(this).attr("data-expand");$("[data-expandToggle='"+t+"']").toggleClass("toggleNotActive")}),$("[data-gostep]").click(function(){2!=sectionStep&&($("[data-step='"+sectionStep+"']").toggleClass("hide"),playMusic()),sectionStep=$(this).attr("data-gostep"),3==sectionStep?$(".body").removeClass("stop-scroll"):$(".body").addClass("stop-scroll"),3==sectionStep?stepLoading():stepStandard(),1==sectionStep?$("[data-step='"+sectionStep+"']").removeClass("hide"):""});var t;$("[data-volume]").click(function(){t=$(this).attr("data-volume"),1==t?($(this).attr("data-volume",0),stopMusic()):($(this).attr("data-volume",1),playMusic())}),$("[data-submit='1']").click(function(){var t=1;$(".input-easy[aria-required='required']").each(function(s){$(this).val()?$(this).parent().find(".error-block").addClass("d-none"):$(this).parent().find(".error-block").html("This field cannot be empty.").removeClass("d-none"),1==t&&(t=$(this).val()?1:0)}),1==t&&$(".input-easy[aria-required='required'][type='email']").each(function(s){function e(t){var s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(a)}var a=$(this).val();e(a)||(t=0,$(this).parent().find(".error-block").html("This is not email.").removeClass("d-none"))}),1==t&&(sessionStorage.setItem("submit","1"),$("#mainform").submit())}),$("[data-submit='0']").click(function(){sessionStorage.removeItem("submit"),$("[data-step='4']").addClass("hide")}),window.addEventListener("load",function(){$(window).width()>992&&$(function(){$('[data-tooltips="tooltip"]').tooltip()})});var s=null;window.addEventListener("scroll",function(t){s||setTimeout(function(){topx=$(document).scrollTop(),s=null},20),s=t}),$(window).resize(function(){scrollBottom()})});
"use strict";