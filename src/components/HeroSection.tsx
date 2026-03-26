import { motion } from "framer-motion";
import cakeBefore from "@/assets/cake-before.jpg";
import cakeAfter from "@/assets/cake-after.png";

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
          <div className="flex flex-col gap-6 items-center">
            {/* Before */}
            <div className="relative w-full max-w-md">
              <div className="absolute -top-3 left-4 z-10 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full border border-border">
                📷 Before
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg opacity-80">
                <img src={cakeBefore} alt="修正前のケーキ写真" className="w-full h-auto" />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <span>⬇️</span>
              <span className="text-sm font-mono tracking-wider">AI AUTO ENHANCE</span>
              <span>⬇️</span>
            </div>

            {/* After - Instagram style */}
            <div className="relative w-full max-w-md">
              <div className="absolute -top-3 left-4 z-10 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                ✨ After
              </div>
              <div className="glow-box rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-background">
                {/* Instagram Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    🎀
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">patisserie_sakura</p>
                    <p className="text-xs text-muted-foreground">東京・表参道</p>
                  </div>
                  <span className="text-muted-foreground text-lg">•••</span>
                </div>

                {/* Image */}
                <img src={cakeAfter} alt="AI修正後のケーキ写真 - Instagram投稿イメージ" className="w-full h-auto" />

                {/* Instagram Actions */}
                <div className="px-4 py-3">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xl cursor-pointer hover:scale-110 transition-transform">❤️</span>
                    <span className="text-xl cursor-pointer hover:scale-110 transition-transform">💬</span>
                    <span className="text-xl cursor-pointer hover:scale-110 transition-transform">📤</span>
                    <span className="ml-auto text-xl cursor-pointer hover:scale-110 transition-transform">🔖</span>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">1,284 いいね</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-bold">patisserie_sakura</span>{" "}
                    🎄✨ メリークリスマス！今年も心を込めて作りました🍰
                    ふわふわスポンジに甘さ控えめの生クリーム、
                    新鮮ないちごをたっぷり🍓
                    大切な人と過ごす特別な時間のお供に…🎅🌟
                  </p>
                  <p className="text-xs text-primary mt-2">
                    #クリスマスケーキ #手作りケーキ #いちごショートケーキ #パティスリー #おうちカフェ #スイーツ好き
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
