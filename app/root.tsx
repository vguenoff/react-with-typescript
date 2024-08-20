import './global.css'
import './tailwind.css'
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Header from '~/components/Header'
import navigation from '~/navigation'

export const meta: MetaFunction = () => {
  return [
    { title: 'React with TypeScript' },
    { name: 'description', content: 'React with TypeScript' },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="p-4">
          <h1 className="text-3xl">React with TypeScript</h1>
          <Header nav={navigation.main} />
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
