# Sharing a Place via Google Maps

This project is a web application that allows users to enter an address and see the corresponding location on a Google Map. The application is built using TypeScript, Axios, and the Google Maps API.

## Table of Contents

- [Sharing a Place via Google Maps](#sharing-a-place-via-google-maps)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Environment Variables](#environment-variables)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Build](#build)
    - [Development](#development)
  - [Usage](#usage)
    - [Project Structure](#project-structure)
    - [Key Features](#key-features)
  - [License](#license)
    - [Here is an expected gif of the final project](#here-is-an-expected-gif-of-the-final-project)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```
GOOGLE_API_KEY=your-google-api-key
GOOGLE_GEOCODE_API_URL=https://maps.googleapis.com/maps/api/geocode/json
GOOGLE_JS_API_URL=https://maps.googleapis.com/maps/api/js
GOOGLE_MAPS_ID=your-google-maps-id
```

Replace `your-google-api-key` with your actual Google API key.
Replace `your-google-maps-id` with your actual Google Map id.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sharing-a-place-via-google-maps.git
   cd sharing-a-place-via-google-maps
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Build

To build the project, run:

```bash
npm run build
```

### Development

To start the development server, run:

```bash
npm start
```

This will start the server and open the application in your default browser.

## Usage

1. Open the application in your web browser.
2. Enter an address in the input field.
3. Click the "SEARCH ADDRESS" button.
4. The corresponding location will be displayed on the Google Map.

### Project Structure

- `index.html`: The main HTML file that includes the form for entering addresses and the map container.
- `app.ts`: The main TypeScript file that handles form submission, sends requests to the Google Geocoding API, and initializes the Google Map.
- `app.css`: The CSS file for styling the application.

### Key Features

- **Address Search**: Users can enter an address to search for its corresponding location on the map.
- **Map Display**: The application displays the location on a Google Map, complete with a marker.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Here is an expected gif of the final project

![Sharing A Place Via Google Maps API gif](./src/images/drag-and-drop.gif)
.
