export default function Services() {
  const offerings = [
    {
      title: "تصميم مواقع باستخدام React",
      description:
        "واجهات تفاعلية وسلسة بأعلى أداء، مع مراعاة سهولة الاستخدام وتكامل تام مع واجهات برمجية حديثة.",
      badge: "React.js",
    },
    {
      title: "تطوير مواقع متكاملة بـ Next.js",
      description:
        "تجربة تصفح فائقة السرعة بفضل التوليد المسبق للصفحات، تحسين SEO، ودعم كامل للغة العربية.",
      badge: "Next.js 14",
    },
    {
      title: "تصميمات عصرية مع Tailwind CSS",
      description:
        "نظام تصميم مرن يسمح بإنتاج هويات بصرية فريدة ومتجاوبة لجميع المقاسات خلال وقت قياسي.",
      badge: "TailwindCSS",
    },
    {
      title: "واجهات إدارة المحتوى",
      description:
        "لوحات تحكم مخصصة وسهلة الاستخدام تمكنك من إدارة المحتوى والعملاء دون تعقيد.",
      badge: "Admin UI",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-10 text-center text-white shadow-2xl shadow-slate-950/60 backdrop-blur sm:px-10 lg:flex lg:flex-row lg:items-center lg:text-left">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 sm:text-sm">
            خدماتنا الرقمية
          </p>
            <h1 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
              حلول متكاملة لتصميم وتطوير مواقع حديثة
            </h1>
            <p className="mt-6 text-base text-slate-300 sm:text-lg lg:pr-12">
              نعتمد أحدث التقنيات مثل React, Next.js, و Tailwind لتقديم مواقع
              احترافية، سريعة، ومتجاوبة تدعم أهدافك التجارية وتمنح زوارك تجربة
              رقمية مميزة.
            </p>
          </div>
          <div className="mt-8 grid flex-1 grid-cols-2 gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-6 text-left text-slate-200 sm:mt-10">
            {[
              { label: "متوسط زمن التسليم", value: "3 أسابيع" },
              { label: "نسبة رضا العملاء", value: "98%" },
              { label: "مشاريع منجزة", value: "+120" },
              { label: "تقنيات معتمدة", value: "React / Next / Tailwind" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-white shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-500/70 hover:shadow-cyan-500/30"
            >
              <span className="w-fit rounded-full border border-cyan-500/40 px-4 py-1 text-sm text-cyan-300">
                {service.badge}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{service.title}</h2>
              <p className="mt-3 flex-1 text-slate-300">{service.description}</p>
              <button className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-cyan-500/30 transition hover:scale-[1.02]">
                احجز جلسة استشارية
              </button>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-white shadow-xl shadow-slate-950/40 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              لماذا تختارنا؟
            </p>
            <h3 className="mt-3 text-2xl font-bold">تسليم سريع، جودة مبهرة</h3>
            <p className="mt-3 text-slate-300">
              فريقنا يرافقك من التخطيط وحتى الإطلاق، مع تحديثات مستمرة وتوثيق
              كامل لضمان نجاح المشروع واستدامته.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {["تصميم متجاوب", "SEO جاهز", "أداء عالي", "دعم مستمر"].map(
              (pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {pill}
                </span>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}