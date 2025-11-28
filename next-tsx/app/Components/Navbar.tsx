import Link from "next/link";

const Navbar = () => {
  return (
<div>
    <nav className="flex justify-between items-center p-4 bg-cyan-800 text-white">
        <div className="text-2xl font-bold">MAYAR</div>
        <div className="flex gap-5 ">
            <ul className="flex gap-6">
            <li><Link href="/">home</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/services">services</Link></li>
            <li><Link href="/contact">contact</Link></li>
            </ul></div>
    </nav>
</div>
  )
}

export default Navbar