import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-brand-500 hover:bg-brand-600 text-white shadow-[0_0_24px_rgba(255,97,0,0.42)]',
  secondary: 'bg-transparent border-2 border-brand-500 text-brand-500 hover:bg-brand-50',
  ghost:     'bg-transparent hover:underline',
  white:     'bg-white text-brand-700 hover:bg-gray-50 focus-visible:ring-white focus-visible:ring-offset-brand-500',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm font-semibold min-h-[44px]',
  md: 'px-6 py-3 text-base font-semibold min-h-[48px]',
  lg: 'px-8 py-4 text-xl font-bold min-h-[56px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
