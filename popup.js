function scrollPage(up) {
    const scrollAmount = up ? -window.innerHeight * 0.9 : window.innerHeight * 0.9;
  
    const reelsContainer = document.querySelector('div[role="dialog"] div[style*="transform: translateY"]');
  
    if (reelsContainer) {
      // Instagram Reels modal scroll
      reelsContainer.style.transform = `translateY(${parseFloat(reelsContainer.style.transform.split(',')[1]) + scrollAmount}px)`;
    } else {
      // Regular page scroll
      window.scrollBy(0, scrollAmount);
    }
  }
  
  document.querySelector("#up img").addEventListener("click", () => {
    chrome.tabs.executeScript({
      code: '(' + scrollPage.toString() + ')(true);',
    });
  });
  
  document.querySelector("#down img").addEventListener("click", () => {
    chrome.tabs.executeScript({
      code: '(' + scrollPage.toString() + ')(false);',
    });
  });
  