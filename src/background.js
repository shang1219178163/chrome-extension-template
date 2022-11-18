
	// 当点击扩展图标时，执行...
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({
		url: chrome.extension.getURL("newtab/index.html")
	}, function(tab) {})
});


let openerTabId = 0;
// 当点击扩展图标时，执行...
chrome.browserAction.onClicked.addListener(function (tab) {
	if (openerTabId > 0) {
		chrome.tabs.get(openerTabId, function(t) {
			if (t) {
				chrome.windows.update(t.windowId, {focused: true}); // 更新窗口
				chrome.tabs.update(openerTabId, {active: true});  // 更新tab
			} else {
				chrome.tabs.create({
          url: chrome.extension.getURL("newtab/index.html")
				}, function(tab) {
					openerTabId = tab.id;
				})
			}
		});
	} else {
		chrome.tabs.create({
      url: chrome.extension.getURL("newtab/index.html")
		}, function (t) {
			openerTabId = t.id;
		});
	}
});