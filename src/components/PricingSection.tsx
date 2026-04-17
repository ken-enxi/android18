import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "5,980",
    description: "個人クリエイター・小規模ビジネス向け",
    features: [
      "AI画像自動修正 月100枚まで",
      "SNS同時投稿（最大3アカウント）",
      "スケジュール投稿機能",
      "基本分析ダッシュボード",
      "メールサポート",
    ],
    featured: false,
    cta: "Standardを始める",
  },
  {
    name: "Premium",
    price: "9,980",
    description: "プロフェッショナル・成長企業向け",
    features: [
      "AI画像自動修正 無制限",
      "SNS同時投稿（無制限アカウント）",
      "高度なスケジュール & 自動最適化",
      "詳細分析 & カスタムレポート",
      "優先サポート（チャット・電話）",
      "チームコラボレーション機能",
    ],
    featured: true,
    cta: "Premiumを始める",
  },
];

const PricingSection = () => (
  <section className="py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase font-medium">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-4 mb-6 tracking-refined">
          シンプルな<span className="gradient-text">料金プラン</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          あなたのスタイルに合わせて選べる、2つのプラン。いつでも変更・解約可能です。
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-2xl p-10 border transition-all duration-300 hover:-translate-y-1 ${
              plan.featured
                ? "bg-card border-primary/40 shadow-2xl glow-box"
                : "bg-card border-border/50 hover:shadow-lg"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium tracking-widest px-4 py-1 rounded-full uppercase">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-serif font-semibold tracking-refined mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="mb-8 pb-8 border-b border-border/50">
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">¥</span>
                <span className="text-5xl font-serif font-semibold tracking-refined">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">/ 月（税込）</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-foreground/85 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-full font-medium text-base transition-all ${
                plan.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_8px_24px_hsl(345_35%_55%/0.25)]"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-10 tracking-wide">
        14日間の無料トライアル付き · いつでもキャンセル可能
      </p>
    </div>
  </section>
);

export default PricingSection;
