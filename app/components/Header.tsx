import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import styles from './Header.module.css'

export default function Header({ nav }: { nav: Record }) {
  return (
    <div className={styles.header}>
      <div className="mt-5 pb-10">
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
