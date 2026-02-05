 import { Button } from "@/components/ui/button";
 import { Mail, Phone, Calendar, FileText, Calculator, CheckCircle } from "lucide-react";
 import taxHeroImage from "@/assets/tax-hero-illustration.jpg";
 
 const Index = () => {
   return (
     <div className="min-h-screen bg-background">
       {/* Hero Section */}
       <section className="relative overflow-hidden">
         {/* Dark blob background */}
         <div className="absolute top-0 left-0 w-[60%] h-[80%] hero-gradient blob-shape -translate-x-1/4 -translate-y-1/4 z-0" />
         
         <div className="container relative z-10 px-6 py-12 lg:py-20">
           <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
             {/* Left Content */}
             <div className="space-y-8 animate-fade-up">
               <div className="space-y-2">
                 <p className="text-primary font-medium tracking-wide uppercase text-sm">
                   Tax Season 2025
                 </p>
                 <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight">
                   <span className="text-card-foreground lg:text-card-foreground">Nidhi</span>
                   <br />
                   <span className="text-gradient">Arora</span>
                 </h1>
               </div>
               
               <p className="text-lg text-muted-foreground max-w-md">
                 Professional income tax filing services. Get your taxes done right, on time, and stress-free.
               </p>
               
               <div className="flex flex-wrap gap-4">
                 <Button variant="hero" size="xl" asChild>
                   <a href="mailto:contact@nidhiarora.ca">
                     <Mail className="w-5 h-5" />
                     Email Now
                   </a>
                 </Button>
                 <Button variant="outline" size="xl" asChild>
                   <a href="tel:+1234567890">
                     <Phone className="w-5 h-5" />
                     Call Today
                   </a>
                 </Button>
               </div>
             </div>
             
             {/* Right Content - Services Card */}
             <div className="relative">
               <div className="bg-card rounded-2xl p-8 shadow-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                 <h3 className="text-xl font-semibold text-card-foreground mb-6">
                   Services Offered
                 </h3>
                 <ul className="space-y-4">
                   {[
                     { icon: Calculator, text: "Tax saving tips" },
                     { icon: FileText, text: "Return file review" },
                     { icon: Calendar, text: "Deadline reminders" },
                     { icon: CheckCircle, text: "Finance data prep" },
                   ].map((service, index) => (
                     <li key={index} className="flex items-center gap-4 text-card-foreground">
                       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary">
                         <service.icon className="w-4 h-4 text-secondary-foreground" />
                       </span>
                       <span className="text-lg">{service.text}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               
               {/* Floating illustration */}
               <div className="absolute -bottom-20 -right-10 w-64 h-64 animate-float hidden lg:block">
                 <img 
                   src={taxHeroImage} 
                   alt="Tax Filing Illustration" 
                   className="w-full h-full object-contain"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
       
       {/* Footer */}
       <footer className="py-8 border-t border-border">
         <div className="container px-6 text-center text-muted-foreground">
           <p>© 2025 Nidhi Arora. All rights reserved.</p>
         </div>
       </footer>
     </div>
   );
 };
 
 export default Index;