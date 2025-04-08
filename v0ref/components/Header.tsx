"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="logo">
          <Link href="/" className="text-2xl font-semibold text-primary">
            EventFlow
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className={`font-medium ${pathname === "/" ? "text-primary" : "text-text hover:text-primary"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className={`font-medium ${pathname.startsWith("/events") ? "text-primary" : "text-text hover:text-primary"}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className={`font-medium ${pathname === "/register" ? "text-primary" : "text-text hover:text-primary"}`}
              >
                Register
              </Link>
            </li>
            <li>
              <Link href="#" className="btn-primary">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
