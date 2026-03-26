import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-32 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[hsl(260_70%_60%/0.05)] blur-[80px]" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
          今すぐ<span className="gradient-text">Android 18</span>を体験
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 relative z-10">
          無料プランで全機能をお試しいただけます。クレジットカード不要。
        </p>
        <button className="gradient-primary px-10 py-4 rounded-lg font-semibold text-background text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_hsl(185_80%_55%/0.3)] relative z-10">
          無料アカウントを作成
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
