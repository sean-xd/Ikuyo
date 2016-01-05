function redir(url){
    return url.replace(
        "bing.com/search?",
        "google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&");
}

chrome.webRequest.onBeforeRequest.addListener(function(details){
    return {redirectUrl: redir(details.url)};
}, {urls: ["*://www.bing.com/search*"]}, ["blocking"]);

chrome.runtime.onMessage.addListener(function(req, sender, cb){
    if(req.action === "redir") cb(redir(req.url));
    return true;
});