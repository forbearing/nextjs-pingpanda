import { cn } from '@/utils'
import { MaxWidthWrapper } from './max-width-wrapper'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav
      className={cn(
        'sticky inset-x-0 top-0 z-[100]',
        'h-16 w-full border-b border-gray-200 bg-white/80',
        'backdrop-blur-lg transition-all',
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="z-40 flex font-semibold">
            Ping<span className="text-brand-700">Panda</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
