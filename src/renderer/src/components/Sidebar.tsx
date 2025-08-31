/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Users, FileText, Calendar, Settings, Home, Printer, Church } from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  onToggle: (collapsed: boolean) => void
}

export function Sidebar({ collapsed }: SidebarProps): React.JSX.Element {
  const location = useLocation()

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/membros', name: 'Membros', icon: Users },
    { path: '/departamentos', name: 'Departamentos', icon: Users },
    { path: '/escalas', name: 'Escalas', icon: Calendar },
    { path: '/reports', name: 'Relatórios', icon: FileText },
    { path: '/letters', name: 'Cartas', icon: Printer },
    { path: '/settings', name: 'Configurações', icon: Settings }
  ]

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="flex h-screen bg-white sticky top-0">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-slate-50 to-white shadow-xl transition-all duration-300 border-r border-slate-200 ${
          collapsed ? 'w-20' : 'w-72'
        }`}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative p-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center space-x-3">
                {!collapsed && (
                  <>
                    <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Church size={20} className="text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Koinonia
                      </h1>
                      <p className="text-blue-100 text-sm font-light">Admin Church</p>
                    </div>
                  </>
                )}
                {collapsed && (
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Church size={20} className="text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = isActiveRoute(item.path)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-200'
                      : 'text-gray-600 hover:bg-slate-50 hover:text-gray-900'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-500 group-hover:bg-gray-100 group-hover:text-gray-700'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  {!collapsed && (
                    <div className="ml-3 flex-1 text-left">
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                  )}

                  {!collapsed && isActive && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
