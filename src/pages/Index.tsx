import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <div className="min-h-screen gradient-bg">
    {/* Navbar */}
    <nav className="fixed top-0 inset-x-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <span className="text-xl font-serif font-semibold tracking-refined gradient-text">Android 18</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">機能</a>
          <a href="#how" className="hover:text-primary transition-colors">使い方</a>
          <a href="#pricing" className="hover:text-primary transition-colors">料金</a>
        </div>
        <a
          href="https://frontend-production-dc8f.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          無料で始める
        </a>
      </div>
    </nav>

    <HeroSection />
    <div id="features">
      <FeaturesSection />
    </div>
    <div id="how">
      <HowItWorksSection />
    </div>
    <div id="pricing">
      <PricingSection />
    </div>
    <CTASection />

    {/* Footer */}
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-serif font-semibold tracking-refined gradient-text">Android 18</span>
        <p>© 2026 Android 18. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Index;
