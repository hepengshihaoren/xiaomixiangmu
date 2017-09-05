

$(function () {
    snows();
    documentBg();
    animation();
    music();
    word();
    videoBf();
    topLm();
    lunboLm();
    itemsLm();
    navLm();
    topSl();
    hotcommentLm();
    recommendLm();
    hardwareLm();
    productLm();
    productLm2();
    productLm3();
    contentLm();
    videoLm();
    // animationG();
    

    // first  word动画
   
    function animation(){
           $(".main .one").animate({
            //   "height" :20,\
            "width":350,
            "left":0,
            "opacity":1,
           },500,function(){                          //依次回调
               $(".main .two").animate({
                    "height":600,
                    "opacity":1

               },500,function(){
                   $(".main .three").animate({
                       
                       "width":250,
                       "left":0,
                       "opacity":1
                   },500,function(){
                       $(".main .four").animate({
                           "height":620,
                           "opacity":1

                       },500,function(){
                           $('.main .five').animate({
                               "width":280,
                               "opacity":1
                           },500,function(){
                               $('.main .six .line').animate({
                                   "height":450,
                                   "opacity":1,
                                 
                               },500,function(){
                                   $(".main .seven .line").animate({
                                       "height":1050,
                                       "opacity":1
                                   },500,function(){
                                      $("#top_nav .main").fadeOut(5000,function(){
                                            $("#top_nav .circleProgress_wrapper").fadeIn(3000,function(){
                                                animationG();
                                            })
                                      })
                                   })
                               })
                           })

                       })
                   })
               }) 
           })
       }
       // second  word  动画
    function  animationG(){
            $(".wrapper .rights .circleProgress").addClass("rightcircle");
            $(".wrapper .lefts  .circleProgress").addClass("leftcircle");
           setTimeout(function() {
               $(".circleProgress_wrapper .first").animate({
                "width":260,
                "opacity":1
            },400,function(){
                 $(".circleProgress_wrapper .second").animate({
                    "height":300,
                    "opacity":1,
                    "bottom":25
                    
                 },400,function(){
                         $(".circleProgress_wrapper .third").animate({
                             
                           "opacity":1,
                             "width":420,
                            "left":600
                          },400,function(){
                              $(".circleProgress_wrapper .fourth").animate({
                                  "height":500,
                                  "opacity":1
                              },400,function(){
                                      $(".circleProgress_wrapper .fifth").animate({
                                          "width":420,
                                          "left":600,
                                          "opacity":1
                                      },400,function(){
                                          $(".circleProgress_wrapper .sixth").animate({
                                              "width":420,
                                              "left":600,
                                              "opacity":1

                                          },400,function(){
                                              $(".circleProgress_wrapper").fadeOut(6000);
                                          })
                                      }
                                  )
                              })
                          })
                 })
            })
                
            }, 5300);

        }

        // 页面背景渐变
    function documentBg(){
      $(document).ready(function() {
		$("body").gradientify({
			gradients: [
				{ start: [49,76,172], stop: [242,159,191] },
				{ start: [255,103,69], stop: [240,154,241] },
				{ start: [33,229,241], stop: [235,236,117] }
			]
		});
	});
     
  }
      // 雪花飘落
    function snows() {
    //    窗口大小
    var oPageX=window.screen.width;
    var oPageY=window.screen.height;
    var aSnow=[];
    //    雪花模板
    function snow(x,y,xspeed,yspeed,xsin,size){
      this.node=document.createElement('div');
      this.x=x;
      this.y=y;
      this.xspeed=xspeed;
      this.yspeed=yspeed;
      this.xsin=xsin;
      this.size=size;
      this.createSnow=function(){
        this.node.style.position='absolute';
        this.node.style.top=this.y+'px';
        this.node.style.left=this.x+'px';
        this.node.innerHTML='*';
        document.body.appendChild(this.node);
      };
      this.createSnow();
      this.snowMove=function(){
        this.node.style.top=parseInt(this.node.style.top)+this.yspeed+'px';//垂直方向运动
        this.node.style.left=parseInt(this.node.style.left)+this.xsin*Math.sin(this.xspeed)+'px';
        this.node.style.fontSize=this.size+'px';
//            this.node.style.color='rgb('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
      };
    }
    //    创建雪花
    function createSnow(){
      aSnow.push(new snow(Math.random()*oPageX,-50,0.02+Math.random()/10,1+Math.random(),Math.random()*30,20+Math.random()*30));
    }
    setInterval(createSnow,300);//一秒钟创建一个雪花
    //    雪花移动函数
    function snowMove(){
      for(var j=0;j<aSnow.length;j++){
        aSnow[j].snowMove();
        if(parseInt(aSnow[j].node.style.top)>oPageY+1800 || parseInt(aSnow[j].node.style.left)>oPageX-100){
          aSnow[j].node.parentNode.removeChild(aSnow[j].node);
          aSnow.splice(j,1);
        }
      }
    }
    setInterval(snowMove,10);
   

  };  


  
  //页面背景渐变效果   
 //  function documentBg(){
 //      $(document).ready(function() {
	// 	$("body").gradientify({
	// 		gradients: [
	// 			{ start: [49,76,172], stop: [242,159,191] },
	// 			{ start: [255,103,69], stop: [240,154,241] },
	// 			{ start: [33,229,241], stop: [235,236,117] }
	// 		]
	// 	});
	// });
 //  }
// 字体滚动
  var flag = false;
  function word(){
                    
            //寻找字体对象
            var text = document.getElementById("word");
            //注册轮播函数
            var textIntervalId = setInterval(function () {
            if (text.offsetLeft == -466) {
                text.style.left = "1100px";
            }
            animate(text, -466);
            }, 800);

            //定义动画函数
            //注意不能与其它动画函数重名，否则会覆盖掉

            function animate(obj, target, fn) {
            if (obj.intervalId) clearInterval(obj.intervalId);
            
            obj.intervalId = setInterval(getPosition, 15);
            
            //定义动画函数
            function getPosition() {
                var leader = obj.offsetLeft;
                var step = target - leader;
                step = step > 0 ? 3 : -3;
                if (Math.abs(target - leader) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
                } else {
                obj.style.left = target + "px";
                clearInterval(obj.intervalId);
                //如果存在这个函数，则执行这个回调函数
                if (fn) fn();
                }
            }
            }
            //给text注册鼠标悬停事件
            text.onmouseover = function () {
            clearInterval(text.intervalId);
            clearInterval(textIntervalId);
            }
            //给text注册鼠标离开事件
            text.onmouseout = function () {
            textIntervalId = setInterval(function () {
                if (text.offsetLeft == -466) {
                text.style.left = "1100px";
                }
                animate(text, -466);
            }, 800);
            }
    }


// 音乐播放
     function music() {
            var music0=document.getElementById("music0");
            var music1=document.getElementById("music1");
            var music2=document.getElementById("music2");
            var music3=document.getElementById("music3");
            var music4=document.getElementById("music4");
            var pss_contr=document.getElementsByClassName("pss_contr")[0];
            var pss_contr1=document.getElementById("pss_contr1");
            var pss_contr2=document.getElementById("pss_contr2");
            var pss_contr3=document.getElementById("pss_contr3");
            var pss_contr4=document.getElementById("pss_contr4");
            var pause=document.getElementById("pause");
            
        //注册点击事件
            pause.onclick=function(){
                music2.pause();
                music1.pause();
                music0.pause();
                music3.pause();
                music4.pause();
            }
            pss_contr1.onclick=function () {
                music2.play();
                music1.pause();
                music0.pause();
                music3.pause();
                music4.pause();

            };
            pss_contr2.onclick=function () {
                music1.play();
                music2.pause();
                music0.pause();
                music3.pause();
                music4.pause();
            };
            pss_contr3.onclick=function () {
                music1.pause();
                music3.play();
                music0.pause();
                music4.pause();
                music2.pause();
            };
            pss_contr4.onclick=function () {
                music2.pause();
                music4.play();
                music0.pause();
                music3.pause();
                music1.pause();
            };
        };
    
        // top栏  自定义播放器   点击播放
        $('#pause').on('click',function(){
             $('#willesPlay').css('display','block')
        })
        $('.closeV').on('click',function(){
        $('#willesPlay').css('display','none')
        })

        var playVideo = $('video');
        var playPause = $('.playPause'); //播放和暂停
        var currentTime = $('.timebar .currentTime'); //当前时间
        var duration = $('.timebar .duration'); //总时间
        var progress = $('.timebar .progress-bar'); //进度条
        var volumebar = $('.volumeBar .volumewrap').find('.progress-bar');
        playVideo[0].volume = 0.4; //初始化音量
        playPause.on('click', function() {
            playControl();

        });
        $('.playContent').on('click', function() {
            playControl();
        }).hover(function() {
            $('.turnoff').stop().animate({
                'right': 0
            }, 500);
        }, function() {
            $('.turnoff').stop().animate({
                'right': -40
            }, 500);
        });
        $(document).click(function() {
            $('.volumeBar').hide();
        });
        playVideo.on('loadedmetadata', function() {
            duration.text(formatSeconds(playVideo[0].duration));
        });

        playVideo.on('timeupdate', function() {
            currentTime.text(formatSeconds(playVideo[0].currentTime));
            progress.css('width', 100 * playVideo[0].currentTime / playVideo[0].duration + '%');
        });
        playVideo.on('ended', function() {
            $('.playTip').removeClass('glyphicon-pause').addClass('glyphicon-play').fadeIn();
            playPause.toggleClass('playIcon');
        });
        
        $(window).keyup(function(event){
            event = event || window.event;
                if(event.keyCode == 32)playControl();
                if(event.keyCode == 27){
                $('.fullScreen').removeClass('cancleScreen');
                $('#willesPlay .playControll').css({
                    'bottom': -48
                }).removeClass('fullControll');
                };
            event.preventDefault();
        });
	
        
        //全屏控制 点击全屏  
        $('.fullScreen').on('click', function() {
            if ($(this).hasClass('cancleScreen')) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozExitFullScreen) {
                    document.mozExitFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                $(this).removeClass('cancleScreen');
                $('#willesPlay .playControll').css({
                    'bottom': -48
                }).removeClass('fullControll');
            } else {
                if (playVideo[0].requestFullscreen) {
                    playVideo[0].requestFullscreen();
                } else if (playVideo[0].mozRequestFullScreen) {
                    playVideo[0].mozRequestFullScreen();
                } else if (playVideo[0].webkitRequestFullscreen) {
                    playVideo[0].webkitRequestFullscreen();
                } else if (playVideo[0].msRequestFullscreen) {
                    playVideo[0].msRequestFullscreen();
                }
                $(this).addClass('cancleScreen');
                $('#willesPlay .playControll').css({
                    'left': 0,
                    'bottom': 0
                }).addClass('fullControll');
            }
            return false;
           
        });
        //音量
        $('.volume').on('click', function(e) {
            e = e || window.event;
            $('.volumeBar').toggle();
            e.stopPropagation();
        });
        $('.volumeBar').on('click mousewheel DOMMouseScroll', function(e) {
            e = e || window.event;
            volumeControl(e);
            e.stopPropagation();
            return false;
        });
        $('.timebar .progress').mousedown(function(e) {
            e = e || window.event;
            updatebar(e.pageX);
        });
	
        var updatebar = function(x) {
            var maxduration = playVideo[0].duration; //Video 
            var positions = x - progress.offset().left; //Click pos
            var percentage = 100 * positions / $('.timebar .progress').width();
            //Check within range
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }

          
            progress.css('width', percentage + '%');
            playVideo[0].currentTime = maxduration * percentage / 100;
        };
        //音量控制   
        function volumeControl(e) {
            e = e || window.event;
            var eventype = e.type;
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
            var positions = 0;
            var percentage = 0;
            if (eventype == "click") {
                positions = volumebar.offset().top - e.pageY;
                percentage = 100 * (positions + volumebar.height()) / $('.volumeBar .volumewrap').height();
            } else if (eventype == "mousewheel" || eventype == "DOMMouseScroll") {
                percentage = 100 * (volumebar.height() + delta) / $('.volumeBar .volumewrap').height();
            }
            if (percentage < 0) {
                percentage = 0;
                $('.otherControl .volume').attr('class', 'volume glyphicon glyphicon-volume-off');
            }
            if (percentage > 50) {
                $('.otherControl .volume').attr('class', 'volume glyphicon glyphicon-volume-up');
            }
            if (percentage > 0 && percentage <= 50) {
                $('.otherControl .volume').attr('class', 'volume glyphicon glyphicon-volume-down');
            }
            if (percentage >= 100) {
                percentage = 100;
            }
            $('.volumewrap .progress-bar').css('height', percentage + '%');
            playVideo[0].volume = percentage / 100;
            e.stopPropagation();
            e.preventDefault();
        }
        // 控制暂停和播放
        function playControl() {
                playPause.toggleClass('playIcon');
                if (playVideo[0].paused) {
                    playVideo[0].play();
                    $('.playTip').removeClass('glyphicon-play').addClass('glyphicon-pause').fadeOut();
                } else {
                    playVideo[0].pause();
                    $('.playTip').removeClass('glyphicon-pause').addClass('glyphicon-play').fadeIn();
                }
            }
		//控制关灯  并且 控制hover时控制栏目上下运动
        $('.btnLight').click(function(e) {
            e = e || window.event;
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $('body').append('<div class="overlay"></div>');
                $('.overlay').css({
                    'position': 'absolute',
                    'width': 100 + '%',
                    'height': $(document).height(),
                    'background': '#000',
                    'opacity': 1,
                    'top': 0,
                    'left': 0,
                    'z-index': 999
                });
                $('.playContent').css({
                    'z-index': 1000
                });
                $('.playControll').css({
                    'bottom': -48,
                    'z-index': 1000
                });

                $('.playContent').hover(function() {
                    $('.playControll').stop().animate({
                        'height': 48,
                    },500);
                }, function() {
                    setTimeout(function() {
                        $('.playControll').stop().animate({
                            'height': 0,
                        }, 500);
                    }, 2000)
                });
            } else {
                $(this).addClass('on');
                $('.overlay').remove();
                $('.playControll').css({
                    'bottom': 0,
                });
            }
            e.stopPropagation();
            e.preventDefault();
        });
        //秒转时间
        function formatSeconds(value) {
            value = parseInt(value);
            var time;
            if (value > -1) {
                hour = Math.floor(value / 3600);
                min = Math.floor(value / 60) % 60;
                sec = value % 60;
                day = parseInt(hour / 24);
                if (day > 0) {
                    hour = hour - 24 * day;
                    time = day + "day " + hour + ":";
                } else time = hour + ":";
                if (min < 10) {
                    time += "0";
                }
                time += min + ":";
                if (sec < 10) {
                    time += "0";
                }
                time += sec;
            }
            return time;
        }
      
	
    // items
        function itemsLm(){
                    Ajax({
                url: "/items",
                callback: function (data) {

                    $(template("tap_pull_template", data)).appendTo($("#tap_pull aside"));


                    $("#tap_pull aside ul").on("mouseover", "li", function () {
                        $("#tap_pull .lis").stop().fadeIn();

                        var type = $(this).data("type");

                        Ajax({
                            url: "/items",
                            data: {
                                type: type
                            },
                            callback: function (data) {

                                var html = "";

                                outer: for (var i = 0; i < data.list.length % 6; i++) {
                                    var subData = [];
                                    for (var j = i * 6; j < (i + 1) * 6; j++) {
                                        if (!data.list[j]) break outer;
                                        subData[subData.length] = data.list[j];
                                    }
                                    // console.log(subData);
                                    html += template("pullK_template", {
                                        list: subData
                                    });

                                }
                                $("#tap_pull .lis").html(html);
                            }
                        })

                    }).on("mouseout", "li", function () {
                        $("#tap_pull .lis").stop().fadeOut();
                    });
                    $("#tap_pull .lis").mouseover(function () {
                        $(this).stop().slideDown();
                    }).mouseout(function () {
                        $(this).stop().slideUp();
                    });
                }
            });
        }
    //product
        function productLm(){
            var outMatchData = null;
            var outMatchIndex = 0;
            Ajax({
                url: "/product",
                data: {
                    toptitle: "match"
                },
                callback: function (data) {
                    data.list = data.hotgoods;
                    outMatchData = data;
                    $("#match").html(template("common-template", outMatchData));

                    $("#match .top ul li a").first().addClass("current");
                    var mouseover = function () {

                        var index = $(this).parent().index();
                        if (outMatchIndex == index) return;
                        outMatchIndex = index;
                        var key = this.classList[0];
                        Ajax({
                            url: "/product",
                            data: {
                                toptitle: "match",
                                key: key
                            },
                            callback: function (data) {
                                outMatchData.list = data.datas;
                                $("#match").html(template("common-template", outMatchData));
                                $("#match .top ul li").eq(index).find("a").addClass("current");
                                $("#match .top ul li a").mouseover(mouseover);

                            }
                        });
                    }
                    $("#match .top ul li a").mouseover(mouseover);

                }
            });
        }
    //topr
        function topSl(){
        
            $("#my .mass .car")
                .mouseover(function () {
                    $(this).siblings(".drop-down").stop().slideDown();
                })
                .mouseout(function () {
                    $(this).siblings(".drop-down").stop().slideUp();
                })
                .siblings(".drop-down")
                .mouseover(function () {
                    $(this).stop().slideDown();
                })
                .mouseout(function () {
                    $(this).stop().slideUp();
                });
        }        
    //product
        function productLm2(){
            var outPartsIndex = 0;
            var outPartsData = null;
            Ajax({
                url: "/product",
                data: {
                    toptitle: "accessories"
                },
                callback: function (data) {
                    data.list = data.hot;

                    outPartsData = data;
                    $("#parts").html(template("common-template", outPartsData));

                    $("#parts .top ul li a").first().addClass("current");
                    var mouseover = function () {

                        var index = $(this).parent().index();
                        if (outPartsIndex == index) return;
                        outPartsIndex = index;
                        var key = this.classList[0];
                        Ajax({
                            url: "/product",
                            data: {
                                toptitle: "accessories",
                                key: key
                            },
                            callback: function (data) {
                                outPartsData.list = data.datas;
                                $("#parts").html(template("common-template", outPartsData));
                                $("#parts .top ul li").eq(index).find("a").addClass("current");
                                $("#parts .top ul li a").mouseover(mouseover);

                            }
                        });
                    }
                    $("#parts .top ul li a").mouseover(mouseover);

                }
            });
        }
    //product
        function productLm3(){
             var outAroundIndex = 0;
            var outAroundData = null;

            Ajax({
                url: "/product",
                data: {
                    toptitle: "around"
                },
                callback: function (data) {
                    data.list = data.hotcloths;
                    data.type = true;
                    outAroundData = data;
                    $(template("common-template", data)).appendTo($("#around"));


                    $("#around .top ul li a").first().addClass("current");
                    var mouseover = function () {

                        var index = $(this).parent().index();
                        if (outAroundIndex == index) return;
                        outAroundIndex = index;
                        var key = this.classList[0];
                        Ajax({
                            url: "/product",
                            data: {
                                toptitle: "around",
                                key: key
                            },
                            callback: function (data) {
                                outAroundData.list = data.datas;
                                $("#around ").html(template("common-template", outAroundData));
                                $("#around .top ul li").eq(index).find("a").addClass("current");
                                $("#around .top ul li a").mouseover(mouseover);

                            }
                        });
                    }
                    $("#around .top ul li a").mouseover(mouseover);
                }
            });
        }
    //Ajax
        function Ajax({
            url,
            callback,
            data,
            cache
        }) {
            var baseUrl = "http://localhost:9900/api";
            $.ajax({
                url: baseUrl + url,
                data: data,
                dataType: "json",
                success: function (data) {
                    if (Object.prototype.toString.call(data) == "[object Array]") {
                        callback({
                            list: data
                        });
                    } else {
                        callback(data);
                    }
                }
            })
        }
    // 雷军视频播放
    function videoBf(){
         $('#video').on('click',function (){
            var dataSrc = $(this).attr('data-src');

            if ($('body').children('video').length == 0) {
                $('<video src='+dataSrc+' autoplay="autoplay" controls="controls" class="videos"></video><span class="closeVideo">X</span>').appendTo('body');	
                $('<div class="video_mask"></div>').appendTo('body');
            }
        })

        $('body').on('click','.closeVideo',function (){
            $(this).remove();
            $('body video').remove();
            $('body .video_mask').remove();
        })

        $('#tap_pull').mouseover(function(){
            $('#tap_pull .musicBk').css("display","block")
        }).mouseout(function(){
            $('#tap_pull .musicBk').css('display','none')
        })
    }
    //top
    function topLm(){
            var list = {
            list: ["小米商城", "MIUI", "米聊", "游戏", "多看阅读", "云服务", "小米网移动版", "问题反馈", "Select Region"]
        };

        $(template("header_template", list)).insertBefore("#header .mass");
    }
    //hotcomment
    function hotcommentLm(){
            Ajax({
            url: "/hotcomment",
            callback: function (data) {
                data.title = data.list[0].title;
                $(template("hotproduct-template", data)).appendTo($("#hotproduct"));
            }
        })
    }
    //recomend
    function recommendLm(){
            Ajax({
            url: "/recommend",
            data: {
                page: 1
            },
            callback: function (data) {
                data.type = true;
                data.topTitleName = "为你推荐";
                $(template("common-template", data)).appendTo($("#recommend"));

            }
        });
    }
    
    //         window.onload=function(){
    //             music();
    //             // word();
             
                
    //         }

        
    // function music() {
    //         var music0=document.getElementById("music0");
    //         var music1=document.getElementById("music1");
    //         var music2=document.getElementById("music2");
    //         var music3=document.getElementById("music3");
    //         var music4=document.getElementById("music4");
    //         var pss_contr=document.getElementsByClassName("pss_contr")[0];
    //         var pss_contr1=document.getElementById("pss_contr1");
    //         var pss_contr2=document.getElementById("pss_contr2");
    //         var pss_contr3=document.getElementById("pss_contr3");
    //         var pss_contr4=document.getElementById("pss_contr4");
    //     //注册点击事件
        
    //         pss_contr1.onclick=function () {
    //             music2.play();
    //             music1.pause();
    //             music0.pause();
    //             music3.pause();
    //             music4.pause();

    //         };
    //         pss_contr2.onclick=function () {
    //             music1.play();
    //             music2.pause();
    //             music0.pause();
    //             music3.pause();
    //             music4.pause();
    //         };
    //         pss_contr3.onclick=function () {
    //             music1.pause();
    //             music3.play();
    //             music0.pause();
    //             music4.pause();
    //             music2.pause();
    //         };
    //         pss_contr4.onclick=function () {
    //             music2.pause();
    //             music4.play();
    //             music0.pause();
    //             music3.pause();
    //             music1.pause();
    //         };
    //     };
        //     //窗口雪花飘
