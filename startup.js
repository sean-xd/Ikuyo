chrome.runtime.sendMessage({act: "redir", url: location.href}, function(res){location.href = res});