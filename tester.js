javascript: (function() {
	window.colorerApp = function() {
		var all = document.getElementsByTagName("*");
		if (all[0].style.color == "white") {
			var useColors = "grey"
		} else if (all[0].style.color == "grey") {
			var useColors = "green"
		} else if (all[0].style.color == "green") {
			var useColors = "royalblue"
		} else if (all[0].style.color == "royalblue") {
			var useColors = "black"
		} else if (all[0].style.color == "black") {
			var useColors = "yellow"
		} else if (all[0].style.color == "yellow") {
			var useColors = "aqua"
		} else if (all[0].style.color == "aqua") {
			var useColors = "fuchsia"
		} else if (all[0].style.color == "fuchsia") {
			var useColors = "orangered"
		} else {
			var useColors = "white"
		};
		if (all[0].style.backgroundColor == "white") {
			var useBG = "black"
		} else if (all[0].style.backgroundColor == "black") {
			var useBG = "grey"
		} else if (all[0].style.backgroundColor == "grey") {
			var useBG = "royalblue"
		} else if (all[0].style.backgroundColor == "royalblue") {
			var useBG = "navy"
		} else if (all[0].style.backgroundColor == "navy") {
			var useBG = "silver"
		} else if (all[0].style.backgroundColor == "silver") {
			var useBG = "maroon"
		} else if (all[0].style.backgroundColor == "maroon") {
			var useBG = "darkgreen"
		} else {
			var useBG = "white"
		};
		for (var i = 0, max = all.length; i < max; i++) {
			if (all[i].style) {
				all[i].style.backgroundColor = useBG;
			}
		};
		var all = document.getElementsByTagName("*");
		for (var i = 0, max = all.length; i < max; i++) {
			if (all[i].style) {
				all[i].style.color = useColors;
			}
		};
	};
	window.googApp = function() {
		var ads = document.getElementsByTagName('*');
		for (var i = 0; i < ads.length; i++) {
			if (ads[i].id.split("goog").length > 1) {
				console.log(ads[i]);
				ads[i].remove();
			}
		};
		delete ads;
		var ads = document.getElementsByTagName('*');
		for (var i = 0; i < ads.length; i++) {
			if (ads[i].id.split("ads").length > 1) {
				console.log(ads[i]);
				ads[i].remove();
			}
		};
		delete ads;
	};
	window.googRepeaterApp = function() {
		if (window.currentInterval3) {
			clearInterval(window.currentInterval3);
		};
		window.currentInterval3 = setInterval(function() {
			console.log("Running repeaterGoogler");
			var ads = document.getElementsByTagName('*');
			for (var i = 0; i < ads.length; i++) {
				if (ads[i].id.split("goog").length > 1) {
					console.log(ads[i]);
					ads[i].remove();
				} else if (ads[i].id.split("ads").length > 1) {
					console.log(ads[i]);
					ads[i].remove();
				} else if (ads[i].id.split("iframe").length > 1) {
					console.log(ads[i]);
					ads[i].remove();
				}
			};
			delete ads;
			var ads = document.getElementsByTagName('iframe');
			for (var i = 0; i < ads.length; i++) {
				console.log(ads[i]);
				ads[i].remove();
			};
			delete ads;
		}, 6000)
	};
	window.iframeApp = function() {
		var ads = document.getElementsByTagName('iframe');
		for (var i = 0; i < ads.length; i++) {
			console.log(ads[i]);
			ads[i].remove();
		};
		delete ads;
		var ads = document.getElementsByTagName('*');
		for (var i = 0; i < ads.length; i++) {
			if (ads[i].id.split("iframe").length > 1) {
				console.log(ads[i]);
				ads[i].remove();
			}
		};
		delete ads;
	};
	window.formaterApp = function() {
		var all = document.getElementsByTagName("*");
		if (all[0].style.fontFamily == 'Georgia, serif') {
			var fFam = "Arial, Helvetica, sans-serif"
		} else if (all[0].style.fontFamily == 'Arial, Helvetica, sans-serif') {
			var fFam = '"Times New Roman", Times, serif'
		} else if (all[0].style.fontFamily == '"Times New Roman", Times, serif') {
			var fFam = 'Verdana, Geneva, sans-serif'
		} else if (all[0].style.fontFamily == 'Verdana, Geneva, sans-serif') {
			var fFam = '"Lucida Console", Monaco, monospace'
		} else {
			var fFam = "Georgia, serif"
		};
		if (all[0].style.fontSize == "12px") {
			var fSize = "14px";
			var f
		} else if (all[0].style.fontSize == "14px") {
			var fSize = "17px"
		} else if (all[0].style.fontSize == "17px") {
			var fSize = "19px"
		} else if (all[0].style.fontSize == "19px") {
			var fSize = "22px"
		} else if (all[0].style.fontSize == "22px") {
			var fSize = "25px"
		} else {
			var fSize = "12px"
		};
		for (var i = 0, max = all.length; i < max; i++) {
			if (all[i].style) {
				all[i].style.fontSize = fSize;
				all[i].style.fontFamily = fFam;
				all[i].style.lineHeight = "1.3"
			}
		};
	};
	window.deleterApp = function() {
		function onClickRemove(event1) {
			event1.stopPropagation();
			event1.preventDefault();
			if (event1.shiftKey && event1.ctrlKey) {
				if (event1.srcElement.style.position == "fixed" && event1.srcElement.style.top == "0px") {
					event1.srcElement.style.position = "";
				} else {
					console.log(event1);
					console.log(event1.srcElement);
					event1.srcElement.style.position = "fixed";
					event1.srcElement.style.right = "";
					event1.srcElement.style.bottom = "";
					event1.srcElement.style.left = "0";
					event1.srcElement.style.top = "0";
					event1.srcElement.style.zIndex = "99999";
					event1.srcElement.style.border = "thin dashed";
				}
			};
			if (event1.shiftKey && event1.altKey) {
				event1.stopPropagation();
				event1.preventDefault();
				if (event1.srcElement.style.position == "fixed" && event1.srcElement.style.bottom == "0px") {
					event1.srcElement.style.position = "";
				} else {
					console.log(event1);
					console.log(event1.srcElement);
					event1.srcElement.style.left = "";
					event1.srcElement.style.top = "";
					event1.srcElement.style.position = "fixed";
					event1.srcElement.style.right = "0";
					event1.srcElement.style.bottom = "0";
					event1.srcElement.style.border = "thin dashed";
					event1.srcElement.style.zIndex = "99999";
				}
			};
			if (event1.srcElement.parentElement && event1.ctrlKey && !event1.shiftKey) {
				console.log(event1);
				event1.stopPropagation();
				event1.preventDefault();
				console.log(event1.srcElement);
				event1.srcElement.parentElement.removeChild(event1.srcElement)
			};
			if (event1.altKey && !event1.shiftKey) {
				event1.stopPropagation();
				event1.preventDefault();
				event1.srcElement.style.width = "97%";
				event1.srcElement.style.wordWrap = "normal";
				if (event1.srcElement.parentElement) {
					event1.srcElement.parentElement.style.width = "97%";
					event1.srcElement.parentElement.style.wordWrap = "normal";
				};
				if (event1.srcElement.parentElement.parentElement) {
					event1.srcElement.parentElement.parentElement.style.width = "97%";
					event1.srcElement.parentElement.parentElement.style.wordWrap = "normal";
				}
			}
		};
		(function() {
			var all = document.getElementsByTagName("*");
			for (var i = 0, max = all.length; i < max; i++) {
				if (all[i]) {
					all[i].onclick = onClickRemove;
				};
			}
		})();
	};
	window.callMainInt = function() {
		window.readytoRun = 1;
		if (document.getElementById("curMessage")) {
			document.getElementById("curMessage").style.color = "lightgreen";
			document.getElementById("curMessage").innerText = "You can now Run " + window.currentApp + " for " + window.counterForTimer + " seconds.";
		};
		window.currentInterval = setInterval(function() {
			console.log("Main Int" + counterForTimer);
			if (window.counterForTimer >= 1) {
				window.currentMessage = "You can now Run " + window.currentApp + " for " + window.counterForTimer + " seconds.";
				if (document.getElementById("curMessage")) {
					document.getElementById("curMessage").innerText = currentMessage;
				} else {
					var newEl = document.createElement("div");
					newEl.style.position = "fixed";
					newEl.style.top = 200;
					newEl.style.left = 0;
					newEl.style.color = "lightgreen";
					newEl.style.backgroundColor = "black";
					newEl.style.fontSize = "25px";
					newEl.style.zIndex = 99999;
					newEl.id = "curMessage";
					newEl.innerText = currentMessage;
					var parEl = document.getElementsByTagName("body")[0];
					parEl.prepend(newEl);
				};
				window.counterForTimer--;
			} else {
				clearInterval(window.currentInterval);
				if (document.getElementById("curMessage")) {
					document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage"));
				};
				window.readytoRun = 0;
			}
		}, 1000);
	};
	if (window.readytoRun) {
		window.counterForTimer = 2;
		window.currentMessage = "You can now Run " + window.currentApp + " for " + window.counterForTimer + " seconds.";
		if (document.getElementById("curMessage")) {
			document.getElementById("curMessage").style.color = "lightgreen";
			document.getElementById("curMessage").innerText = currentMessage;
		};
		if (window.counterForTimer >= 1) {
			switch (window.currentApp) {
				case "colorer":
					console.log("running colorer");
					window.colorerApp();
					window.counterForTimer = 2;
					break;
				case "formater":
					console.log("running formater");
					window.formaterApp();
					window.counterForTimer = 2;
					break;
				case "googler":
					console.log("running Googler");
					window.googApp();
					window.counterForTimer = 2;
					break;
				case "iframer":
					console.log("running Iframer");
					window.iframeApp();
					window.counterForTimer = 2;
					break;
				case "googRepeater":
					console.log("running Google Repeater THIS WILL RUN EVERY 5 SECONDS and slow things down potentially but should keep the page relatively clean...refresh the page to stop this");
					window.googRepeaterApp();
					window.counterForTimer = 2;
					break;
				case "deleter":
					console.log("running Deleter");
					window.deleterApp();
					window.readytoRun = 0;
					if (window.currentInterval) {
						clearInterval(window.currentInterval);
					};
					if (document.getElementById("curMessage")) {
						document.getElementById("curMessage").innerText = "RUNNING DELETER; This message will dissapear in 5 seconds; No need to run deleter again; ctrl click to delete, alt click to expand, ctrl-shift-slick to stick top left, alt-shift-click to stick bottom right...same sticky clicks puts back in place";
					};
					setTimeout(function() {
						if (document.getElementById("curMessage")) {
							document.getElementById("curMessage").parentElement.removeChild(document.getElementById("curMessage"));
						};
					}, 5000);
					break;
				default:
					console.log("Nothing");
			}
		}
	} else {
		if (window.currentApp == "colorer") {
			window.currentApp = "formater";
		} else if (window.currentApp == "formater") {
			window.currentApp = "deleter"
		} else if (window.currentApp == "deleter") {
			window.currentApp = "googler"
		} else if (window.currentApp == "googler") {
			window.currentApp = "iframer"
		} else if (window.currentApp == "iframer") {
			window.currentApp = "googRepeater"
		} else {
			window.currentApp = "colorer";
		};
		window.counterForTimer = 1;
		window.currentMessage = "Choosing " + window.currentApp + " in exactly " + window.counterForTimer + " seconds.";
		if (document.getElementById("curMessage")) {
			document.getElementById("curMessage").style.color = "red";
			document.getElementById("curMessage").innerText = currentMessage;
		} else {
			var newEl = document.createElement("div");
			newEl.style.position = "fixed";
			newEl.style.top = 200;
			newEl.style.left = 0;
			newEl.style.color = "red";
			newEl.style.fontSize = "25px";
			newEl.style.backgroundColor = "black";
			newEl.style.zIndex = 99999;
			newEl.id = "curMessage";
			newEl.innerText = currentMessage;
			var parEl = document.getElementsByTagName("body")[0];
			parEl.prepend(newEl);
		};
		if (window.ChosenApp) {
			if (window.currentInterval) {
				clearInterval(window.currentInterval);
			};
			window.counterForTimer = 2;
			window.callMainInt();
		} else {
			window.counterForTimer = 1;
			if (window.currentInterval2) {
				clearInterval(window.currentInterval2);
			};
			window.currentInterval2 = setInterval(function() {
				console.log("Little First Int" + window.counterForTimer);
				if (window.counterForTimer >= 1) {
					window.currentMessage = "Choosing " + window.currentApp + " in exactly " + window.counterForTimer + " seconds.";
					if (document.getElementById("curMessage")) {
						document.getElementById("curMessage").style.color = "red";
						document.getElementById("curMessage").innerText = currentMessage;
					} else {
						var newEl = document.createElement("div");
						newEl.style.position = "fixed";
						newEl.style.top = 200;
						newEl.style.left = 0;
						newEl.style.color = "red";
						newEl.style.fontSize = "25px";
						newEl.style.backgroundColor = "black";
						newEl.style.zIndex = 99999;
						newEl.id = "curMessage";
						newEl.innerText = currentMessage;
						var parEl = document.getElementsByTagName("body")[0];
						parEl.prepend(newEl);
					};
					counterForTimer--;
				} else {
					clearInterval(window.currentInterval2);
					window.chosenApp = 1;
					window.readytoRun = 0;
					window.counterForTimer = 2;
					if (window.currentInterval) {
						clearInterval(window.currentInterval);
					};
					window.callMainInt();
				}
			}, 1000);
		}
	}
})();