 import { Button } from "@/components/ui/button";
 import { Mail, Phone, CheckCircle } from "lucide-react";
 import taxHeroImage from "@/assets/tax-hero-illustration.jpg";
 
 const Index = () => {
   const whatsappNumber = "+17788779714";
   const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;
   
   return (
     <div className="min-h-screen bg-background">
       {/* Hero Section */}
       <section className="relative overflow-hidden">
         {/* Decorative diagonal stripes */}
         <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden hidden lg:block">
           <div className="absolute top-0 right-0 w-full h-full bg-primary/30 transform rotate-12 translate-x-1/4 -translate-y-1/4" />
           <div className="absolute top-20 right-20 w-full h-full bg-secondary/50 transform rotate-12 translate-x-1/3" />
         </div>
         
         <div className="container relative z-10 px-6 py-12 lg:py-20">
           <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
             {/* Left Content */}
             <div className="space-y-8 animate-fade-up">
               <div className="space-y-2">
                 <p className="text-primary font-medium tracking-wide uppercase text-sm">
                   Tax Year 2025
                 </p>
                 <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight">
                   <span className="text-foreground">Nidhi</span>
                   <br />
                   <span className="text-gradient">Arora</span>
                 </h1>
               </div>
               
               <p className="text-xl text-muted-foreground max-w-md">
                 Get Your Taxes Done with Ease! Need help with your taxes? Let the experts handle it for you.
               </p>
               
               <div className="flex flex-wrap gap-4">
                 <Button variant="hero" size="xl" asChild>
                   <a href="mailto:n@aurorabusiness.ca">
                     <Mail className="w-5 h-5" />
                     Email Now
                   </a>
                 </Button>
                 <Button variant="heroOutline" size="xl" asChild>
                   <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                     <Phone className="w-5 h-5" />
                     WhatsApp
                   </a>
                 </Button>
               </div>
             </div>
             
             {/* Right Content - Illustration */}
             <div className="relative hidden lg:flex justify-center">
               <div className="w-80 h-80 animate-float">
                 <img 
                   src={taxHeroImage} 
                   alt="Tax Filing Illustration" 
                   className="w-full h-full object-contain rounded-2xl"
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
       
       {/* Services Section */}
       <section className="py-16 bg-muted/30">
         <div className="container px-6">
           <div className="grid md:grid-cols-3 gap-6">
             {[
               "Preparation and filing of personal and business tax returns",
               "Expert advice on tax-saving opportunities",
               "Assistance with tax planning and strategies",
             ].map((service, index) => (
               <div 
                 key={index} 
                 className="bg-card rounded-xl p-6 text-center animate-fade-up"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="flex justify-center mb-4">
                   <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                     <CheckCircle className="w-6 h-6 text-primary" />
                   </span>
                 </div>
                 <p className="text-card-foreground">{service}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
       
       {/* Contact Section */}
       <section className="py-16 bg-card">
         <div className="container px-6">
           <div className="grid md:grid-cols-2 gap-8 items-center">
             <div>
               <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-4">
                 Don't wait until the last minute. Schedule your appointment today!
               </h2>
             </div>
             <div className="space-y-4">
               <h3 className="text-xl font-semibold text-card-foreground">Contact Us:</h3>
               <div className="space-y-3">
                 <a 
                   href={whatsappLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors"
                 >
                   <Phone className="w-5 h-5" />
                   <span>+1 778-877-9714</span>
                 </a>
                 <a 
                   href="mailto:n@aurorabusiness.ca"
                   className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors"
                 >
                   <Mail className="w-5 h-5" />
                   <span>n@aurorabusiness.ca</span>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>
       
       {/* Footer */}
       <footer className="py-8 border-t border-border">
         <div className="container px-6 text-center text-muted-foreground">
           <p>© 2026 Nidhi Arora. All rights reserved.</p>
         </div>
       </footer>
     </div>
   );
 };
 
 export default Index;