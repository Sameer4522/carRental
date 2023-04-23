import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      bookingbg: "linear-gradient(180deg,#f8f8f8 20%,#fff 80%)",
      bookingImgBg: "url('./src/assets/booking-bg.png')",
      chooseBg: "url('./src/assets/choose-section-bg.png')",
      downloadBg: "url('./src/assets/download-bg.png')",
      herosBg: "url('./src/assets/heroes-bg.png')",
      bookbannerbg: "url('./src/assets/book-banner.png')",
      contactBg: "url('./src/assets/bg-contact.png')",
    },
  },
  plugins: [],
};
