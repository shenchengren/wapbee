window.onload = function () {
	var start = document.getElementsByClassName("start")[0]
	var tips = document.getElementsByClassName("tips")[0]
	start.onclick = function () {
		tips.style.display = "none";
		this.style.display = "none";
		Game.init() //游戏初始化
	}
}
var Game = {
	enemy: { //创建敌人数据
		em1: {
			style: "enemy1",
			hp: "1",
			score: "3",
			scorePlus: 2,
			speed: 2
		},
		em2: {
			style: "enemy2",
			hp: "2",
			score: "5",
			scorePlus: 5,
			speed: 4
		},
		em3: {
			style: "enemy3",
			hp: "3",
			score: "10",
			scorePlus: 8,
			speed: 8
		},
		em4: {
			style: "enemy4",
			hp: "6",
			score: "18",
			scorePlus: 12,
			speed: 10
		},
		em5: {
			style: "enemy5",
			hp: "10",
			score: "20",
			scorePlus: 15,
			speed: 12
		}
	},
	checkpoint: [{ //创建数据
		data: ["em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
		iNum: 10,
		speedX: 5,
		speedY: 5,
		timer: 5000,
		lottery:[20,20,10,50]//彩蛋比例--柱子，血量，子弹，空
	},
	{
		data: ["em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
		iNum: 10,
		speedX: 7,
		speedY: 10,
		timer: 4000,
		lottery:[20,40,10,30]//彩蛋比例--柱子，血量，子弹，空
	},
	{
		data: ["em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
		iNum: 10,
		speedX: 10,
		speedY: 20,
		timer: 3000,
		lottery:[20,40,10,30]//彩蛋比例--柱子，血量，子弹，空
	},
	{
		data: ["em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1", "em1"],
		iNum: 10,
		speedX: 15,
		speedY: 25,
		timer: 2500,
		lottery:[20,40,10,30]//彩蛋比例--柱子，血量，子弹，空
	},
	{
		data: ["em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em1"],
		iNum: 10,
		speedX: 25,
		speedY: 40,
		timer: 2000,
		lottery:[20,40,10,30]//彩蛋比例--柱子，血量，子弹，空
	},
	{
		data: ["em4","em4","em4","em4","em4","em4","em4","em4","em4","em4","em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em4", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3","em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3","em3", "em3","em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2"],
		iNum: 10,
		speedX: 25,
		speedY: 40,
		timer: 1500,
		lottery:[20,40,10,30]//彩蛋比例--柱子，血量，子弹，空
	},
	{
		data: ["em4","em4","em4","em4","em4","em4","em4","em4","em4","em4","em3", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em4", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em5", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3","em3", "em3", "em3", "em3", "em3", "em3", "em3", "em3","em3", "em3","em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2", "em2"],
		iNum: 10,
		speedX: 25,
		speedY: 40,
		timer: 1500,
		lottery:[20,40,10,30]//彩蛋比例--柱子，血量，子弹，空
	}
	],
	airData: { //飞机数据
		air1: {
			style: "air",
			speed: 5,
			bullet: "bullet",
			bulletNum: 1,
			hp: 1
		}
	},
	level: 0,
	maxLevel: 5,
	init: function () { //初始化数据
		this.createScore();
		// this.createTips();
		this.createEnemy(this.checkpoint[this.level]);
		this.createAir();
		this.maxLevel = this.checkpoint.length;//自动获取最高关卡数量
		this.level++;
	},
	createScore: function () { //创建积分
		var oDiv = document.createElement("div");
		var oBox = document.getElementsByClassName("box")[0];
		this.oBox = oBox;
		oDiv.className = "score";
		oDiv.innerHTML = "积分：<span>0</span>";
		oBox.appendChild(oDiv);
		var oSore = oDiv.getElementsByTagName("span")[0];
		this.oSore = oSore;
	},
	createLottery:function(checkpoint){//创建彩蛋
		var that =this;
		var fanwei = 0;
		var lotteryRd = 0;
		this.lotteryArr = [];
		var oDiv = document.createElement("div");
		oDiv.className = "lottery"

		this.oUl.lotteryTimer = null;
		this.oUl.lotteryTimer = setTimeout(function(){
			var oDiv = document.createElement("div");
			oDiv.className = "lottery"

			var rd = Math.ceil(Math.random() * 100);
			lotteryRd = Math.ceil(Math.random() * 100)
			if(rd <= checkpoint.lottery[0]){
				oDiv.innerText = "墙";
				
				that.oBox.appendChild(oDiv);
				fanwei = (that.oBox.offsetWidth - oDiv.offsetWidth)/that.oBox.offsetWidth * 100;
				lotteryRd = Math.ceil(Math.random() * fanwei)
				oDiv.style.left = lotteryRd + "%";
				oDiv.style.top = 0;
				oDiv.timer = null;
				oDiv.timer = setInterval(function(){
					oDiv.style.top = oDiv.offsetTop + 8 +"px";
					if(that.collision1(oDiv,that.oAir)){
						if (that.oAir.innerText == 1) {
							clearInterval(that.oUl.rdTiemr);
							clearInterval(that.oUl.timer);
							document.getElementsByClassName("end")[0].innerText = "游戏失败";
							document.getElementsByClassName("end")[0].style.display = "block";
							setTimeout(function () {
								window.location.reload();
							}, 2000)
						} else {
							that.oAir.innerText--;
							clearInterval(oDiv.timer);
							that.oBox.removeChild(oDiv);
						}
					}
					if(oDiv.offsetTop >= that.oBox.offsetHeight){
						clearInterval(oDiv.timer);
						that.oBox.removeChild(oDiv);
					}
				},80)
				
				
			}else if(rd <= (checkpoint.lottery[0] + checkpoint.lottery[1])){
				oDiv.innerText = "血";
				that.oBox.appendChild(oDiv);
				fanwei = (that.oBox.offsetWidth - oDiv.offsetWidth)/that.oBox.offsetWidth * 100;
				lotteryRd = Math.ceil(Math.random() * fanwei)
				oDiv.style.left = lotteryRd + "%";
				oDiv.style.top = 0;
				oDiv.timer = null;
				oDiv.timer = setInterval(function(){
					oDiv.style.top = oDiv.offsetTop + 8 +"px";
					if(that.collision1(oDiv,that.oAir)){
						that.oAir.innerText++
						clearInterval(oDiv.timer);
						that.oBox.removeChild(oDiv);
					}
					if(oDiv.offsetTop >= that.oBox.offsetHeight){
						clearInterval(oDiv.timer);
						that.oBox.removeChild(oDiv);
					}
				},80)
				
				
			}else if(rd <= (checkpoint.lottery[0] + checkpoint.lottery[1] + checkpoint.lottery[2])){
				oDiv.innerText = "弹";
				that.oBox.appendChild(oDiv);
				fanwei = (that.oBox.offsetWidth - oDiv.offsetWidth)/that.oBox.offsetWidth * 100;
				lotteryRd = Math.ceil(Math.random() * fanwei)
				oDiv.style.left = lotteryRd + "%";
				oDiv.style.top = 0;
				oDiv.timer = null;
				oDiv.timer = setInterval(function(){
					oDiv.style.top = oDiv.offsetTop + 8 +"px";
					if(that.collision1(oDiv,that.oAir)){
						
						that.oAir.bulletNum++
						clearInterval(oDiv.timer);
						that.oBox.removeChild(oDiv);
						
					}
					if(oDiv.offsetTop >= that.oBox.offsetHeight){
						clearInterval(oDiv.timer);
						that.oBox.removeChild(oDiv);
					}
				},80)
			
				
			}else if(rd <= (checkpoint.lottery[0] + checkpoint.lottery[1] + checkpoint.lottery[2] + checkpoint.lottery[3])){
				console.log("空")
				
			}
			// console.log(that.oUl)
			// console.log(that.oUl.lotteryTime)
			// that.oUl.lotteryTimer()
		},5000)



		// for(var i = 0 ; i<20; i++){
		// 	var rd = Math.ceil(Math.random() * 100);
		// 	if(rd <= checkpoint.lottery[0]){
		// 		this.lotteryArr.push("墙");
		// 	}else if(rd <= (checkpoint.lottery[0] + checkpoint.lottery[1])){
		// 		this.lotteryArr.push("血");
		// 	}else if(rd <= (checkpoint.lottery[0] + checkpoint.lottery[1] + checkpoint.lottery[2])){
		// 		this.lotteryArr.push("弹");
		// 	}else if(rd <= (checkpoint.lottery[0] + checkpoint.lottery[1] + checkpoint.lottery[2] + checkpoint.lottery[3])){
		// 		this.lotteryArr.push("空");
		// 	}
		// }
		// console.log(this.lotteryArr)


		// this.oUl.lotteryTimer = null;
		// this.oUl.lotteryTimer = setTimeout(function(){
		// 	var oDiv = document.createElement("div");
		// 	oDiv.className = "lottery"
		// 	var indexRd = Math.floor(Math.random() * 20);
		// 	that.lotteryArr[indexRd]
		// },5000)
	},
	createEnemy: function (checkpoint) { //创建敌人
		var data = checkpoint.data;
		var arr = [];
		var that = this;
		document.title = this.level + 1;
		var oUl = document.createElement("ul");
		oUl.style.width = 20 * checkpoint.iNum + "px";
		oUl.className = "honeycomb";
		this.oUl = oUl;
		this.oUl.rdTiemr = null;
		this.oBox.appendChild(oUl);
		oUl.style.left = (this.oBox.offsetWidth - oUl.offsetWidth) / 2 + "px";
		for (var i = 0; i < data.length; i++) {
			var r = Math.random();
			var oLi = document.createElement("li");
			oLi.className = this.enemy[data[i]].style;
			oLi.hp = this.enemy[data[i]].hp;
			oLi.score = parseInt(this.enemy[data[i]].score) + parseInt(this.enemy[data[i]].scorePlus * r);
			oLi.speed = this.enemy[data[i]].speed;
			oUl.appendChild(oLi);
		}
		var oLi = oUl.getElementsByTagName("li");
		this.oLi = oLi;
		for (var j = 0; j < oLi.length; j++) {//把浮动布局转换成定位布局
			arr.push([oLi[j].offsetLeft, oLi[j].offsetTop])
		}
		for (var k = 0; k < oLi.length; k++) {//把浮动布局转换成定位布局
			oLi[k].style.position = "absolute";
			oLi[k].style.left = arr[k][0] + "px";
			oLi[k].style.top = arr[k][1] + "px";
		}
		this.enemyMove(checkpoint);//敌人移动
		this.oUl.rdTiemr = setInterval(function () {//敌人自由落体
			that.random();
		}, checkpoint.timer)

		// 创建彩蛋
		this.createLottery(checkpoint);

	},
	enemyMove: function (checkpoint) { //敌人移动
		var that = this;
		that.oUl.timer = null;
		var l = 0;
		var r = this.oBox.offsetWidth - this.oUl.offsetWidth;
		that.oUl.timer = setInterval(move, 1000);

		function move() {
			if (that.oUl.offsetLeft >= r) {
				checkpoint.speedX *= -1;
				that.oUl.style.top = that.oUl.offsetTop + checkpoint.speedY + "px";
			} else if (that.oUl.offsetLeft <= l) {
				checkpoint.speedX *= -1;
				that.oUl.style.top = that.oUl.offsetTop + checkpoint.speedY + "px";
			}
			that.oUl.style.left = that.oUl.offsetLeft + checkpoint.speedX + "px";

		}
	},
	createAir: function () { //创建飞机
		var that = this
		var oAir = document.createElement("div");
		oAir.className = this.airData.air1.style;
		oAir.speed = this.airData.air1.speed;
		oAir.hp = this.airData.air1.hp;
		oAir.bulletNum = this.airData.air1.bulletNum;
		oAir.innerText = oAir.hp;
		oAir.blTimer = null;
		this.oAir = oAir;
		this.oBox.appendChild(oAir);
		oAir.style.left = (this.oBox.offsetWidth - oAir.offsetWidth) / 2 + "px";
		oAir.style.top = (this.oBox.offsetHeight - oAir.offsetHeight) + "px";
		this.airMove();
		oAir.blTimer = setInterval(function(){
			for (var i = 0; i < that.oAir.bulletNum; i++) {//发射子弹
				that.createBullet();
			}
		},400)
		
	},
	airMove: function () { //飞机移动
		var that = this;
		this.oAir.timer = null;
		var code = 0;
		var btn = document.getElementsByClassName("btn")[0];
	
		btn.ontouchstart = function (ev) {
			if (!that.oAir.timer) {
				that.oAir.timer = setInterval(move, 1000/60);
			}
			// var ev = ev || window.event;
			if (ev.target.className == "left") {
				code = 1
			} else if (ev.target.className == "right") {
				code = 2
			}
		}


		btn.ontouchend = function (ev) {
			if (ev.target.className == "left") {
				clearInterval(that.oAir.timer);
				code = 0;
				that.oAir.timer = null;
			} else if (ev.target.className == "right") {
				clearInterval(that.oAir.timer);
				code = 0;
				that.oAir.timer = null;
			} else if (ev.target.className == "hp" && that.oSore.innerText >= 100) {//强化生命
				that.oSore.innerText -= 100;
				that.oAir.innerText++;
			} else if (ev.target.className == "bl" && that.oSore.innerText >= 300) {//强化子弹
				that.oSore.innerText -= 300;
				that.oAir.bulletNum++
			}
		}
		function move() {
			if (code == 1) {
				if (that.oAir.offsetLeft >= 0) {
					that.oAir.style.left = that.oAir.offsetLeft - that.oAir.speed + "px";
				} else {
					clearInterval(that.oAir.timer);
				}

			} else if (code == 2) {
				if (that.oAir.offsetLeft <= (that.oBox.offsetWidth - that.oAir.offsetWidth)) {
					that.oAir.style.left = that.oAir.offsetLeft + that.oAir.speed + "px";
				} else {
					clearInterval(that.oAir.timer);
				}

			}
		}
	},
	createBullet: function () { //创建子弹
		var oB = document.createElement("div");
		oB.className = "bullet";
		this.oBox.appendChild(oB);
		oB.style.left = this.oAir.offsetLeft + this.oAir.offsetWidth / 2 - oB.offsetWidth / 2 + "px";
		oB.style.top = this.oBox.offsetHeight - this.oAir.offsetHeight - oB.offsetHeight - 4 + "px";
		this.bulletMove(oB);
	},
	bulletMove: function (oB) { //子弹移动
		var that = this;
		oB.timer = null;
		oB.timer = setInterval(move, 2000/60);

		function move() {
			if (oB.offsetTop <= (that.oBox.offsetTop - oB.offsetHeight)) {
				clearInterval(oB.timer);
				that.oBox.removeChild(oB);
			} else {
				oB.style.top = oB.offsetTop - 20 + "px";
			}
			for (var i = 0; i < that.oLi.length; i++) {
				if (that.collision(oB, that.oLi[i])) {
					if (that.oLi[i].hp == 1) {//消灭敌人
						var oScoreText = document.createElement("span");
						oScoreText.className = "scoretext";
						oScoreText.style.left = oB.offsetLeft + "px";
						oScoreText.style.top = oB.offsetTop + "px";
						oScoreText.innerText = "+" + parseInt(that.oLi[i].score);
						that.oBox.appendChild(oScoreText);
						setTimeout(function () {
							that.oBox.removeChild(oScoreText);
						}, 800);
						that.oSore.innerText = parseInt(that.oSore.innerText) + parseInt(that.oLi[i].score);
						clearInterval(that.oLi[i].timer);
						that.oUl.removeChild(that.oLi[i]);
					} else {
						that.oLi[i].hp--
					}
					clearInterval(oB.timer);
					that.oBox.removeChild(oB);
					that.nextCheckpoint();
				}
			}
		}
	},
	random: function () { //自由落体
		var that = this;
		var nowLi = this.oLi[parseInt(this.oLi.length * Math.random())]
		nowLi.timer = null;

		nowLi.timer = setInterval(function () {
			var a = (that.oAir.offsetLeft + that.oAir.offsetWidth / 2) - (nowLi.offsetLeft + that.oUl.offsetLeft + nowLi.offsetWidth / 2);
			var b = (that.oAir.offsetTop + that.oAir.offsetHeight / 2) - (nowLi.offsetTop + that.oUl.offsetTop + nowLi.offsetHeight / 2);
			var c = Math.sqrt(a * a + b * b);
			var iX = (nowLi.speed * a) / c;
			var iY = (nowLi.speed * b) / c;
			nowLi.style.left = nowLi.offsetLeft + iX + "px";
			nowLi.style.top = nowLi.offsetTop + iY + "px";

			if (that.collision(that.oAir, nowLi)) {
				if (that.oAir.innerText == 1) {
					clearInterval(that.oUl.rdTiemr);
					clearInterval(that.oUl.timer);
					document.getElementsByClassName("end")[0].innerText = "游戏失败";
					document.getElementsByClassName("end")[0].style.display = "block";
					clearInterval(that.oAir.blTimer);
					
					that.oBox.removeChild(that.oAir);
					clearInterval(nowLi.timer);
					that.oAir = null;
					that.oUl.removeChild(nowLi);
					setTimeout(function () {
						window.location.reload();
					}, 2000)
				} else {
					clearInterval(nowLi.timer);
					that.oUl.removeChild(nowLi);
					nowLi = null ;
					that.oAir.innerText--;
					that.nextCheckpoint();
				}
			}
		}, 2000/60)

	},
	nextCheckpoint:function(){
		if (this.oLi.length == 0) {
			if (this.level == this.maxLevel) {
				clearInterval(this.oUl.rdTiemr);
				clearInterval(this.oUl.timer);
				this.oBox.removeChild(this.oUl);
				document.getElementsByClassName("end")[0].style.display = "block";
				clearInterval(this.oAir.blTimer);
				this.oBox.removeChild(this.oAir);
			} else {
				clearInterval(this.oUl.rdTiemr);
				clearInterval(this.oUl.timer);
				this.oBox.removeChild(this.oUl);
				this.createEnemy(this.checkpoint[this.level]);
				this.level++;
			}
		}
	},
	collision: function (obj1, obj2) { //检测碰撞
		var L1 = obj1.offsetLeft;
		var R1 = obj1.offsetLeft + obj1.offsetWidth;
		var T1 = obj1.offsetTop;
		var B1 = obj1.offsetTop + obj1.offsetHeight;

		var L2 = obj2.offsetLeft + this.oUl.offsetLeft;
		var R2 = obj2.offsetLeft + this.oUl.offsetLeft + obj2.offsetWidth;
		var T2 = obj2.offsetTop + this.oUl.offsetTop;
		var B2 = obj2.offsetTop + this.oUl.offsetTop + obj2.offsetHeight;
		if (L1 > R2 || R1 < L2 || T1 > B2 || B1 < T2) {
			return false
		} else {
			return true
		}
	},
	collision1:function(obj1, obj2){
		if(obj1==null||obj2==null){
			return;
		}
		var L1 = obj1.offsetLeft;
		var R1 = obj1.offsetLeft + obj1.offsetWidth;
		var T1 = obj1.offsetTop;
		var B1 = obj1.offsetTop + obj1.offsetHeight;

		var L2 = obj2.offsetLeft;
		var R2 = obj2.offsetLeft + obj2.offsetWidth;
		var T2 = obj2.offsetTop
		var B2 = obj2.offsetTop + obj2.offsetHeight;
		if (L1 > R2 || R1 < L2 || T1 > B2 || B1 < T2) {
			return false
		} else {
			return true
		}
	}
}