import type { ReactNode } from 'react'

type AppShellProps = {
  currentPath: '/' | '/students'
  onNavigate: (path: '/' | '/students') => void
  children: ReactNode
}

const navItems: Array<{ label: string; path: '/' | '/students' }> = [
  { label: 'Workbench', path: '/' },
  { label: 'Students', path: '/students' },
]

function AppShell({ currentPath, onNavigate, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Class Manager</h1>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.path}
              className={currentPath === item.path ? 'nav-item active' : 'nav-item'}
              onClick={() => onNavigate(item.path)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">{children}</main>
    </div>
  )
}

export default AppShell
