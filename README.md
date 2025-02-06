# TabOrganiser

**TabOrganiser** is a lightweight browser extension designed to simplify and automate tab management in Chromium-based browsers. It ensures a clean, efficient browsing experience by organizing tabs and groups intelligently.

---

## Features

- **Maintain Workflow Efficiency**
  - Always keeps a "New Tab" at the end of your tab list.
  - Automatically creates a "New Tab" if none exists.
  - Ensures only the "New Tab" is moved, leaving all other tabs intact.

- **Enhanced Group Management**
  - Automatically adds a `|` prefix to tab group names for consistency.
  - Assigns a uniform color to all tab groups for better visual organization.

- **Seamless Integration**
  - Fully compatible with browser's tab grouping functionality.
  - Works automatically in the background with minimal performance impact.

---

## Installation

### From Source:
1. Clone or download this repository.
2. Open your browser and navigate to the extensions page:
   - **Microsoft Edge:** `edge://extensions`
   - **Chrome:** `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing the extension files.

---

## Usage

1. Install the extension following the steps above.
2. Let the extension automatically handle tab and group organization in the background.
3. To manually trigger organization:
   - Open the popup via the extension icon.
   - Click the "Check Tabs" button to enforce the organization process immediately.

---

## Permissions

The extension requires the following permissions:
- **Tabs:** To query, create, and move tabs.
- **Tab Groups:** To query and modify tab groups.


---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Screenshots

![Tab Organiser Popup](https://via.placeholder.com/800x400?text=Screenshot+Placeholder)  
_Description of the popup interface with "Check Tabs" button._  

![Organized Tab Groups](https://via.placeholder.com/800x400?text=Screenshot+Placeholder)  
_Showing grouped tabs with consistent color and `|` prefix._
