import { Navbar } from '@/components/navbar'
import { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
