import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Soft pastel blobs */}
    <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-primary/15 blur-[100px]" />
    <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/15 blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px]" />

    <div className="container relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono text-sm tracking-widest text-primary mb-6 uppercase font-semibold">
            ✨ AI-Powered Automation
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
            <span className="gradient-text">Android 18</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 font-bold">
            自動画像修正 × SNS自動投稿
          </p>
          <p className="text-muted-foreground text-lg max-w-lg mb-10">
            AIが画像を自動で最適化し、複数のSNSプラットフォームへ
            ワンクリックで同時投稿。あなたの発信を、次のレベルへ。
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="gradient-primary px-8 py-4 rounded-full font-bold text-primary-foreground text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(330_70%_65%/0.3)]">
              🎀 無料で始める
            </button>
            <button className="glass px-8 py-4 rounded-full font-bold text-foreground text-lg transition-all hover:border-primary/50">
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
          <div className="glow-box rounded-3xl overflow-hidden border-2 border-primary/20">
            <img src={heroVisual} alt="ケーキ写真のビフォーアフター - AI画像修正" width={1280} height={800} className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
