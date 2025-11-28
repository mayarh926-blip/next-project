import Image from "next/image";
import Link from "next/link";



export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-12">
      <section className="w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-gray-900/30 backdrop-blur">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          نحن مجموعة من المطورين المحترفين مجموهة هايدرا لتصميم المواقع باحدث الطرق
        </h1>
        <p className="mt-4 text-center text-base text-sky-400 sm:text-lg">
          غايتنا رضا العميل من حيث توفير احدث التقنيات في التصميم
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Link href="/contact" className="flex-1 sm:flex-none">
            <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-xl shadow-cyan-500/40 transition duration-200 hover:scale-105 hover:shadow-blue-500/50">
              ! سجل الان
            </button>
          </Link>
          <Link href="/services" className="flex-1 sm:flex-none">
            <button className="w-full rounded-full border border-cyan-400 px-8 py-3 text-lg font-semibold text-cyan-100 shadow-xl shadow-cyan-500/20 transition duration-200 hover:scale-105 hover:shadow-blue-500/40">
              عرض الخدمات
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-10 flex w-full max-w-5xl flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-gray-900/30 backdrop-blur lg:flex-row lg:items-stretch">
        <div className="relative min-h-[220px] w-full overflow-hidden rounded-xl bg-slate-800 lg:w-1/2">
          <Image
            src="/images/company.jpg"
            alt="صورة الشركة"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3 text-center text-white sm:text-lg lg:text-left lg:text-xl">
          <h2>تأسست شركة هايدرا عام 2010</h2>
          <h2>ثم انطلقت من دمشق لتخدم عملاء حول العالم</h2>
          <h2>ونفذنا أكثر من خمسمائة مشروع رقمي ناجح</h2>
          <h2>حصلنا على جائزة أفضل تصميم إبداعي حديث</h2>
        </div>
      </section>
    </main>
  );
}