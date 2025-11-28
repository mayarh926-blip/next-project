export default function Contact() {
  const contacts = [
    { label: "البريد الإلكتروني", value: "mayarh926@gmail.com" },
    { label: "الهاتف", value: "+963 945973892" },
    { label: "الموقع", value: "دمشق - سورية / خدمة عالمية" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 px-8 py-10 text-center text-white shadow-2xl shadow-slate-950/60 backdrop-blur sm:px-12 lg:flex lg:items-center lg:gap-12 lg:text-left">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 sm:text-sm">
              تواصل معنا
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
              نحن هنا لدعم مشروعك الرقمي
            </h1>
            <p className="mt-6 text-base text-slate-300 sm:text-lg lg:max-w-xl">
              أرسل لنا استفسارك أو فكرتك لنضع خطة تنفيذ كاملة مع أحدث التقنيات
              مثل React، Next.js و Tailwind. فريقنا يرد عليك خلال 24 ساعة.
            </p>
          </div>
          <div className="mt-8 flex flex-1 flex-col gap-4 text-slate-200 sm:gap-6 sm:[&>div]:flex-1 lg:mt-0 lg:min-w-[320px] lg:flex-row lg:flex-wrap">
            {contacts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/30 px-6 py-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-white shadow-xl shadow-slate-950/50 lg:col-span-2">
            <h2 className="text-2xl font-semibold">كيف يمكننا مساعدتك؟</h2>
            <p className="mt-4 text-slate-300">
              اختر نوع الخدمة وحدد تفاصيل مشروعك لنساعدك في الحصول على عرض سعر
              وجداول زمنية دقيقة.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {[
                "استشارات تقنية وتخطيط المشاريع",
                "تصميم وتطوير مواقع تفاعلية",
                "تطوير لوحات تحكم وتطبيقات داخلية",
                "دعم وتحسين الأداء للمشاريع القائمة",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <form className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 text-white shadow-xl shadow-slate-950/50 lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                الاسم الكامل
                <input
                  type="text"
                  placeholder="أدخل اسمك"
                  className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                البريد الإلكتروني
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                نوع المشروع
                <select className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none">
                  <option>موقع شركة</option>
                  <option>منصة تجارة إلكترونية</option>
                  <option>لوحة تحكم / نظام داخلي</option>
                  <option>استشارة تقنية</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                الميزانية المتوقعة
                <select className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none">
                  <option>أقل من 2000$</option>
                  <option>2000$ - 5000$</option>
                  <option>5000$ - 10000$</option>
                  <option>أكثر من 10000$</option>
                </select>
              </label>
            </div>
            <label className="mt-6 flex flex-col gap-2 text-sm text-slate-200">
              وصف المشروع
              <textarea
                rows={5}
                placeholder="حدثنا عن رؤيتك، أهدافك، والجمهور المستهدف..."
                className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
            >
              أرسل رسالتك الآن
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}