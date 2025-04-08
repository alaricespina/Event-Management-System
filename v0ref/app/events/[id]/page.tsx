import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventCard from "@/components/EventCard"

// Mock data for event details
const eventDetails = {
  id: "tech-conference",
  title: "Tech Conference 2023",
  category: "Technology",
  date: "May 15, 2023 | 9:00 AM - 6:00 PM",
  location: "San Francisco Convention Center, CA",
  attendees: "500+ Attendees",
  image: "/placeholder.svg?height=800&width=1600",
  description: `
    <p>Join us for the biggest tech conference of the year! Tech Conference 2023 brings together industry leaders, innovators, and tech enthusiasts for a day of learning, networking, and inspiration.</p>
    <p>This year's conference will focus on emerging technologies including artificial intelligence, blockchain, and quantum computing. Whether you're a seasoned professional or just starting your tech journey, there's something for everyone.</p>
  `,
  expectations: [
    "Keynote speeches from industry leaders",
    "Interactive workshops and hands-on sessions",
    "Networking opportunities with tech professionals",
    "Product demonstrations from leading tech companies",
    "Career fair with top tech employers",
  ],
  audience:
    "This conference is perfect for software developers, IT professionals, tech entrepreneurs, students, and anyone interested in the latest technology trends.",
  price: "$299",
  priceType: "Standard Ticket",
  features: [
    "Full conference access",
    "Workshop materials",
    "Lunch and refreshments",
    "Networking reception",
    "Certificate of attendance",
  ],
  organizer: {
    name: "Tech Events Inc.",
    description: "Organizing premium tech conferences since 2010",
    image: "/placeholder.svg?height=80&width=80",
  },
  schedule: [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Registration & Breakfast",
      description: "Check-in and enjoy a complimentary breakfast while networking with fellow attendees.",
    },
    {
      time: "10:00 AM - 11:30 AM",
      title: "Opening Keynote: The Future of Technology",
      description: "Join our CEO for an inspiring talk about where technology is headed in the next decade.",
    },
    {
      time: "11:45 AM - 12:45 PM",
      title: "Breakout Sessions (Multiple Tracks)",
      description: "Choose from various specialized sessions on AI, blockchain, cloud computing, and more.",
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Lunch & Networking",
      description: "Enjoy a catered lunch while connecting with speakers and fellow attendees.",
    },
    {
      time: "2:15 PM - 4:15 PM",
      title: "Hands-on Workshops",
      description: "Participate in interactive workshops to gain practical skills in various technologies.",
    },
    {
      time: "4:30 PM - 5:30 PM",
      title: "Panel Discussion: Ethics in Technology",
      description: "Industry experts discuss the ethical implications of emerging technologies.",
    },
    {
      time: "5:30 PM - 6:00 PM",
      title: "Closing Remarks & Raffle",
      description: "Final thoughts and a chance to win exciting tech prizes.",
    },
  ],
  speakers: [
    {
      name: "John Smith",
      title: "CTO, Tech Innovations Inc.",
      bio: "John is a pioneer in AI research with over 15 years of experience in the field.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Sarah Johnson",
      title: "Blockchain Specialist, Future Chain",
      bio: "Sarah has helped numerous companies implement blockchain solutions.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Michael Chen",
      title: "Director of Engineering, CloudSphere",
      bio: "Michael leads cloud infrastructure development at one of the fastest-growing startups.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Lisa Rodriguez",
      title: "Data Science Lead, AnalyticsPro",
      bio: "Lisa specializes in big data analytics and machine learning applications.",
      image: "/placeholder.svg?height=150&width=150",
    },
  ],
  venue: {
    name: "San Francisco Convention Center",
    address: "747 Howard Street, San Francisco, CA 94103",
    map: "/placeholder.svg?height=600&width=1200",
    transit: "The venue is a 5-minute walk from Powell St. BART station.",
    parking: "Paid parking is available at the convention center garage.",
    accommodations:
      "We've partnered with nearby hotels to offer special rates for attendees. Use code TECH2023 when booking.",
  },
}

// Mock data for related events
const relatedEvents = [
  {
    id: "web-dev-workshop",
    title: "Web Development Workshop",
    description: "Learn modern web development techniques from industry experts.",
    location: "Online",
    date: { day: "28", month: "May" },
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "ai-summit",
    title: "AI Summit 2023",
    description: "Explore the latest advancements in artificial intelligence and machine learning.",
    location: "Seattle, WA",
    date: { day: "10", month: "Jun" },
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "startup-pitch",
    title: "Startup Pitch Night",
    description: "Watch innovative startups pitch their ideas to investors and win funding.",
    location: "San Francisco, CA",
    date: { day: "17", month: "Jun" },
    image: "/placeholder.svg?height=400&width=800",
  },
]

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />

      <section className="bg-primary text-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">{eventDetails.category}</div>
            <h1 className="text-4xl font-bold mb-6">{eventDetails.title}</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{eventDetails.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{eventDetails.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>{eventDetails.attendees}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden mb-8">
                <Image
                  src={eventDetails.image || "/placeholder.svg"}
                  alt={eventDetails.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <div className="mb-8 border-b border-border">
                <div className="flex overflow-x-auto">
                  <button className="tab active">Description</button>
                  <button className="tab">Schedule</button>
                  <button className="tab">Speakers</button>
                  <button className="tab">Venue</button>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">About This Event</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: eventDetails.description }} />

                <h3 className="text-xl font-semibold mt-8 mb-4">What to Expect</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {eventDetails.expectations.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Who Should Attend</h3>
                <p>{eventDetails.audience}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Get Your Tickets</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">{eventDetails.price}</span>
                  <span className="text-text-light">{eventDetails.priceType}</span>
                </div>
                <ul className="mb-6 space-y-3">
                  {eventDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 pb-3 border-b border-border last:border-0">
                      <span className="text-success">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="btn-primary btn-block mb-2">
                  Register Now
                </Link>
                <p className="text-center text-sm text-danger">Only 50 tickets left at this price</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Event Organizer</h3>
                <div className="flex items-center gap-4">
                  <Image
                    src={eventDetails.organizer.image || "/placeholder.svg"}
                    alt={eventDetails.organizer.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{eventDetails.organizer.name}</h4>
                    <p className="text-sm text-text-light mb-2">{eventDetails.organizer.description}</p>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Contact Organizer
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Share This Event</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-background-dark rounded-full text-text hover:bg-primary hover:text-white"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-background-dark rounded-full text-text hover:bg-primary hover:text-white"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-background-dark rounded-full text-text hover:bg-primary hover:text-white"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-background-dark rounded-full text-text hover:bg-primary hover:text-white"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background-dark">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10">Similar Events You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
