
export const openNewTab = () => {
  var newURL = "https://segmentfault.com/";
  chrome.tabs.create({ url: newURL });
}