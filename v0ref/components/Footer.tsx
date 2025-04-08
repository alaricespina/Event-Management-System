import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-text text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">EventFlow</h2>
            <p className="text-white/70">Your go-to platform for discovering and managing events.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white/70 hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-white/70 hover:text-white">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/events?category=technology" className="text-white/70 hover:text-white">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/events?category=music" className="text-white/70 hover:text-white">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/events?category=business" className="text-white/70 hover:text-white">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/events?category=sports" className="text-white/70 hover:text-white">
                    Sports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@eventflow.com" className="text-white/70 hover:text-white">
                    info@eventflow.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-white/70 hover:text-white">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} EventFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
