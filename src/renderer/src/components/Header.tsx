import React from 'react'
import { Bell, Sun, ChevronDown, User, Menu } from 'lucide-react'

interface HeaderProps {
  onToggleSidebar: () => void
}

export function Header({ onToggleSidebar }: HeaderProps): React.JSX.Element {
  return (
    <div className="bg-white border-b border-slate-200 h-16 px-6 shadow-sm">
      <div className="flex items-center justify-between h-full">
        {/* Left Side - Greeting */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Menu size={20} className="text-slate-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Painel Administrativo</h1>
            <p className="text-sm text-gray-500">Bem-vindo de volta, que Deus abençoe seu dia!</p>
          </div>
        </div>

        {/* Right Side - Actions & Profile */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="relative group">
            <button className="p-2 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 rounded-xl transition-all duration-200 border border-slate-200 hover:border-slate-300 hover:shadow-sm">
              <Sun size={18} className="text-slate-600" />
            </button>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Alternar tema
            </div>
          </div>

          {/* Notifications */}
          <div className="relative group">
            <button className="relative p-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all duration-200 border border-blue-200 hover:border-blue-300 hover:shadow-sm">
              <Bell size={18} className="text-blue-600" />
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
            </button>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              3 notificações
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-slate-200"></div>

          {/* User Profile */}
          <div className="flex items-center gap-3 group cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="text-right">
              <span className="font-semibold text-gray-800 text-sm block">Abel Namuele</span>
              <span className="text-xs text-gray-500">Pastor Presidente</span>
            </div>

            {/* Avatar */}
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                <User size={18} className="text-white" />
              </div>
              {/* Online Status */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            <ChevronDown
              size={16}
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
