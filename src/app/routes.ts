import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import BridalParty from "./pages/BridalParty";
import Rsvp from "./pages/Rsvp";
import ChatBot from "./pages/ChatBot";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "schedule", Component: Schedule },
      { path: "bridal-party", Component: BridalParty },
      { path: "chat-bot", Component: ChatBot },
      { path: "rsvp", Component: Rsvp },
    ],
  },
]);
