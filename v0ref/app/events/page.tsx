import { Search } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventCard from "@/components/EventCard"

// Mock data for events
const events = [
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
  {
    id: "food-festival",
    title: "International Food Festival",
    description:
      "Experience culinary delights from around the world with over 50 food vendors and cooking demonstrations.",
    location: "Chicago, IL",
    date: { day: "18", month: "Jul" },
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "art-exhibition",
    title: "Modern Art Exhibition",
    description: "Explore contemporary art pieces from emerging artists in this exclusive exhibition.",
    location: "Los Angeles, CA",
    date: { day: "05", month: "Aug" },
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "city-marathon",
    title: "City Marathon",
    description: "Join thousands of runners in this annual marathon through the historic streets of Boston.",
    location: "Boston, MA",
    date: { day: "20", month: "Aug" },
    image: "/placeholder.svg?height=400&width=800",
  },
]

export default function EventsPage() {
  return (
    <>
      <Header />

      <section className="page-header">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-xl opacity-90">Discover and register for events happening around you</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-4 pr-10 py-3 border border-border rounded"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                  <Search size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select className="p-3 border border-border rounded">
                  <option value="">All Categories</option>
                  <option value="technology">Technology</option>
                  <option value="music">Music</option>
                  <option value="business">Business</option>
                  <option value="food">Food & Drink</option>
                  <option value="sports">Sports</option>
                  <option value="workshops">Workshops</option>
                </select>
                <select className="p-3 border border-border rounded">
                  <option value="">Any Date</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
                <select className="p-3 border border-border rounded">
                  <option value="">Any Location</option>
                  <option value="newyork">New York</option>
                  <option value="sanfrancisco">San Francisco</option>
                  <option value="austin">Austin</option>
                  <option value="chicago">Chicago</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded bg-primary text-white font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded bg-white text-text font-medium hover:bg-background-dark"
              >
                2
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded bg-white text-text font-medium hover:bg-background-dark"
              >
                3
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded bg-white text-text font-medium hover:bg-background-dark"
              >
                4
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 rounded bg-white text-text font-medium hover:bg-background-dark"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
