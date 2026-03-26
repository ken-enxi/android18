import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "画像をアップロード", desc: "ドラッグ&ドロップで簡単アップロード。RAW、JPEG、PNGなど幅広い形式に対応。", emoji: "📸" },
  { num: "02", title: "AIが自動修正", desc: "色調、明るさ、シャープネスをAIが自動で最適化。手動調整も可能。", emoji: "🪄" },
  { num: "03", title: "SNSへ自動投稿", desc: "修正された画像を各SNSのフォーマットに最適化して自動投稿。", emoji: "🚀" },
];

const HowItWorksSection = () => (
  <section className="py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-sm text-primary tracking-widest uppercase font-semibold">🎯 How It Works</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
          たった<span className="gradient-text">3ステップ</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-5xl mb-4 block">{step.emoji}</span>
            <span className="text-sm font-mono text-primary font-bold">STEP {step.num}</span>
            <h3 className="text-2xl font-bold mb-4 mt-2">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
