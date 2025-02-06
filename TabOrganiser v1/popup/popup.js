document.addEventListener("DOMContentLoaded", () => {
  const checkTabsButton = document.getElementById("checkTabs");

  checkTabsButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "organiseTabs" }, (response) => {
      if (chrome.runtime.lastError) {
        alert(`Error: ${chrome.runtime.lastError.message}`);
        return;
      }

      if (response && response.success) {
        alert("Tabs and groups organised successfully!");
      } else {
        alert("Failed to organise tabs and groups.");
      }
    });
  });
});
