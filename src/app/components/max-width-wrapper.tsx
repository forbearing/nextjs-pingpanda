import { cn } from '@/utils'
import { ReactNode } from 'react'

export const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return (
    <div className={cn('mx-auto h-full w-full max-w-screen-xl p-2.5 md:p-20', className)}>{children}</div>
  )
}
