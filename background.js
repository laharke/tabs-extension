chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "switchTab") {
      chrome.tabs.query({currentWindow: true}, (tabs) => {
        let currentIndex = tabs.findIndex(tab => tab.active);
        let nextIndex = (currentIndex + (message.direction === "next" ? 1 : -1) + tabs.length) % tabs.length;
        chrome.tabs.update(tabs[nextIndex].id, {active: true});
      });
    }
  });
  