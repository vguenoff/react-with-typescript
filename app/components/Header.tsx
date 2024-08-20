import { NavLink } from '@remix-run/react'
import styles from './Header.module.css'
import clsx from 'clsx'

const nav: Record<string, string> = {
  Home: '/',
  Test: '/test',
}

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className="text-3xl">React with TypeScript</h1>
      <div className="pb-10 mt-5">
        {Object.keys(nav).map(keyName => (
          <NavLink
            key={keyName}
            className={clsx(
              'text-blue-700 underline visited:text-purple-900',
              ({
                isActive,
                isPending,
              }: {
                isActive: boolean
                isPending: boolean
              }) => (isActive ? 'active' : isPending ? 'pending' : ''),
            )}
            to={nav[keyName]}
          >
            {keyName}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
