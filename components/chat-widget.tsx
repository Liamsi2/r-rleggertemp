"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getMessageText(
  parts: Array<{ type: string; text?: string }>
): string {
  return parts
    .filter(
      (p): p is { type: "text"; text: string } =>
        p.type === "text" && typeof p.text === "string"
    )
    .map((p) => p.text)
    .join("");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  // Listen for custom event from ChatbotSection CTA button
  useEffect(() => {
    const handleOpenChat = () => setOpen(true);
    window.addEventListener("open-chat-widget", handleOpenChat);
    return () => window.removeEventListener("open-chat-widget", handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl",
          open && "rotate-0"
        )}
        aria-label={open ? "Lukk chat" : "Apne chat"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[min(500px,80vh)] w-[min(400px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-primary-foreground">
                VVS-Assistenten
              </p>
              <p className="text-xs text-primary-foreground/70">
                {isLoading ? "Skriver..." : "Online"}
              </p>
            </div>
            <div
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                isLoading ? "bg-amber-400" : "bg-emerald-400"
              )}
            />
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          >
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5">
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    Hei! Jeg er VVS-Assistenten. Hvordan kan jeg hjelpe deg i
                    dag? Du kan sporre meg om tjenester, priser eller
                    tilgjengelighet.
                  </p>
                </div>
              </div>
            )}

            {messages.map((message) => {
              const text = getMessageText(message.parts);
              if (!text) return null;

              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={cn("flex gap-2.5", isUser && "flex-row-reverse")}
                >
                  <div
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      isUser ? "bg-accent/10" : "bg-primary/10"
                    )}
                  >
                    {isUser ? (
                      <User className="h-3.5 w-3.5 text-accent" />
                    ) : (
                      <Bot className="h-3.5 w-3.5 text-primary" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5",
                      isUser
                        ? "rounded-tr-sm bg-primary text-primary-foreground"
                        : "rounded-tl-sm bg-secondary text-secondary-foreground"
                    )}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === "user" && (
                <div className="flex gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-secondary px-3.5 py-2.5">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border bg-card px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv en melding..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="h-10 w-10 shrink-0 rounded-xl"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send melding</span>
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
