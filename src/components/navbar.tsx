import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {ModeToggle} from "@/components/modeToggle";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage alt="Chatbot Avatar" src="/logo.png" />
                </Avatar>
                <div className="text-lg font-medium">Hezarfen v0.0.1</div>
            </div>
            <div>
                <ModeToggle />
            </div>
        </header>
    );
}