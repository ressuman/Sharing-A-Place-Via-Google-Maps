import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY!;
const GOOGLE_GEOCODE_API_URL = process.env.GOOGLE_GEOCODE_API_URL!;
const GOOGLE_JS_API_URL = process.env.GOOGLE_JS_API_URL!;
const GOOGLE_MAPS_API_ID = process.env.GOOGLE_MAPS_API_ID!;

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: "OK" | "ZERO_RESULTS";
};

function loadGoogleMapsApi(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if Google Maps script is already loaded
    if (
      typeof window !== "undefined" &&
      (window as any).google &&
      (window as any).google.maps
    ) {
      resolve();
      return;
    }

    // Check if the script tag is already present
    if (document.getElementById("google-maps-script")) {
      (window as any).initMap = () => {
        resolve();
      };
      return;
    }

    // Create and append the script tag
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `${GOOGLE_JS_API_URL}?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = (error) =>
      reject(new Error(`Google Maps API failed to load: ${error}`));
    document.head.appendChild(script);

    // Resolve the promise once the script is loaded and callback is called
    (window as any).initMap = () => {
      resolve();
    };
  });
}

async function initMap(coordinates: { lat: number; lng: number }) {
  // Request needed libraries
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;

  // Create the map and marker
  const map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 10,
    center: coordinates,
    mapId: "GOOGLE_MAPS_API_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: coordinates,
  });

  console.log("Google Maps API loaded and map initialized successfully.");
}

async function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = (
    document.getElementById("address")! as HTMLInputElement
  ).value.trim();
  const encodedAddress = encodeURIComponent(enteredAddress);

  try {
    const response = await axios.get<GoogleGeocodingResponse>(
      `${GOOGLE_GEOCODE_API_URL}?address=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.status !== "OK") {
      throw new Error("Could not fetch location!");
    }

    // Extract coordinates from the response
    const coordinates = response.data.results[0].geometry.location;

    // Load Google Maps API and initialize map
    await loadGoogleMapsApi();

    // Initialize the map with the obtained coordinates
    await initMap(coordinates);
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message);
      console.error("Error:", err);
    } else {
      console.error("Unexpected error:", err);
    }
  }
}

form.addEventListener("submit", searchAddressHandler);
