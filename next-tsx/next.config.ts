import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. تفعيل التصدير الثابت ليعمل على GitHub Pages
  output: "export",

  // 2. ضبط المسار الأساسي (Base Path)
  // هام: استبدل '/next-project' باسم المستودع الخاص بك على GitHub بالضبط
  // إذا كان اسم المستودع next-project اتركه كما هو
  // إذا كان اسم المستودع next-tsx غيّره إلى '/next-tsx'
  basePath: "/next-project",

  // 3. تعطيل تحسين الصور (ضروري لأن GitHub Pages لا يدعم معالج صور Next.js)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;