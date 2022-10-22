// 初次加载动画
window.onload = function() {
	setTimeout("onceAnimate()", 200);
};

function onceAnimate() {
	$(".overview a").addClass("show");
	// $(".notice").fadeIn(300);
}

// 随机出现背景数量
var num = 10,
	arr = []; //存放随机数的数组
// Math.ceil(Math.random() * 10),
// if (num < 4 ) num = 4;
console.log(num);
for (var i = 0; i < num; i++) {
	var radomNum = parseInt(Math.random() * num) + 1; //对利用random生成的随机数处理后得到1~num的整数
	if (arr.indexOf(radomNum) == -1) {
		//indexOf返回值为-1表示数组中没有和新随机数重复的值
		arr.push(radomNum);
	} else {
		//有重复值i--，不添加重复的值到数组中，并再循环一次
		i--;
	}
}
console.log(arr)
var creatS = '';
for (var i = 0; i < 2; i++) {
	creatS += '<div class="section ' + 'bg' + arr[i] + '">' + '</div>';
}
console.log(creatS)
$('#main').append(creatS);

// 背景滚动
$(function() {
	$('#main').fullpage({
		scrollingSpeed: 800,
		navigation: false,
		navigationPosition: 'right',
		continuousVertical: true
	});
	setInterval(function() {
		$.fn.fullpage.moveSectionDown();
	}, 20000);
});

// 点击切换
$(function() {
	$("#main").click(function() {
		if ($(".overview a").hasClass("show")) {
			$(".overview a").removeClass("show");
		} else {
			$(".overview a").addClass("show");
		}
	});
})
// 右侧更多
$(".notice h1").click(function() {
	var w = $(".notice").width(),
		r = parseInt($(".notice").css("right"));
	if (r != 0) {
		$(this).text("收起")
		$(".notice").animate({
			right: 0
		}, 400);
	} else {
		$(this).text("展开")
		$(".notice").animate({
			right: -w
		}, 400);
	}
})

// 定时切换背景
/* var timer = "",
	m = 0,
	bOk = true;

function toggleAnimate(i, n, time) {
	if (bOk) {
		m = i;
		$("body").addClass("bg" + i).removeClass("bg" + n);
	} else {
		$("body").addClass("bg" + i).removeClass("bg" + (i - 1));
	}
	clearInterval(timer);
	timer = setInterval(function() {
		if (i === n) {
			bOk = true;
			i = m - 1;
		} else {
			bOk = false;
		}
		toggleAnimate(i + 1, n, time);
	}, time)
}
toggleAnimate(Math.ceil(Math.random() * 5), Math.round(Math.random() * 5) + 5, 10000);
 */