//   (function () {
//     //    窗口大小
//     var oPageX=window.screen.width;
//     var oPageY=window.screen.height;
//     var aSnow=[];
//     //    雪花模板
//     function snow(x,y,xspeed,yspeed,xsin,size){//x水平位置,y垂直位置,xspeed水平步距,yspeed垂直步距,xsin振幅,size雪花大小
//       this.node=document.createElement('div');
//       this.x=x;
//       this.y=y;
//       this.xspeed=xspeed;
//       this.yspeed=yspeed;
//       this.xsin=xsin;
//       this.size=size;
//       this.createSnow=function(){
//         this.node.style.position='absolute';
//         this.node.style.top=this.y+'px';
//         this.node.style.left=this.x+'px';
//         this.node.innerHTML='*';
//         document.body.appendChild(this.node);
//       };
//       this.createSnow();
//       this.snowMove=function(){
//         this.node.style.top=parseInt(this.node.style.top)+this.yspeed+'px';//垂直方向运动
//         this.node.style.left=parseInt(this.node.style.left)+this.xsin*Math.sin(this.xspeed)+'px';
//         this.node.style.fontSize=this.size+'px';
// //            this.node.style.color='rgb('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
//       };
//     }
//     //    创建雪花
//     function createSnow(){
//       aSnow.push(new snow(Math.random()*oPageX,-50,0.02+Math.random()/10,1+Math.random(),Math.random()*30,20+Math.random()*30));
//     }
//     setInterval(createSnow,300);//一秒钟创建一个雪花
//     //    雪花移动函数
//     function snowMove(){
//       for(var j=0;j<aSnow.length;j++){
//         aSnow[j].snowMove();
//         if(parseInt(aSnow[j].node.style.top)>oPageY || parseInt(aSnow[j].node.style.left)>oPageX){
//           aSnow[j].node.parentNode.removeChild(aSnow[j].node);
//           aSnow.splice(j,1);
//         }
//       }
//     }
//     setInterval(snowMove,10);
//   })();
    //hardware
     function hardwareLm(){
            Ajax({
            url: "/hardware",
            callback: function (data) {
                $(template("hardware-template", data)).insertAfter($("#intelligent_hardware .left"));
            }
        })
     }
    //lunbo
    function lunboLm(){
        var slideObj = null;

        Ajax({
            url: "/lunbo",
            callback: function (data) {
                $(template("article_template", data)).insertAfter($("#tap_pull>.w>aside"));
                slideObj = new SlideObj(data.list.length);
            }
        });
    }
    //lunbod
    function SlideObj(length) {
        var _this = this;
        this.length = length;
        this.current = 0;
        this.timer = null;
        this.updateTimer = function () {
            _this.timer = setInterval(function () {
                _this.current++;
                if (_this.current == _this.length) {
                    _this.current = 0;
                }
                _this.slideSelect();

            }, 2000);
        }
        this.slideSelect = function (index) {
            if (index) {
                _this.current = index;
            }
            $("#tap_pull>.w>article>a").stop().removeClass("current")
                .fadeOut()
                .eq(_this.current)
                .fadeIn();

        }
        this.clearTimer = function () {
            clearInterval(_this.timer);
        }
        $("#tap_pull>.w>article>a").stop().removeClass("current")
            .fadeOut()
            .eq(_this.current)
            .fadeIn()
            .siblings(".before")
            .click(function () {
                _this.clearTimer();
                _this.current -= 1;
                if (_this.current < 0) {
                    _this.current = _this.length - 1;
                }
                _this.slideSelect();
                _this.updateTimer();

            })
            .siblings(".after")
            .click(function () {
                _this.clearTimer();
                _this.current += 1;
                if (_this.current == _this.length) {
                    _this.current = 0;
                }
                _this.slideSelect();
                _this.updateTimer();
            });
        this.updateTimer();
    }
    //nav
    function navLm(){
                Ajax({
                url: "/nav",
                callback: function (data) {
                    $(template("tap_template", data)).insertAfter($("#top_nav .logo_left"));

                    $("#top_nav ul").on("mouseover", "li", function () {
                        $("#tap_menu").stop().css("display", "block").animate({
                            "height": 230 + "px",
                            "opacity": 1
                        });

                        var type = $(this).data("type");

                        Ajax({
                            url: "/nav",
                            data: {
                                type: type
                            },
                            callback: function (data) {
                                $("#tap_menu").html($(template("tap_menu_template", data)));
                            }
                        })
                    }).on("mouseout", "li", function () {
                        $("#tap_menu").stop().animate({
                            "height": 0,
                            "opacity": 0
                        }, function () {
                            $(this).css("display", "none");
                        });

                    });
                    $("#tap_menu").mouseover(function () {
                        $("#tap_menu").stop().css("display", "block").animate({
                            "height": 230 + "px",
                            "opacity": 1
                        });
                    }).mouseout(function () {
                        $("#tap_menu").stop().animate({
                            "height": 0,
                            "opacity": 0
                        }, function () {
                            $(this).css("display", "none");
                        });
                    })
                }
            });
    }
    //content
    function contentLm(){
        Ajax({
        url: "/content",
        callback: function (data) {
            $(template("content-template", data)).appendTo($("#content"));


            $("#content li").mouseover(function () {
                $(this).find(".arrow-left").stop().fadeIn().siblings(".arrow-right").stop().fadeIn();
            }).mouseout(function () {
                $(this).find(".arrow-left").stop().fadeOut().siblings(".arrow-right").stop().fadeOut();
            });
            $("#content .arrow-left").click(function () {
                move(this, false);
            });

            $("#content .arrow-right").click(function () {
                move(this, true);
            });

            function move(parent, isNext) {
                var index = $(parent).siblings("ol").data("index");
                var $ol = $(parent).siblings("ol");
                var index = $ol.data("index");

                if (isNext) {
                    if (index == $ol.find("li").size() - 1) {
                        return;
                    }
                    index++;
                } else {
                    if (index == 0) {
                        return;
                    }
                    index--;
                }
                $ol.stop().animate({
                    "left": -index * 296 + "px"
                })
                $ol.data("index", index);
                $(parent).siblings(".indicator").find("a").removeClass("current").eq(index).addClass("current");

            }
        }
    })
    }
    //video
    function videoLm(){
            Ajax({
            url: "/video",
            callback: function (data) {
                data.title = data.list[0].title;
                $(template("video-template", data)).appendTo("#video");
            }
        })
    }

    // function word(){
                    
    //         //寻找字体对象
    //         var text = document.getElementById("word");
    //         //注册轮播函数
    //         var textIntervalId = setInterval(function () {
    //         if (text.offsetLeft == -466) {
    //             text.style.left = "1100px";
    //         }
    //         animate(text, -466);
    //         }, 800);

    //         //定义动画函数
    //         //注意不能与其它动画函数重名，否则会覆盖掉

    //         function animate(obj, target, fn) {
    //         if (obj.intervalId) clearInterval(obj.intervalId);
            
    //         obj.intervalId = setInterval(getPosition, 15);
            
    //         //定义动画函数
    //         function getPosition() {
    //             var leader = obj.offsetLeft;
    //             var step = target - leader;
    //             step = step > 0 ? 3 : -3;
    //             if (Math.abs(target - leader) > Math.abs(step)) {
    //             leader = leader + step;
    //             obj.style.left = leader + "px";
    //             } else {
    //             obj.style.left = target + "px";
    //             clearInterval(obj.intervalId);
    //             //如果存在这个函数，则执行这个回调函数
    //             if (fn) fn();
    //             }
    //         }
    //         }
    //         //给text注册鼠标悬停事件
    //         text.onmouseover = function () {
    //         clearInterval(text.intervalId);
    //         clearInterval(textIntervalId);
    //         }
    //         //给text注册鼠标离开事件
    //         text.onmouseout = function () {
    //         textIntervalId = setInterval(function () {
    //             if (text.offsetLeft == -466) {
    //             text.style.left = "1100px";
    //             }
    //             animate(text, -466);
    //         }, 800);
    //         }
    // }

});








