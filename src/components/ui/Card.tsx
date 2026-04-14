import { type ReactNode } from 'react'

type CardVariant = 'default' | 'flat'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  className?: string
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-brand-500 transition-all duration-200',
  flat:    'bg-white border border-[#E5E7EB]',
}

export default function Card({ children, variant = 'default', className = '' }: CardProps) {
  return (
    <div className={`rounded-xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}
