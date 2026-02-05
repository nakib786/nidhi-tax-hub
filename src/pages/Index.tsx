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
         
        <div className="container relative z-10 px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] lg:min-h-[70vh]">
             {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-up text-center lg:text-left">
              <div className="space-y-1 sm:space-y-2">
                <p className="text-primary font-medium tracking-wide uppercase text-xs sm:text-sm">
                   Tax Year 2025
                 </p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight">
                   <span className="text-foreground">Nidhi</span>
                   <br />
                   <span className="text-gradient">Arora</span>
                 </h1>
               </div>
               
              <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
                 Get Your Taxes Done with Ease! Need help with your taxes? Let the experts handle it for you.
               </p>
               
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="sm:h-14 sm:px-8" asChild>
                   <a href="mailto:n@aurorabusiness.ca">
                     <Mail className="w-5 h-5" />
                     Email Now
                   </a>
                 </Button>
                <Button variant="heroOutline" size="lg" className="sm:h-14 sm:px-8" asChild>
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
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
             {[
               "Preparation and filing of personal and business tax returns",
               "Expert advice on tax-saving opportunities",
               "Assistance with tax planning and strategies",
             ].map((service, index) => (
               <div 
                 key={index} 
                className="bg-card rounded-xl p-5 sm:p-6 text-center animate-fade-up"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                   </span>
                 </div>
                <p className="text-card-foreground text-sm sm:text-base">{service}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
       
       {/* Contact Section */}
      <section className="py-10 sm:py-16 bg-card">
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center text-center md:text-left">
            <div className="mb-2 md:mb-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary">
                 Don't wait until the last minute. Schedule your appointment today!
               </h2>
             </div>
            <div className="space-y-3 sm:space-y-4">
               <h3 className="text-xl font-semibold text-card-foreground">Contact Us:</h3>
              <div className="space-y-2 sm:space-y-3 flex flex-col items-center md:items-start">
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
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="container px-4 sm:px-6 text-center text-muted-foreground text-sm sm:text-base">
           <p>© 2026 Nidhi Arora. All rights reserved.</p>
         </div>
       </footer>
     </div>
   );
 };
 
 export default Index;