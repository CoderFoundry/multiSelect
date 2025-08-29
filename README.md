# Multi-Select Typeahead Dropdown

A simple **multi-select dropdown with typeahead search**, built using vanilla JavaScript and styled with Bootstrap and custom CSS. Users can search through a dataset of people, select multiple names at once, and manage selections with removable chips.

## Features

- Typeahead search: Fetches suggestions as you type  
- Multi-select support: Choose multiple people in one session  
- Chips UI: Selected people appear as removable chips  
- Keyboard support:
  - Arrow Up/Down to navigate
  - Enter to select
  - Backspace to remove the last chip when input is empty  
- Click-to-select suggestions  
- Bootstrap & custom styles for clean UI  
- Mock API with fetch interceptor simulates async data loading  
- Does not use the `<select>` element, ensuring consistent rendering and usability on mobile devices  

## Demo

![screenshot](docs/demo.png)  

## Getting Started

### Option 1: Run with VS Code and Live Server (recommended)

1. Clone the repo:

   ```bash
   git clone https://github.com/CoderFoundry/multiSelect.git
   cd your-repo-name

### Run with VS Code and Live Server 
- Right-click on index.html in VS Code and select “Open with Live Server”.
- This will launch the project in your browser at http://127.0.0.1:5500/ (or a similar port).
= Install the Live Server extension if you don’t already have it.

### How It Works

ms.js sets up:

- A mock fetch interceptor (/api/people) that returns matches from a dataset of 200 names.

- A debounced input handler to query and render suggestions.

- Logic for multi-select chips and dropdown navigation.

- The component keeps track of:

- selectedPeople → Array of chosen people

- filteredSuggestions → Suggestions based on current input

### Comparison Note

This project intentionally avoids using the native <select multiple> element. While <select> is fine for simple use cases, it has several limitations:

- Inconsistent rendering across mobile devices and browsers.

- Poor scalability when handling large datasets (hundreds of names).

- Lacks typeahead search or filtering out of the box.

- Provides a less intuitive user experience compared to chip-based UIs.

By implementing a custom component with JavaScript and standard HTML elements, this solution offers better cross-device consistency, searchability, and a modern UX with removable chips and keyboard shortcuts.
