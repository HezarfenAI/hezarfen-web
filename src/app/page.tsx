"use client";

import { BiSend } from "react-icons/bi";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { ModeToggle } from "@/components/modeToggle";
import { useState } from "react";
import axios from "axios";
import {sendQuesstion} from "@/server-actions/ai-actions";
import Navbar from "@/components/navbar";

const Modal = dynamic(
  () => import("@/components/alert").then((mod) => mod.Alert),
  {
    ssr: false,
    loading: () => <></>,
  }
);
 
export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [loding, setLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<any[]>([
    {
      id: 1,
      message: 'Merhaba ben Hezarfen, göndereceğiniz herhangi bir haber yazısının "Gerçek" veya "Sahte" olduğunu size bildirebilirim.',
      isBot: true,
    },
  ]);

  const ask = async () => {
    if (message.trim() === "") return;
    setMessage("");
    let response = await sendQuesstion(message);
    setHistory([
      ...history,
      { id: history.length + 2, message: message, isBot: false },
      { id: history.length + 1, message: response, isBot: true },
    ]);
  };

  return (
    <div className="flex h-full flex-col">
      <Modal />
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="flex flex-col gap-4">
          {history.map((item) => (
            <div
              key={item.id}
              className={`flex ${
                item.isBot ? "items-start" : "justify-end"
              } gap-4`}
            >
              {item.isBot && (
                <Avatar className="">
                  <AvatarImage
                    className="l"
                    alt="Chatbot Avatar"
                    src="/logo.png"
                  />
                  <AvatarFallback>HF</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] border-none bg-transparent rounded-lg border border-neutral-200 bg-${
                  item.isBot ? "white" : "neutral-100"
                } p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-${
                  item.isBot ? "neutral-900" : "neutral-900"
                }`}
              >
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t px-6 py-4">
        <div className="flex items-center gap-4">
          <Input
            onChange={(e) => setMessage(e.currentTarget.value)}
            value={message}
            className="flex-1 bg-transparent"
            placeholder="Herhangi bir soru sorun..."
          />
          <Button onClick={ask}>
            <BiSend className="w-4 h-4 mr-2" /> Gönder
          </Button>
        </div>
      </div>
    </div>
  );
}
