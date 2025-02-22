import { BiSend } from "react-icons/bi";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { ModeToggle } from "@/components/modeToggle";

const Modal = dynamic(
  () => import("@/components/alert").then((mod) => mod.Alert),
  {
    ssr: false,
    loading: () => <></>,
  }
);

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <Modal />
      <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt="Chatbot Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>HF</AvatarFallback>
          </Avatar>
          <div className="text-lg font-medium">Hezarfen v0.0.1</div>
        </div>
        <div>
          <ModeToggle />
        </div>
      </header>
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage alt="Chatbot Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>HF</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg border border-neutral-200 bg-white p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <p>Merhaba size bu gün nasıl yardımcı olabilirim?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[75%] rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <p>Merhaba, senin hakkında bilgi alabilirmiyim?</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage alt="Chatbot Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>HF</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg border border-neutral-200 bg-white p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <p>
                Elbette! Ben Teknofest 2025 için geliştirilen, Türkçe Doğal Dil
                işleme kategorisi için hazırlanmış bir Chatbotum
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[75%] rounded-lg border border-neutral-200 bg-neutral-100 p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <p>Peki neler yapabileceksin gelecekte?</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage alt="Chatbot Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>HF</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg border border-neutral-200 bg-white p-4 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <p>Onu beni yapanlar belirleyecek...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex items-center gap-4">
          <Input className="flex-1" placeholder="Herhangi bir soru sorun..." />
          <Button>
            <BiSend className="w-4 h-4 mr-2" /> Gönder
          </Button>
        </div>
      </div>
    </div>
  );
}
