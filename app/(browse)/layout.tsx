import { Navbar } from '@/components/layout/navbar'

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-[76px]">{children}</div>
    </>
  )
}

export default BrowseLayout
