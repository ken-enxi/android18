import { motion } from "framer-motion";
import { ImageIcon, Share2, Zap, BarChart3, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: ImageIcon,
    title: "AI画像自動修正",
    description: "色調補正、ノイズ除去、解像度アップをAIが自動で実行。プロ品質の画像に仕上げます。",
    color: "from-primary to-primary/70",
  },
  {
    icon: Share2,
    title: "マルチSNS同時投稿",
    description: "X、Instagram、Facebook、TikTokなど主要SNSへワンクリックで一括投稿。",
    color: "from-accent to-accent/70",
  },
  {
    icon: Zap,
    title: "リアルタイム処理",
    description: "アップロードから投稿まで数秒。高速なAIパイプラインで待ち時間ゼロ。",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: BarChart3,
    title: "投稿分析ダッシュボード",
    description: "エンゲージメント率、リーチ数、最適投稿時間をリアルタイムで分析。",
    color: "from-primary to-accent",
  },
  {
    icon: Clock,
    title: "スケジュール投稿",
    description: "最適な時間にAIが自動判定。予約投稿でリーチを最大化。",
    color: "from-accent to-primary",
  },
  {
    icon: Shield,
    title: "セキュアな管理",
    description: "エンタープライズグレードのセキュリティ。データは暗号化して安全に保管。",
    color: "from-secondary to-primary/50",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section className="py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase font-medium">Features</span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-4 mb-6 tracking-refined">
          すべてを、<span className="gradient-text">自動化</span>する
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          画像の修正からSNS投稿、分析まで。Android 18が全プロセスを自動化します。
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="bg-card rounded-2xl p-8 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 tracking-refined">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
