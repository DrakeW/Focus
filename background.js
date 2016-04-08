var count = 1;
var reg = /www.youtube.com\/watch\?*/;

chrome.browserAction.onClicked.addListener(function(tab) {
    if (reg.test(tab.url)) {
        if (count % 2 != 0) {
        console.log('trigger focus mode');
            chrome.tabs.executeScript({
                file: 'focus_mode.js'
            });
            count += 1;
        }else {
            console.log('trigger focus mode');
                chrome.tabs.executeScript({
                    file: 'reverse.js'
                });
            count += 1
        }
    }
}) 
