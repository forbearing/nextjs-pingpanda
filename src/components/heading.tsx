import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string
}

export const Heading = ({ children, className, ...props }: props) => {
  return (
    <h1
      className={cn(
        'text-pretty font-heading text-4xl font-semibold tracking-tight text-zinc-800 sm:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
