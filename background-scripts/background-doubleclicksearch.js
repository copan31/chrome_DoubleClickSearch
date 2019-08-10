(function () {
  chrome.runtime.onMessage.addListener((message) => {
    // search on new tab
    chrome.tabs.create({
      url: "https://www.google.com/search?q=" + message.text
    });
  });
})();
