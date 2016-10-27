function zhugeshow__() {
	var body = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
	var y1 = document.body.scrollTop, y2 = y1 + body.clientHeight;
	var imgs = document.getElementsByTagName("img");
	for(var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		var src2o = img.attributes["src2o"]
		if(src2o)
			continue;
		var y = img.offsetTop, h = img.height;
		var h_1 = h, h_2 = 0;
		if(!h) {
			var src2h = img.attributes["src2h"];
			if(src2h) {
				h = parseInt(src2h.nodeValue);
				h_1 = h_2 = h / 2;
			}
		}
		if(y + h_1 >= y1 && y - h_2 <= y2) {
			var src2 = img.attributes["src2"];
			if(src2) {
				//console.log(i + ") " + src2.nodeValue + "," + h_1 + "," + h_2);
				img.src = src2.nodeValue;
				img.setAttribute("src2o", "");
			}
		}
	}
}
window.onscroll = zhugeshow__;
window.onload = zhugeshow__;
