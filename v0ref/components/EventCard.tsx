import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

interface EventCardProps {
  id: string
  title: string
  description: string
  location: string
  date: {
    day: string
    month: string
  }
  image: string
}

export default function EventCard({ id, title, description, location, date, image }: EventCardProps) {
  return (
    <div className="event-card">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-[200px] object-cover"
        />
        <div className="event-date">
          <span className="day">{date.day}</span>
          <span className="month">{date.month}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="flex items-center gap-2 text-text-light text-sm mb-4">
          <MapPin size={16} />
          {location}
        </p>
        <p className="text-text-light mb-6">{description}</p>
        <Link href={`/events/${id}`} className="btn-secondary">
          View Details
        </Link>
      </div>
    </div>
  )
}
