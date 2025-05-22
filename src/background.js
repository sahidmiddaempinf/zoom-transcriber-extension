let onZoom = false;

chrome.runtime.onInstalled.addListener(() => {
    console.log("Zoom Transcriber Extension Installed");
});

// Listen for content.js messages (Zoom detection)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'ZOOM_MEETING_DETECTED') {
        onZoom = true;
        console.log('Zoom meeting detected by background.js');
    }
});

// Listen for popup requests (App.jsx asking if Zoom detected)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'CHECK_ZOOM_STATUS') {
        sendResponse({ onZoom });
    }
});
