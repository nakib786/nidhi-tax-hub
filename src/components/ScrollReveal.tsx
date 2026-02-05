
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: string;
    delay?: string;
}

const ScrollReveal = ({
    children,
    className = "",
    animation = "animate-slide-up",
    delay = "0s"
}: ScrollRevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? animation : "opacity-0"}`}
            style={{ animationDelay: delay }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
