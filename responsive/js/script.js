$(document).ready(function(){
	slide();
    header_icon();
    lightbox();
    nav();
    nav_bug();
});

//접기/펼치기
function nav(){
	$(".btn").click(function(e){
		e.preventDefault();
		$(".nav").slideToggle();
		$(".btn").toggleClass("open");

		if($(".btn").hasClass("open")){
			//open이 있을때
			$(".btn").find("i").attr("class","fa fa-angle-up");
		}else{
			//open이 없을때
			$(".btn").find("i").attr("class","fa fa-angle-down");
		};
	});


}
function nav_bug(){
	//.btn 버튼을 누른 상태에서 전체 넓이가 줄어들면 메뉴가 다 나오는 경우에 600px 밑에서는 안나오게 하는 방식
	$(window).resize(function(){
		var wWidth = $(window).width();
		if(wWidth > 600){
			$(".nav").removeAttr("style");
		}
	});
}


//라이트 박스
function lightbox(){
	$(".lightbox").lightGallery({
		// 지금 이게 완성된 스크립트다. 오해하지 말아라.
		autoplay: true,
		pause: 3000,
		progressBar: true
	});

}

//이미지 슬라이더
function slide(){
	$(".slider").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		responsive: [{breakpoint: 768,settings: {autoplay: false,// arrows: true,// dots: false
		}}]
	});
}

// 헤더 아이콘 + SNS 공유하기
//http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
//http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
//https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
//https://plus.google.com/share?url={페이지링크}&t={페이지 제목}
function header_icon(){
	$(".facebook").click(function(e){
	e.preventDefault();
	window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 
	'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');});
	
	$(".twitter").click(function(e){
	e.preventDefault();
	window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 
	'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');});    
}



