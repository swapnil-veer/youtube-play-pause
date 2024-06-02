// background.js
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes("youtube.com/watch")) {
            chrome.tabs.sendMessage(activeInfo.tabId, { action: "checkStatus" });
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("youtube.com/watch")) {
        chrome.tabs.sendMessage(tabId, { action: "checkStatus" });
    }
});
