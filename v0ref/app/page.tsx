import Link from "next/link"
import { Monitor, Music, Briefcase, Coffee, Activity, Calendar } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventCard from "@/components/EventCard"
import CategoryCard from "@/components/CategoryCard"
import Newsletter from "@/components/Newsletter"

// Mock data for featured events
const featuredEvents = [
  {
    id: "tech-conference",
    title: "Tech Conference 2023",
    description:
      "Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.",
    location: "San Francisco, CA",
    date: { day: "15", month: "May" },
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "music-festival",
    title: "Summer Music Festival",
    description: "Three days of amazing music performances, food, and art installations in the heart of Austin.",
    location: "Austin, TX",
    date: { day: "22", month: "Jun" },
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "business-workshop",
    title: "Entrepreneurship Workshop",
    description: "Learn from successful entrepreneurs and gain valuable insights to grow your business.",
    location: "New York, NY",
    date: { day: "10", month: "Jul" },
    image: "/placeholder.svg?height=400&width=800",
  },
]

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-primary text-white py-16 md:py-24 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Events</h1>
            <p className="text-xl mb-8 opacity-90">Find and register for the best events happening around you</p>
            <Link href="/events" className="btn-primary bg-white text-primary hover:bg-background-light">
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-10">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-dark">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-10">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <CategoryCard title="Technology" icon={Monitor} href="/events?category=technology" />
            <CategoryCard title="Music" icon={Music} href="/events?category=music" />
            <CategoryCard title="Business" icon={Briefcase} href="/events?category=business" />
            <CategoryCard title="Food & Drink" icon={Coffee} href="/events?category=food" />
            <CategoryCard title="Sports" icon={Activity} href="/events?category=sports" />
            <CategoryCard title="Workshops" icon={Calendar} href="/events?category=workshops" />
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </>
  )
}
