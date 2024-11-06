# LeetCode Fetcher
![image](https://github.com/user-attachments/assets/9af9b49b-292b-4e7c-9e16-1195ded480e5)
![image](https://github.com/user-attachments/assets/22870a52-c0fd-434c-affe-fa00203f342c)
![image](https://github.com/user-attachments/assets/b9f1650b-7403-45ed-aff6-8f4dc5aa6247)

## Problem Statement

LeetCode is a popular platform for coding interviews and competitive programming. With thousands of problems available, it can be time-consuming to navigate through them or filter out the ones that match your current goals (such as difficulty level, problem type, etc.). We aimed to create an extension that streamlines the process by allowing users to:

- Fetch LeetCode problems based on specific queries.
- Filter problems by difficulty.
- Retrieve problem details by number, such as links to solutions.
- Provide an AI-driven solution or guidance alongside the problem set.

This project is designed to simplify and accelerate problem-solving on LeetCode.

## Objective

This Chrome extension allows users to:
- **Search for problems** by title or problem number.
- **Filter problems** by difficulty level (Easy, Medium, Hard).
- **Fetch AI solutions** or hints for the selected problems.
- Display problems in an easy-to-use interface with a light yellow-black theme.
- **Download problem data** as a PDF for offline viewing.

With this tool, developers can streamline their practice and enhance their coding journey on LeetCode.

## Features

- **Search Problems**: Enter the problem title or number to retrieve the problem details and a solution link.
- **Filter by Difficulty**: Easily filter problems by difficulty level.
- **AI-Generated Solutions**: Get AI-driven solution guidance for selected problems.
- **Responsive UI**: The extension’s UI is fully responsive and adapts to various screen sizes.
- **Download PDF**: Export problem data to a PDF for offline reference.
- **Easy Navigation**: Quick access to problem information with a minimalistic design.

---

## How to Use

1. **Install the Extension**: 
   - Download the extension from the [Chrome Web Store](#link-to-your-extension).
   - Or, for manual installation, follow the steps in the "How to Install" section below.

2. **Search Problems**: 
   - Use the search bar to type the problem title or problem number.
   - The results will be displayed instantly.

3. **Filter by Difficulty**: 
   - Choose the difficulty level from the dropdown menu (Easy, Medium, Hard) to narrow down your problem search.

4. **Fetch Solutions**:
   - Enter the problem number and hit **Fetch Solution Link** to retrieve AI-driven guidance.

5. **Export Data**:
   - Download the problems and their solution details in PDF format using the "Download PDF" button.

---

## How to Make Your Own Chrome Extension

Follow these steps to create your own Chrome extension from scratch, based on the structure used in this project:

### Step 1: Set Up Your Project

1. **Create the Project Directory**:
   - Make a new folder for your project. Example: `LeetCode-Fetcher-Extension`.

2. **Create the Required Files**:
   - `manifest.json` – Contains metadata and permissions for your extension.
   - `popup.html` – The HTML file for the extension popup.
   - `popup.js` – The JavaScript for managing interactions and fetching data.
   - `style.css` – Styles to customize the appearance of the extension.

### Step 2: Write the Manifest File

The `manifest.json` file is the heart of any Chrome extension. It defines the extension's behavior, permissions, and features.

```json
{
  "manifest_version": 2,
  "name": "LeetCode Fetcher",
  "description": "Fetch LeetCode problems with filters and AI solutions",
  "version": "1.0",
  "permissions": [
    "activeTab",
    "storage"
  ],
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  },
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
