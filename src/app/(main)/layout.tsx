import { Content } from '@/components/Content'

import { Footer } from './_components/Footer'
import { Header } from './_components/Header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="fixed z-40 h-16 w-full bg-primary text-white">
        <Content>
          <Header />
        </Content>
      </div>
      <div className="mt-16 flex flex-1 flex-col items-center">{children}</div>
      <div className="bg-slate-100 text-primary">
        <Content>
          <Footer />
        </Content>
      </div>
    </main>
  )
}

export default MainLayout
