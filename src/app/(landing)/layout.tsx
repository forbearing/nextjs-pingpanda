import { ReactNode } from 'react'
import { Navbar } from '../components/navbar'

export default ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
