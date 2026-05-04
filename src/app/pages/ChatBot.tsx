import {useState, useRef, useEffect, useCallback} from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Navigation from "../components/Navigation";

interface Message {
  id: string | number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your wedding assistant. I can help answer questions about Andrea & Jacob's wedding. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: trimmed,
      isBot: false,
      timestamp: new Date(),
    }]);

    const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string;

    setLoading(true);
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: trimmed, sessionId: `user-${Date.now()}` }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        text: data.output,
        isBot: true,
        timestamp: new Date(),
      }]);
    } catch (err) {
      console.error("Webhook Error", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSend = useCallback(async () => {
    const text = inputMessage;
    setInputMessage("");
    await sendMessage(text);
  }, [inputMessage, sendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend().catch(console.error);
  };

  const TypingBubble = () => (
      <div className="flex items-start gap-4 justify-start">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-soft to-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>

        <div className="max-w-[75%] p-4 rounded-2xl backdrop-blur-sm bg-white/20 text-foreground border border-white/10">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-current opacity-80 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-current opacity-80 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-current opacity-80 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
  );

  return (
      <>
        <Navigation />
        <div className="min-h-screen bg-[#D4C5B9] px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="max-w-4xl mx-auto h-[calc(100vh-16rem)]">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center gap-6 mb-6">
            <span className="text-xs tracking-[0.3em] text-[#1A1A1A]">
              ASK US ANYTHING
            </span>
                <div className="w-12 h-px bg-[#8B5A3C]"></div>
              </div>
              <h1 className="text-5xl md:text-6xl text-[#8B5A3C] font-light leading-none mb-4">
                Wedding Assistant
              </h1>
              <p className="text-[#1A1A1A]/70">
                Have questions about the wedding? Chat with our assistant for instant answers!
              </p>
            </div>

            {/* Chat Container */}
            <div className="bg-white/50 backdrop-blur-sm border border-[#1A1A1A]/10 flex flex-col h-[calc(100%-12rem)]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                          className={`max-w-[80%] p-4 ${
                              message.isBot
                                  ? "bg-[#1A1A1A]/5 text-[#1A1A1A]"
                                  : "bg-[#8B5A3C] text-white"
                          }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 ${message.isBot ? "text-[#1A1A1A]/40" : "text-white/60"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                ))}
                {loading && <TypingBubble />}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-[#1A1A1A]/10 p-4">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about the wedding..."
                        className="w-full bg-white border-white/20 text-foreground placeholder:text-muted-foreground backdrop-blur-sm rounded-2xl py-3 px-4 focus:bg-white focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <Button
                      onClick={handleSend}
                      disabled={loading || !inputMessage.trim()}
                      className="bg-gradient-to-br from-primary-soft to-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-primary-foreground"
                      title={"Send"}
                  >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin text-primary-foreground" />
                    ) : (
                        <Send className="w-5 h-5 text-primary-foreground" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Questions */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.2em] text-[#1A1A1A]/60 mb-3">
                QUICK QUESTIONS
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "What time is the ceremony?",
                  "Where is the venue?",
                  "What's the dress code?",
                  "View the schedule"
                ].map((question, index) => (
                    <button
                        key={index}
                        onClick={() => sendMessage(question)}
                        className="px-4 py-2 text-xs bg-white/50 border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#8B5A3C] hover:text-white hover:border-[#8B5A3C] transition-colors"
                    >
                      {question}
                    </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
