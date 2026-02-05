import { Button } from "@/components/ui/button";
import { Mail, Phone, CheckCircle, ArrowRight, PieChart, FileText, Smartphone, Car } from "lucide-react";
import Logo from "@/components/Logo";
import HamburgerMenu from "@/components/HamburgerMenu";
import modernTaxHero from "@/assets/modern_tax_professional_hero_1770265688816.png";
import taxHero2 from "@/assets/modern_tax_hub_hero_1770265621249.png";
import taxHero3 from "@/assets/tax_modern_hero_1770265638766.png";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ScrollReveal from "@/components/ScrollReveal";
import CompanyMarquee from "@/components/CompanyMarquee";

const Index = () => {
  const whatsappNumber = "+17788779714";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;
  const currentYear = new Date().getFullYear();
  const taxYear = currentYear - 1;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Navigation - Tube Light Shaped with Glassmorphism */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="relative">
          {/* Tube light glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 blur-xl rounded-full"></div>

          {/* Glass morphism nav bar */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <Logo size="md" showText={true} />
              <div className="hidden md:flex items-center gap-8">
                <a href="#services" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Services</a>
                <a href="#about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">About</a>
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/30" asChild>
                  <a href={whatsappLink}>Contact Expert</a>
                </Button>
              </div>
              {/* Mobile Hamburger Menu */}
              <HamburgerMenu whatsappLink={whatsappLink} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden hero-pattern">
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                  </span>
                  Tax Season {taxYear} Live
                </div>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white">
                  Master Your <br />
                  <span className="text-gradient">Financial Taxes</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Precise filing, expert planning, and maximum returns. Let Nidhi Arora handle the complexity while you enjoy the results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-16 px-10 text-lg group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-xl shadow-blue-500/30 text-white" asChild>
                  <a href="mailto:n@aurorabusiness.ca">
                    Email Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg glass border-white/30 text-white hover:bg-white/10" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-white">{taxYear}</div>
                  <div className="text-sm text-gray-400">Tax Year</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Compliance</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-2xl font-bold text-white">Expert</div>
                  <div className="text-sm text-gray-400">Guidance</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Gallery */}
            <div className="relative perspective-1000 mt-12 lg:mt-0">
              <div className="relative z-10 animate-float">
                <div className="glass p-4 rounded-[2rem] shadow-2xl lg:rotate-y-12 transition-transform duration-700 hover:rotate-y-0 border-white/20">
                  <img
                    src={modernTaxHero}
                    alt="Tax Filing"
                    className="rounded-[1.5rem] w-full aspect-square object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 glass p-4 lg:p-6 rounded-2xl shadow-xl animate-float-delayed border-white/20">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <CheckCircle className="text-green-400 w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm lg:text-base">Expert Preparation</div>
                        <div className="text-xs lg:text-sm text-gray-400">Tax Returns Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">Expert Financial Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tailored solutions for your personal and business tax needs with a focus on accuracy and optimization.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay="0.1s" className="md:col-span-2 group">
              <div className="h-full glass p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FileText className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Tax Preparation & Filing</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">Complete preparation of personal (T1) and corporate (T2) tax returns. We ensure every deduction and credit is accounted for, maximizing your refund and minimizing liabilities.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="0.2s" className="group">
              <div className="h-full glass p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <PieChart className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Strategic Planning</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">Year-round tax strategies to help you stay ahead of the game and optimize your financial position.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Gig Worker Service - New Item */}
            <ScrollReveal delay="0.3s" className="md:col-span-3 group">
              <div className="h-full glass p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 border border-white/10 hover:border-green-500/30 hover:bg-white/10 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Car className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <div className="relative z-10 flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors">Expert in Gig Worker Taxes</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">Specialized tax filing for Uber, DoorDash, SkipTheDishes, Instacart, and taxi drivers. We maximize your expense claims (mileage, gas, vehicle maintenance) so you keep more of your hard-earned money.</p>
                </div>
                <div className="relative z-10 w-full md:w-auto bg-green-500/10 rounded-2xl p-6 text-center border border-green-400/20 group-hover:bg-green-500/20 transition-colors duration-500">
                  <div className="text-xl md:text-2xl font-bold text-green-400 mb-1 whitespace-nowrap">Optimized Returns</div>
                  <div className="text-sm font-medium text-gray-300">Guaranteed</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="0.4s" className="group">
              <div className="h-full glass p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Smartphone className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">Secure Processing</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">We utilize secure, modern workflows to handle your documents with precision, ensuring your privacy and accuracy at every step.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="0.5s" className="md:col-span-2 group">
              <div className="h-full glass p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Business Tax Advisory</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">Professional advice for entrepreneurs and small business owners on GST/HST, payroll, and corporate structure.</p>
                </div>
                <div className="relative z-10 w-full md:w-1/3 bg-blue-500/10 rounded-2xl p-6 text-center border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-500">10k+</div>
                  <div className="text-sm font-medium text-gray-300">Claims Filed</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Marquee - Moved to bottom of Services */}
      <CompanyMarquee />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="glass p-12 lg:p-20 rounded-[3rem] relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-blue-800/20 shadow-[0_0_80px_rgba(59,130,246,0.3)] border-blue-400/20">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                  Ready to secure <br /> your refund?
                </h2>
                <p className="text-gray-300 text-xl max-w-lg">
                  Don't wait until the deadline. Start your filing process today with Nidhi Arora's professional tax services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100" asChild>
                    <a href={whatsappLink}>
                      <WhatsAppIcon className="mr-2 w-5 h-5" />
                      Schedule Call
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 bg-transparent text-white border-white/50 hover:bg-white/10" asChild>
                    <a href="mailto:n@aurorabusiness.ca">Drop an Email</a>
                  </Button>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                    <WhatsAppIcon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Call/WhatsApp</div>
                    <div className="text-white text-xl font-bold">+1 778-877-9714</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email Address</div>
                    <div className="text-white text-xl font-bold">n@aurorabusiness.ca</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decorative Rings */}
            <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-white/5 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 border-[30px] border-white/5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo size="sm" showText={true} />
            <p className="text-gray-400 text-sm">© {currentYear} Nidhi Arora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;