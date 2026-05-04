import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { useEffect } from "react";
import "../styles/index.css";
import Home from "./pages/Home"
import ChatBot from "./pages/ChatBot"
import BridalParty from "./pages/BridalParty"
import Schedule from "./pages/Schedule"
import Rsvp from "./pages/Rsvp"

const queryClient = new QueryClient();

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Sonner />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rsvp" element={<Rsvp />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/bridal-party" element={<BridalParty />} />
                    <Route path="/chat-bot" element={<ChatBot />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;