import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-12 sm:px-6 lg:px-10">
      <div className="w-full max-w-6xl rounded-3xl bg-slate-800/80 p-6 shadow-2xl shadow-cyan-900/50 ring-1 ring-slate-700/60 backdrop-blur sm:p-10">
        <div className="flex flex-col gap-8 md:mt-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/40 p-5 text-white shadow-xl shadow-slate-900/70 sm:p-6 md:w-2/5">
            <h5 className="text-lg font-semibold text-cyan-300">ماذا نقدم</h5>
            <ul className="space-y-2 text-base leading-relaxed text-slate-100">
              <li> تطوير المواقع الإلكترونية </li>
              <hr />
              <li>انظمة هوية واستجابة بصرية</li>
              <hr />
              <li>هندسة شاملة للمواقع</li>
              <hr />
              <li>تجارب نمو للمستقبل الرقمي</li>
              <hr />
            </ul>
          </div>

          <div className="text-white md:w-3/5 md:text-left">
            <h2 className="text-3xl font-bold leading-snug text-white drop-shadow-md sm:text-4xl lg:text-5xl">
              نبتكر تجارب رقمية جديدة <br />
              <span>
                وننصبها في{" "}
                <span className="font-extrabold text-cyan-300">العالم الرقمي</span>
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-200 sm:text-xl">
              نحول المشاريع التقليدية
              <span className="text-cyan-200"> إلى مشاريع رقمية جديدة</span>
            </p>
            <Link href="/about">
            <button  className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-xl shadow-cyan-500/40 transition duration-200 hover:scale-105 hover:shadow-blue-500/50 sm:w-auto">
              ابدأ الآن
            </button>
            </Link>
         
          </div>
        </div>
      </div>

      <div className="mt-8 grid w-full max-w-6xl gap-4 text-white md:grid-cols-3">
        {[
          { title: "مصمم واجهات", highlight: "shadow-cyan-200/40" },
          { title: "مطور React", highlight: "shadow-cyan-200/40" },
          { title: "مصمم next.js", highlight: "shadow-cyan-400/40" },
        ].map(({ title, highlight }) => (
          <div
            key={title}
            className={`rounded-xl border border-black/10 bg-sky-950 p-4 text-center shadow-lg ${highlight}`}
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-100 sm:text-base">
              نحن كمصممين واجهات أمامية نحرص على
              <br /> أحدث التقنيات في التصميم وأطر العمل
            </p>
          </div>
        ))}
        <Carousel/>
      </div>
    </main>
  )
}
