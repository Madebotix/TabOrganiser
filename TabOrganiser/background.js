// Define a uniform color for all groups
const UNIFORM_COLOR = "grey"; // Supported colors: "grey", "blue", "red", "yellow", "green", "pink", "purple", or "cyan";

function ensureNewTab() {
  chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, (tabs) => {
    const newTab = tabs.find((tab) => !tab.active && tab.url === "edge://newtab/");
    if (!newTab) {
      chrome.tabs.create({ active: false });
    } else {
      if (newTab.index !== tabs.length - 1) {
        chrome.tabs.move(newTab.id, { index: -1 });
      }
    }
  });
}

async function updateGroupNamesAndColors() {
  try {
    const groups = await chrome.tabGroups.query({});
    for (const group of groups) {
      const updates = {};
      if (group.title && !group.title.startsWith('| ')) {
        updates.title = `| ${group.title}`;
      }
      if (group.color !== UNIFORM_COLOR) {
        updates.color = UNIFORM_COLOR;
      }
      if (Object.keys(updates).length > 0) {
        await chrome.tabGroups.update(group.id, updates);
      }
    }
  } catch (error) {
    console.error('Error updating group names and colors:', error);
  }
}

chrome.tabGroups.onUpdated.addListener(async (group) => {
  const updates = {};
  if (group.title && !group.title.startsWith('| ')) {
    updates.title = `| ${group.title}`;
  }
  if (group.color !== UNIFORM_COLOR) {
    updates.color = UNIFORM_COLOR;
  }
  if (Object.keys(updates).length > 0) {
    try {
      await chrome.tabGroups.update(group.id, updates);
    } catch (error) {
      console.error('Error updating group:', error);
    }
  }
});

chrome.runtime.onStartup.addListener(() => {
  ensureNewTab();
  updateGroupNamesAndColors();
});

chrome.runtime.onInstalled.addListener(() => {
  ensureNewTab();
  updateGroupNamesAndColors();
});

chrome.alarms.create("updateTabsAndGroups", { periodInMinutes: 0.083 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "updateTabsAndGroups") {
    ensureNewTab();
    updateGroupNamesAndColors();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "organiseTabs") {
    updateGroupNamesAndColors()
      .then(() => sendResponse({ success: true }))
      .catch((error) => {
        console.error("Error organising tabs:", error);
        sendResponse({ success: false });
      });

    return true;
  }
});
