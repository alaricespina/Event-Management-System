import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface CategoryCardProps {
  title: string
  icon: LucideIcon
  href: string
}

export default function CategoryCard({ title, icon: Icon, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg p-8 text-center shadow transition-all hover:-translate-y-1 hover:shadow-md hover:text-primary"
    >
      <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-primary-light/20 text-primary rounded-full">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </Link>
  )
}
