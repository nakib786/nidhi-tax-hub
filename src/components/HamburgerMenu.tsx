import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface HamburgerMenuProps {
    whatsappLink: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ whatsappLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10 hover:text-white"
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="w-[300px] border-l border-white/10 bg-[#0f172a] p-0 shadow-2xl"
                >
                    <div className="flex flex-col h-full bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
                        <SheetHeader className="p-6 border-b border-white/10">
                            <SheetTitle className="text-left">
                                <Logo size="md" showText={true} />
                            </SheetTitle>
                        </SheetHeader>

                        <nav className="flex-1 flex flex-col p-6 gap-6">
                            <SheetClose asChild>
                                <a
                                    href="#services"
                                    className="flex items-center justify-between text-lg font-medium text-white/90 hover:text-white transition-colors group"
                                >
                                    Services
                                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </a>
                            </SheetClose>

                            <SheetClose asChild>
                                <a
                                    href="#about"
                                    className="flex items-center justify-between text-lg font-medium text-white/90 hover:text-white transition-colors group"
                                >
                                    About
                                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </a>
                            </SheetClose>

                            <hr className="border-white/10 my-2" />

                            <SheetClose asChild>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    Contact Support
                                </a>
                            </SheetClose>
                        </nav>

                        <div className="p-6 mt-auto border-t border-white/10 bg-black/20">
                            <Button
                                size="lg"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                                asChild
                            >
                                <a href={whatsappLink}>
                                    <WhatsAppIcon className="mr-2 w-5 h-5 inline-block" />
                                    Book Consultation
                                </a>
                            </Button>
                            <div className="mt-6 text-center text-xs text-gray-500">
                                <p>&copy; {new Date().getFullYear()} Nidhi Arora. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default HamburgerMenu;
