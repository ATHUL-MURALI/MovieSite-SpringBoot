import axios from "axios";

export default axios.create({
  baseURL: "https://granular-meaningfully-zofia.ngrok-free.dev",
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json"
  }
});
