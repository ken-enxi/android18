import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(185 80% 55% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 55% / 0.3) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />
    
    {/* Glow orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[hsl(260_70%_60%/0.1)] blur-[120px]" />

    <div className="container relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-sm tracking-widest text-primary mb-6 uppercase">
            AI-Powered Automation
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            <span className="gradient-text">Android 18</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
            自動画像修正 × SNS自動投稿
          </p>
          <p className="text-secondary-foreground/70 text-lg max-w-lg mb-10">
            AIが画像を自動で最適化し、複数のSNSプラットフォームへ
            ワンクリックで同時投稿。あなたの発信を、次のレベルへ。
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="gradient-primary px-8 py-4 rounded-lg font-semibold text-background text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(185_80%_55%/0.3)]">
              無料で始める
            </button>
            <button className="glass px-8 py-4 rounded-lg font-semibold text-foreground text-lg transition-all hover:border-primary/50">
              デモを見る
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glow-box rounded-2xl overflow-hidden border border-border/50">
            <img src={heroVisual} alt="Android 18 ダッシュボード" width={1280} height={800} className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
