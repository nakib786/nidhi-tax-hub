
import { cn } from "@/lib/utils";
import uberLogo from "@/assets/uber.svg";
import doordashLogo from "@/assets/doordash.png";
import skipLogo from "@/assets/skip.svg";
import instacartLogo from "@/assets/instacart.svg";
import lyftLogo from "@/assets/lyft.svg";
import yellowCabLogo from "@/assets/yellowcab.png";
import amazonLogo from "@/assets/amazon.png";
import fiverrLogo from "@/assets/fiverr.svg";
import upworkLogo from "@/assets/upwork.svg";
import uberEatsLogo from "@/assets/ubereats.svg";

const companies = [
    { name: "Uber", logo: uberLogo },
    { name: "DoorDash", logo: doordashLogo },
    { name: "SkipTheDishes", logo: skipLogo },
    { name: "Instacart", logo: instacartLogo },
    { name: "Uber Eats", logo: uberEatsLogo },
    { name: "Lyft", logo: lyftLogo },
    { name: "Taxi Drivers", logo: yellowCabLogo },
    { name: "Amazon Flex", logo: amazonLogo },
    { name: "Fiverr", logo: fiverrLogo },
    { name: "Upwork", logo: upworkLogo },
];

export default function CompanyMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
            <div
                className="flex w-full items-center gap-16 overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16 [--gap:4rem] [--duration:20s]">
                    {companies.map((company, index) => (
                        <div key={company.name + index} className="flex items-center justify-center transition-transform hover:scale-110 duration-300 ml-16">
                            {company.logo ? (
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-12 w-auto object-contain max-w-[150px]"
                                />
                            ) : (
                                <span className="text-xl md:text-2xl font-bold text-white/50 hover:text-white/90 whitespace-nowrap">{company.name}</span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-16 [--gap:4rem] [--duration:20s]" aria-hidden="true">
                    {companies.map((company, index) => (
                        <div key={company.name + "-duplicate" + index} className="flex items-center justify-center transition-transform hover:scale-110 duration-300 ml-16">
                            {company.logo ? (
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-12 w-auto object-contain max-w-[150px]"
                                />
                            ) : (
                                <span className="text-xl md:text-2xl font-bold text-white/50 hover:text-white/90 whitespace-nowrap">{company.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
