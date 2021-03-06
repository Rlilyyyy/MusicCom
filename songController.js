var getIndex = function() {
	var index = window.location.search;
	index = parseInt(index.split("=")[1]);
	return index?index:0;
}

var SongControl = function() {

	// 当前歌词所在行数
	var currentLrc = 0;
	// 当前第几首歌曲
	var currentSong = getIndex();
	// var songs = ["陈柏霖 - 我不会喜欢你.mp3","陈奕迅 - 浮夸.mp3","陈柏宇 - 你瞒我瞒.mp3","陈奕迅 - 爱情转移.mp3","陈奕迅 - 不如不见.mp3"];
	var songs = ["http://7xoehm.com1.z0.glb.clouddn.com/陈柏霖%20-%20我不会喜欢你.mp3","http://7xoehm.com1.z0.glb.clouddn.com/陈奕迅%20-%20浮夸.mp3","http://7xoehm.com1.z0.glb.clouddn.com/陈柏宇%20-%20你瞒我瞒.mp3","http://7xoehm.com1.z0.glb.clouddn.com/陈奕迅%20-%20爱情转移.mp3","http://7xoehm.com1.z0.glb.clouddn.com/陈奕迅%20-%20不如不见.mp3"];
	var authors = ["陈柏霖","陈奕迅","陈柏宇","陈奕迅","陈奕迅"];
	var images = ["http://7xoehm.com1.z0.glb.clouddn.com/1.jpg","http://7xoehm.com1.z0.glb.clouddn.com/2.jpg","http://7xoehm.com1.z0.glb.clouddn.com/3.jpg","http://7xoehm.com1.z0.glb.clouddn.com/4.jpg","http://7xoehm.com1.z0.glb.clouddn.com/5.jpg"];
	var lrcs = ["[00:00.13]我不会喜欢你 - 陈柏霖\n[00:04.40]\n[00:06.88]作词：徐誉庭 作曲：陈柏霖/王宏恩\n[00:09.46]\n[00:12.52]陈珊珊 我不会爱你了  祝你在上海幸福...\n[00:24.81]我想我应该应该不会爱你\n[00:30.05]为了要努力 努力的不爱你\n[00:35.29]所以我让自己那麽喜欢你\n[00:40.27]这样你就不忍心和我分离\n[00:46.59]我想我讨厌? 讨厌骄傲的你\n[00:51.71]也讨厌美好 美好的那个你\n[00:57.15]於是我要自己假装讨厌你\n[01:02.25]那麽你就舍不得离我而去\n[01:08.77]\n[01:10.22]我必须说我真的不会喜欢你\n[01:20.90]我不喜欢你占据我所有思绪\n[01:31.75]连你的窃笑也像是鼓励\n[01:36.36]从早安後的早餐到晚餐後的晚安\n[01:42.81]别笑了 别笑了　我不会喜欢你\n[01:51.01]陈珊珊 我爱你...所以.. 我不爱你...\n[02:15.54]我放空了　我解脱了\n[02:18.09]你还是在我的眼里 我喜欢了\n[02:22.16]我讨厌了　影响不了我的呼吸\n[02:26.52]原来我　已经无法自拔\n[02:31.51]我秘密的　爱上你\n[02:37.95]\n[02:41.39]你不必懂　我真的不会喜欢你\n[02:52.15]我不想要你因为我变得消极\n[03:02.93]有你的城市下雨也美丽\n[03:07.52]从黎明後的太阳　到深夜里的月光\n[03:14.18]别想了 别想了　我不会喜欢你\n[03:25.12]别想了 别想了　我不会喜欢你","[00:01.30]浮夸-陈奕迅\n[00:28.80]有人问我 我就会讲\n[00:32.18]但是无人来\n[00:34.35]\n[00:35.87]我期待 到无奈\n[00:37.62]有话要讲 得不到装载\n[00:41.42]\n[00:42.56]我的心情犹像樽盖等被揭开\n[00:46.68]咀巴却在养青苔\n[00:49.31]人潮内 愈文静\n[00:50.99]愈变得 不受理睬\n[00:53.55]自己要搅出意外\n[00:56.31]像突然地高歌\n[01:00.05]任何地方也像开四面台\n[01:03.68]着最闪的衫 扮十分感慨\n[01:07.18]有人来拍照 要记住插袋\n[01:10.67]\n[01:11.18]你当我是浮夸吧\n[01:15.24]夸张只因我很怕\n[01:18.87]似木头 似石头的话\n[01:22.43]得到注意吗\n[01:24.81]其实怕被忘记\n[01:26.99]至放大来演吧\n[01:29.62]很不安 怎去优雅\n[01:33.18]世上还赞颂沉默吗\n[01:36.87]不够爆炸\n[01:39.56]怎么有话题 让我夸\n[01:42.87]做大娱乐家\n[01:45.48]\n[01:51.18]那年十八 母校舞会\n[01:54.49]站着如喽罗\n[01:56.92]\n[01:58.18]那时候 我含泪\n[02:00.06]发誓各位 必须看到我\n[02:03.80]\n[02:04.87]在世间平凡又普通的路太多\n[02:08.93]无知你住哪一座\n[02:11.74]情爱中 工作中\n[02:13.43]受过的忽视太多\n[02:15.81]自尊已饱经跌堕\n[02:18.62]重视能治肚饿\n[02:22.31]未曾获得过 便知我为何\n[02:27.85]大动作很多 犯下这些错\n[02:30.23]搏人们看着我 算病态么\n[02:34.23]你当我是浮夸吧\n[02:37.73]夸张只因我很怕\n[02:41.23]似木头 似石头的话\n[02:44.73]得到注意吗\n[02:47.23]其实怕被忘记\n[02:49.17]至放大来演吧\n[02:52.23]很不安 怎去优雅\n[02:55.60]世上还赞颂沉默吗\n[02:59.29]不够爆炸\n[03:01.92]怎么有话题 让我夸\n[03:05.30]做大娱乐家\n[03:08.84]\n[03:19.79]欢迎您\n[03:20.54]幸运儿并不多\n[03:23.35]若然未当过就知我为何\n[03:26.79]用十倍苦心 做突出一个\n[03:30.48]正常人够我 富议论性么\n[03:34.04]你叫我做浮夸吧\n[03:38.61]加几声嘘声也不怕\n[03:42.11]我在场 有闷场的话\n[03:45.73]表演你看吗 够歇斯底里吗\n[03:50.04]以眼泪淋花吧\n[03:53.04]一心只想你惊讶\n[03:56.48]我旧时似未存在吗\n[04:00.23]加重注码 青筋也现形\n[04:04.42]话我知 现在存在吗\n[04:08.60]\n[04:11.03]凝视我 别再只看天花\n[04:13.20]\n[04:18.62]我非你杯茶 也可尽情地喝吧\n[04:24.43]别遗忘有人在 为你声沙","[00:00.75]你瞒我瞒 - 陈柏宇\n[00:19.34]约会像是为分享到饱肚滋味\n[00:25.65]有任何难题 却不提起\n[00:31.98]这若是浪漫 我怎麽觉得就快分离\n[00:37.90]你哭过 但眼影闪得更艳美\n[00:44.51]我是谁情人 你始终也是你\n[00:50.58]微笑静默互望 笑比哭更可悲\n[00:57.22]就算怎开心皱着眉\n[01:00.36]尽管紧紧抱得稳你\n[01:03.94]两臂 却分得开我共你\n[01:09.46]无言的亲亲亲 侵袭我心\n[01:15.68]仍宁愿亲口讲你累得很\n[01:21.93]如除我以外在你心\n[01:26.02]还多出一个人 你瞒住我\n[01:31.09]我亦瞒住我 太合衬\n[01:47.79]这就是谈情 客气得吓着我\n[01:53.64]除了近来繁忙我所知有几多\n[02:00.07]若要哭不哭诉为何\n[02:03.53]大家争吵斗嘴好过\n[02:07.10]胜过 笑不出声抱着我\n[02:12.55]无言的亲亲亲 侵袭我心\n[02:18.94]仍宁愿亲口讲你累得很\n[02:25.19]如除我以外在你心\n[02:29.17]还多出一个人 你瞒住我\n[02:34.29]我亦瞒住我 太合衬\n[02:52.55]这麽寂寞的恋爱算甚麽\n[02:56.93]用利指尖缠我 用热吻逃避我\n[03:04.95]无言的亲亲亲 侵袭我心\n[03:11.01]仍宁愿亲口讲你累得很\n[03:17.33]如除我以外在你心\n[03:21.27]还多出一个人 你瞒住我\n[03:26.38]我亦瞒住我 太合衬","[00:23.09]徘徊过多少橱窗 住过多少旅馆\n[00:27.15]才会觉得分离也并不冤枉\n[00:31.70]感情是用来浏览 还是用来珍藏\n[00:36.27]好让日子天天都过的难忘\n[00:40.90]熬过了多久患难 湿了多少眼眶\n[00:45.45]才能知道伤感是爱的遗产\n[00:50.12]流浪几张双人床 换过几次信仰\n[00:54.68]才让戒指义无返顾的交换\n[00:59.18]把一个人的温暖 转移到另一个的胸膛\n[01:04.23]让上次犯的错反省出梦想\n[01:08.91]每个人都是这样 享受过提心吊胆\n[01:13.40]才拒绝做爱情代罪的羔羊\n[01:17.89]回忆是抓不到的月光握紧就变黑暗\n[01:22.63]等虚假的背影消失于晴朗\n[01:27.13]阳光在身上流转 等所有业障被原谅\n[01:34.81]爱情不停站 想开往地老天荒\n[01:39.36]需要多勇敢\n[01:41.73]\n[01:43.66]烛光照亮了晚餐 照不出个答案\n[01:48.09]恋爱不是温馨的请客吃饭\n[01:52.77]床单上铺满花瓣 拥抱让他成长\n[01:57.27]太拥挤就开到了别的土壤\n[02:01.88]感情需要人接班 接近换来期望\n[02:06.38]期望带来失望的恶性循环\n[02:11.06]短暂的总是浪漫 漫长总会不满\n[02:15.55]烧完美好青春换一个老伴\n[02:20.04]把一个人的温暖 转移到另一个的胸膛\n[02:25.16]让上次犯的错反省出梦想\n[02:29.78]每个人都是这样 享受过提心吊胆\n[02:34.33]才拒绝做爱情代罪的羔羊\n[02:38.89]回忆是抓不到的月光握紧就变黑暗\n[02:43.50]等虚假的背影消失于晴朗\n[02:48.12]阳光在身上流转 等所有业障被原谅\n[02:54.43]\n[02:54.99]爱情不停站 想开往地老天荒\n[02:59.54]需要多勇敢\n[03:02.22]\n[03:04.35]把一个人的温暖 转移到另一个的胸膛\n[03:09.46]让上次犯的错反省出梦想\n[03:14.33]每个人都是这样 享受过提心吊胆\n[03:18.94]才拒绝做爱情代罪的羔羊\n[03:23.56]回忆是抓不到的月光握紧就变黑暗\n[03:28.27]等虚假的背影消失于晴朗\n[03:33.01]阳光在身上流转 等所有业障被原谅\n[03:39.07]\n[03:42.44]爱情不停站 想开往地老天荒\n[03:47.56]需要多勇敢\n[03:50.80]\n[03:52.86]你不要失望 荡气回肠是为了\n[03:57.48]最美的平凡","[00:01.44]陈奕迅-不如不见\n[00:14.30]头沾湿无可避免\n[00:20.79]\n[00:21.67]伦敦总依恋雨点\n[00:25.60]\n[00:28.10]乘早机忍耐着呵欠\n[00:34.24]完全为见你一面\n[00:39.76]\n[00:41.37]寻得到尘封小店\n[00:48.07]回不到相恋那天\n[00:53.10]\n[00:54.34]灵气大概早被污染\n[01:00.20]谁为了生活不变\n[01:05.50]\n[01:07.25]越渴望见面然后发现\n[01:12.58]\n[01:14.52]中间隔着那十年\n[01:20.26]我想见的笑脸只有怀念\n[01:26.59]不懂怎去再聊天\n[01:32.63]\n[01:33.28]像我在往日还未抽烟\n[01:38.67]\n[01:40.24]不知你怎么变迁\n[01:45.50]\n[01:46.40]似等了一百年忽已明白\n[01:52.48]即使再见面\n[01:55.57]成熟地表演\n[01:59.72]\n[02:01.39]不如不见\n[02:05.79]\n[02:20.03]寻得到尘封小店\n[02:26.04]\n[02:26.88]回不到相恋那天\n[02:31.86]\n[02:32.98]灵气大概早被污染\n[02:38.55]谁为了生活不变\n[02:44.51]\n[02:45.58]越渴望见面然后发现\n[02:50.92]\n[02:52.58]中间隔着那十年\n[02:57.50]\n[02:58.40]我想见的笑脸只有怀念\n[03:04.74]不懂怎去再聊天\n[03:10.67]\n[03:11.26]像我在往日还未抽烟\n[03:16.68]\n[03:18.00]不知你怎么变迁\n[03:22.97]\n[03:23.78]似等了一百年忽已明白\n[03:30.28]即使再见面\n[03:33.48]成熟地表演\n[03:37.81]\n[03:39.44]不如不见"]
	// 歌词ul的顶部偏移量
	var top = $("#lrc-ul")[0].style.top;
	// 歌词li集合
	var lrc = $("#lrc-ul")[0].getElementsByTagName("li");
	// 播放/暂停按钮
	var playBtn = $("#control-middle")[0];
	// 播放/暂停旗帜
	var playFlag = false;
	// 媒体dom
	var audio = $("#audio")[0];
	// 歌词变换时间
	var lyricsTime = [];
	// 歌词变换内容
	var lyricsText = [];
	// 当前歌词所在索引值
	var lyricsIndex = 0;
	// 进度条长度
	var progressWidth = parseInt($("#pro-back")[0].offsetWidth);
	// 需要减去的点击X轴的偏移量
	var preWidth = document.body.offsetWidth * 0.25;
	// 
	audio.src = songs[currentSong];
	// alert(progressWidth)

	initAll();
	// 添加控制进度事件
	// addTouchEvent();
	audio.addEventListener("canplaythrough", addTouchEvent, false);
	// 歌曲播放完毕后自动切歌时间
	audio.addEventListener("ended", function(){forward();}, false);

	function removeTouchEvent() {
		$("#pro-back")[0].removeEventListener("mousedown", changeProgress, false);
		$("#pro-now")[0].removeEventListener("mousedown", changeProgress, false);
		$("#pro-load")[0].removeEventListener("mousedown", changeProgress, false);
	}

	function addTouchEvent() {
		$("#pro-back")[0].addEventListener("mousedown", changeProgress, false);
		$("#pro-now")[0].addEventListener("mousedown", changeProgress, false);
		$("#pro-load")[0].addEventListener("mousedown", changeProgress, false);
	}

	// 重设进度条
	function changeProgress(e) {
		e.preventDefault();
		var proWidth = parseInt($("#pro-back")[0].offsetWidth);
		var scaleX = e.pageX - preWidth;
		audio.currentTime = scaleX / proWidth * audio.duration;
		$("#pro-now")[0].style.width = (scaleX / proWidth) + "%";
		var time = audio.currentTime;
		while(time * 1000 >= lyricsTime[lyricsIndex+1]) {
			changeLrcNext();
		}
		while(time * 1000 <= lyricsTime[lyricsIndex] && lyricsIndex != 0) {
			changeLrcForward();
		}
	}

	// 读取歌词并加入相对应数组
	function readLrc(index) {

		var lrc = lrcs[index];
		var everyLrc = lrc.split("\n");

		lyricsTime = [];
		lyricsText = [];

		for(var i=0;i<everyLrc.length;i++) {

			var str1 = everyLrc[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g)[0];
			var str2 = everyLrc[i].replace(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/,"");
			console.log(str2);
			var time = str1.split(".");
			var ms = parseInt(time[1].split("]")[0]);
			var second = parseInt(time[0].split(":")[1]);
			var minute = parseInt(time[0].split(":")[0].split("[")[1]);
			var sum = minute * 60 * 1000 + second * 1000 + ms;
			//歌词偏移量……4500
			lyricsTime.push(sum+4000);
			lyricsText.push(str2);
		}

		initLrc();
	};

	// 将读取好的歌词初始化到页面中
	function initLrc() {
		var elem = $("#lrc-ul")[0];
		elem.innerHTML = "";
		for(var i=0;i<lyricsText.length;i++) {
			var newElem = document.createElement("li");
			newElem.innerText = lyricsText[i];
			if(i===0) {
				newElem.className = "current-lrc";
			}
			elem.appendChild(newElem);
		}
	}

	// 歌词向下前进一句
	function changeLrcNext() {
		if(lyricsIndex==lyricsTime.length-1) {
			return
		}else {
			lyricsIndex++
		}
		console.log("1"+lyricsIndex);
		if(lrc[currentLrc]) {
			removeClass(lrc[currentLrc++],"current-lrc");
			top = parseInt(top);
			top -= 30;
			$("#lrc-ul")[0].style.top = top + "px";
			addClass(lrc[currentLrc],"current-lrc");
		}
	}

	// 歌词向上退后一句
	function changeLrcForward() {
		if(lyricsIndex==0) {
			return;
		}else {
			lyricsIndex--;
		}
		
		
		console.log("2"+lyricsIndex);
		if(lrc[currentLrc]) {
			removeClass(lrc[currentLrc--],"current-lrc");	
			addClass(lrc[currentLrc],"current-lrc");
			top = parseInt(top);
			top += 30;
			$("#lrc-ul")[0].style.top = top + "px";
		}
	}

	// 设置进度条的加载、播放进度
	function progressAdd() {
		var currentTime = audio.currentTime;
		var duration = audio.duration;
		var persent = currentTime/duration;
		// 获取已缓冲部分的 TimeRanges 对象
		var timeRanges = audio.buffered;
		var timeBuffered;
		var bufferPercent;
		// 获取已缓存的时间
		
		try {
			timeBuffered = timeRanges.end(0);
			// 获取缓存进度，值为0到1
			bufferPercent = timeBuffered / duration;
			$("#pro-load")[0].style.width = (bufferPercent*progressWidth) + "px";

			$("#pro-now")[0].style.width = (persent*progressWidth) + "px";
		}catch(e){
			// 在UC和微信上无法读取end()，需要捕捉错误
		}finally {
			$("#pro-now")[0].style.width = (persent*progressWidth) + "px";
		}	
	}

	// 初始化所有索引值，并添加对应的歌曲作者等……
	function initAll() {
		while(lyricsIndex != 0) {
			changeLrcForward();
		}
		lrc = $("#lrc-ul")[0].getElementsByTagName("li");
		lyricsIndex = 0;
		currentLrc = 0;
		audio = $("#audio")[0];
		readLrc(currentSong);
		$("#singer")[0].innerText = authors[currentSong];
		$("#cd-img")[0].src = images[currentSong];
	}

	// 暂停播放
	function pause() {
		audio.pause();
		removeClass(playBtn,"*");
		addClass(playBtn,"fa fa-play");
	}

	// 开始播放
	function play() {
		audio.play();
		removeClass(playBtn,"*");
		addClass(playBtn,"fa fa-pause");
	}

	// 后退一首歌
	function back() {
		removeTouchEvent();
		pause();
		currentSong==0?currentSong=songs.length-1:--currentSong;
		audio.src = songs[currentSong];
		initAll();
		play();
		playFlag = true;
		$("#pro-now")[0].style.width = 0 + "px";
		$("#pro-load")[0].style.width = 0 + "px";
	}

	// 前进一首歌
	function forward() {
		removeTouchEvent();
		pause();
		currentSong==songs.length-1?currentSong=0:++currentSong;
		audio.src = songs[currentSong];
		initAll();
		play();
		playFlag = true;
		$("#pro-now")[0].style.width = 0 + "px";
		$("#pro-load")[0].style.width = 0 + "px";
	}

	// 调用歌词切换
	function lrcUp() {
		console.log(audio.currentTime * 1000 + "     " + lyricsTime[lyricsIndex]);
		if(audio.currentTime * 1000 >= lyricsTime[lyricsIndex]) {
			changeLrcNext();
		}
	}

	return {
		start: function() {
			// 不断更新进度条
			var t1 = setInterval(progressAdd,1000);
			// 不断更新歌词进度
			var t2 = setInterval(lrcUp,1000);
			window.onbeforeunload  = function() {
				clearInterval(t1);
				clearInterval(t2);
				// return confirm("确定离开此页面吗？"); 
			}
		},
		playOrPause: function() {
			if(audio.paused) {
				play();
			}else {
				pause();
			}
		},
		getPlayStaue: function() {
			return playFlag;
		},
		back: function() {
			back();
		},
		forward: function() {
			forward();
		},
		getCurrentTime: function() {
			console.log(audio.currentTime);
			return audio.currentTime;
		},
	}
}