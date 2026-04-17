import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="gradient-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-[80px]" />
        
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 relative z-10 text-primary-foreground tracking-refined">
          今すぐ Android 18 を体験
        </h2>
        <p className="text-primary-foreground/85 text-lg max-w-xl mx-auto mb-10 relative z-10 leading-relaxed">
          無料プランで全機能をお試しいただけます。クレジットカード不要。
        </p>
        <button className="bg-primary-foreground text-primary px-10 py-4 rounded-full font-medium text-base transition-all hover:shadow-lg relative z-10">
          無料アカウントを作成
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
