chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.dowenload_url){
        console.info([3,message.dowenload_url])
        chrome.downloads.download({
            url :message.dowenload_url,
            filename : message.filename,
            saveAs : false
        });
    }
});