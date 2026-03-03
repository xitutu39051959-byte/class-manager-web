const normalizeBase = (baseUrl: string): string => {
  if (!baseUrl || baseUrl === '/') return ''
  return `/${baseUrl.replace(/^\/+|\/+$/g, '')}`
}

const basePath = normalizeBase(import.meta.env.BASE_URL)

const withLeadingSlash = (path: string): string => {
  if (!path) return '/'
  return path.startsWith('/') ? path : `/${path}`
}

const stripBase = (pathname: string): string => {
  if (!basePath) return withLeadingSlash(pathname)
  if (pathname === basePath) return '/'
  if (pathname.startsWith(`${basePath}/`)) {
    return withLeadingSlash(pathname.slice(basePath.length))
  }
  return withLeadingSlash(pathname)
}

const addBase = (path: string): string => {
  const normalizedPath = withLeadingSlash(path)
  if (!basePath) return normalizedPath
  if (normalizedPath === '/') return `${basePath}/`
  return `${basePath}${normalizedPath}`
}

export type Route =
  | { name: 'workbench'; path: '/' }
  | { name: 'students'; path: '/students' }
  | { name: 'unknown'; path: string }

export function parseLocation(location: Location = window.location): Route {
  const path = stripBase(location.pathname)

  if (path === '/') return { name: 'workbench', path: '/' }
  if (path === '/students') return { name: 'students', path: '/students' }

  return { name: 'unknown', path }
}

export function navigate(path: string, replace = false): void {
  const targetPath = addBase(path)
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (currentPath === targetPath) return

  const method = replace ? 'replaceState' : 'pushState'
  window.history[method](null, '', targetPath)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function subscribe(listener: () => void): () => void {
  const handler = () => listener()
  window.addEventListener('popstate', handler)
  return () => window.removeEventListener('popstate', handler)
}
