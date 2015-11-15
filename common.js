// 选择器
function $(arg) {

	if(typeof(arg) !== "string") {
		console.log("Selector name is not String");
		return;
	}else if(!document.getElementById || !document.getElementsByClassName) {
		console.log("Not suppose")
		return;
	}else {

		var elems = [];

		switch(arg[0]) {
			case "#":
				if(!document.getElementById) return;
				elems.push(document.getElementById(arg.substring(1)));
				break;
			case ".":
				if(!document.getElementsByClassName) return;
				elems = document.getElementsByClassName(arg.substring(1));
				break;
			default:
				console.error("Fucking error");
				break;
		}

		return elems;
	}
}

// dom class属性判断
function hasClass(obj) {
	if(obj.className) {
		return true;
	}else {
		return false;
	}
}

// 添加dom class
function addClass(obj, className) {

	if(!hasClass(obj)) {
		obj.className = className;
		return;
	}else if(typeof(className) != "string") {
		console.error("Type not suppose");
		return;
	}else if(obj.className == className) {
		return;
	}else {
		obj.className += " " + className;
		return;
	}
}

// 删除dom class
function removeClass(obj, className) {

	if(className == "*") {
		obj.className = "";
		return;
	}

	if(hasClass(obj)) {
		var reg1 = new RegExp('(\\s|^)' + className + '(\\s|$)');
		var reg2 = new RegExp('(^)' + className + '(\\s)');
		var reg3 = new RegExp('(\\s)' + className + '($)');
		
		if(reg2.test(obj.className)) {// className处于首部
			obj.className = obj.className.replace(reg2,"");
		}else if(reg3.test(obj.className)) {// className处于尾部
			obj.className = obj.className.replace(reg3,"");
		}else {
			obj.className = obj.className.replace(reg1," ");
		}
	}
	return;
}

// 向targetElem之后插入newElem
function insertAfter(newElem, targetElem) {

	var parentNode = targetElem.parentNode;

	if(parentNode.lastChild == targetElem) {
		parentNode.appendChild(newElem);
	}else {
		parentNode.insertBefore(newElem, targetElem.nextSibling);
	}

	return;
}