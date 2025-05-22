console.log(window.location.href);
if (window.location.href.includes("zoom.us/wc")) {
    console.log('URL includes zoom.us/wc');
    console.log('Sending a Zoom Meeting detected message....');
    chrome.runtime.sendMessage({ type: "ZOOM_MEETING_DETECTED" });
}