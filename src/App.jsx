import { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [isZoomMeeting, setIsZoomMeeting] = useState(false);

  useEffect(() => {
    const checkZoomStatus = () => {
      // Get response from background.js
      chrome.runtime.sendMessage({ type: 'CHECK_ZOOM_STATUS' }, (response) => {
        if (response?.onZoom) {
          console.log("Zoom meeting detected!");
          setIsZoomMeeting(true);
        } else {
          console.log("Not on Zoom");
          setIsZoomMeeting(false);
        }
      });
    }

    checkZoomStatus(); // Run once immediately
    const interval = setInterval(checkZoomStatus, 3000); // Check every 3 second

    return () => clearInterval(interval); // Clean up on close

  }, []);

  return (
    <div style={{ padding: '16px', fontFamily: 'Arial' }}>
      <h3>Zoom Transcriber Extension</h3>
      {isZoomMeeting ? (
        <p style={{ color: 'green' }}>✅ Zoom Meeting Detected!</p>
      ) : (
        <p>🔍 No Zoom Meeting detected yet.</p>
      )}
    </div>
  );
}

export default App;