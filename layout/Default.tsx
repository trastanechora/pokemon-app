import React from 'react'
import { useRouter } from 'next/router'

interface ILayoutProps {
  headerTitle?: string
  children?: React.ReactNode
}

const DefaultLayout: React.FC<ILayoutProps> = ({
  children
}) => {
  const router = useRouter()

  const back = () => {
    router.back();
  }

  return (
    <div>
        <main>
          {children}
        </main>
    </div>
  )
}

export default DefaultLayout
