"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, Upload, User } from "lucide-react";

export default function StudentChatbot() {
  const [messages, setMessages] = React.useState([
    {
      role: "bot",
      content: "Hello! How can I assist you with your studies today?",
    },
  ]);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      // Here you would typically send the input to your AI backend and get a response
      // For this example, we'll just echo the input prefixed with "AI: "
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: `AI: ${input}` },
        ]);
      }, 1000);
      setInput("");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically handle the file upload to your backend
      setMessages([
        ...messages,
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
