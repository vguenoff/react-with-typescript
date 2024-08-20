import Header from '~/components/Header'
import { Outlet } from '@remix-run/react'
import navigation from '~/navigation'

export default function Typescript() {
  return (
    <>
      <h2 className="text-2xl">Typescript</h2>
      <Header nav={navigation.typescript} />
      <Outlet />
    </>
  )
}
