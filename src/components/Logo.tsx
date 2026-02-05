import React from "react";
import logoImage from "@/assets/logo.png";

interface LogoProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "", showText = true }) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
    };

    const textSizes = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className={`${sizeClasses[size]} relative select-none`}>
                <img
                    src={logoImage}
                    alt="Nidhi Arora Logo"
                    className="w-full h-full object-contain"
                />
            </div>

            {showText && (
                <div className="flex flex-col justify-center">
                    <span className={`${textSizes[size]} font-bold tracking-tight text-white leading-none`}>
                        Nidhi Arora
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
