$(document).ready(function () {

});
/*或&(function...)*/
/*a比较跳转时滑过去*/
$(document).ready(function() {
  $(".goto").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 300,
      easing: "swing"
    });
    return false;
  });
});
/*第二导航栏置顶*/
$(
// 监听事件
 window.addEventListener('scroll', function(){
 	let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
 	if(t>=800){
		$('#navbox').addClass('box-active')
	}else{
		$('#navbox').removeClass('box-active')
	}
 }));

