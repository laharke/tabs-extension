document.addEventListener("wheel", (event) => {
    // Assuming the tab strip is within the first 50px from the top of the window
    const tabStripHeight = 50; 
    console.log('Chekcing MOuse eVENT works')
    // Check if the mouse is within the tab strip area
    if (event.clientY < tabStripHeight) {
      if (event.deltaY !== 0) {
        chrome.runtime.sendMessage({
          action: "switchTab",
          direction: event.deltaY > 0 ? "next" : "prev"
        });
      }
    }
  });
  