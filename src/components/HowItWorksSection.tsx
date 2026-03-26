import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "画像をアップロード", desc: "ドラッグ&ドロップで簡単アップロード。RAW、JPEG、PNGなど幅広い形式に対応。" },
  { num: "02", title: "AIが自動修正", desc: "色調、明るさ、シャープネスをAIが自動で最適化。手動調整も可能。" },
  { num: "03", title: "SNSへ自動投稿", desc: "修正された画像を各SNSのフォーマットに最適化して自動投稿。" },
];

const HowItWorksSection = () => (
  <section className="py-32 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-sm text-primary tracking-widest uppercase">How It Works</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
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
            className="relative text-center"
          >
            <span className="text-8xl font-bold gradient-text opacity-20 block mb-4 font-mono">{step.num}</span>
            <h3 className="text-2xl font-semibold mb-4 -mt-8 relative z-10">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-primary/30" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
