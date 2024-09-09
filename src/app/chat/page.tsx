"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, Upload, User } from "lucide-react";

export default function StudentChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm your AI study assistant. How can I help you with your studies today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const predefinedResponses = {
    math: "Math is a great subject! What specific topic would you like help with?",
    science:
      "Science helps us understand the world around us. What do you need assistance with?",
    history:
      "History teaches us about the past. What period or event are you studying?",
    default:
      "I’m not sure about that. Could you please ask a different question related to your studies?",
  };

  const handleSend = async () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: input }]);
      setIsLoading(true);

      // Hardcoded response based on keywords
      const lowercaseInput = input.toLowerCase();
      let aiResponse = predefinedResponses.default;

      if (lowercaseInput.includes("math")) {
        aiResponse = predefinedResponses.math;
      } else if (lowercaseInput.includes("science")) {
        aiResponse = predefinedResponses.science;
      } else if (lowercaseInput.includes("history")) {
        aiResponse = predefinedResponses.history;
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", content: aiResponse }]);
        setIsLoading(false);
        setInput("");
      }, 1000); // Simulate loading time
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: `Uploaded file: ${file.name}` },
      ]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <div className="flex flex-col h-[600px]">
          <div className="p-4 bg-primary text-primary-foreground flex items-center space-x-2">
            <Bot className="w-6 h-6" />
            <h2 className="text-xl font-bold">Student AI Assistant</h2>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 inline-block mr-2" />
                  ) : (
                    <Bot className="w-4 h-4 inline-block mr-2" />
                  )}
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <Bot className="w-4 h-4 inline-block mr-2" />
                  Thinking...
                </div>
              </div>
            )}
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="flex gap-2 mb-2">
              <Input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileUpload}
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground cursor-pointer"
              >
                <div className="flex items-center justify-center w-full h-full aspect-square">
                  <Upload className="w-5 h-5 !aspect-square min-h-5 min-w-5" />
                </div>
              </label>
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow rounded-full"
              />
              <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer">
                <Button
                  onClick={handleSend}
                  size="icon"
                  variant="ghost"
                  className="rounded-full"
                  disabled={isLoading}
                >
                  <Send className="w-5 h-5 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
