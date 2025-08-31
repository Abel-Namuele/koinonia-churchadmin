export function Login(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white w-full max-w-6xl mx-4 rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Brand */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center p-8 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute top-32 right-16 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-40 right-10 w-8 h-8 border border-white/20 rounded-full"></div>
            </div>

            <div className="text-center z-10">
              <div className="mb-4">
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Koinonia
                </h1>
                <div className="flex items-center justify-center mt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
                  <h2 className="text-lg lg:text-xl font-light mx-4 text-blue-100">Admin</h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
                </div>
              </div>
              <p className="text-blue-100 text-lg font-light max-w-sm">
                Gerencie sua plataforma com simplicidade e segurança
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Log In</h1>
              <p className="text-gray-500 text-lg">
                Faça login para acessar o painel administrativo
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                  Email ou Nome de usuário
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-transparent focus:bg-white placeholder-gray-400 focus:outline-0"
                    placeholder="Digite seu email ou nome de usuário"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                  Senha de acesso
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-transparent focus:bg-white placeholder-gray-400 focus:outline-0"
                    placeholder="Digite sua senha segura"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-600">Lembrar de mim</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Esqueceu a senha?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-4 focus:ring-blue-500/25"
              >
                Fazer Login
              </button>

              <div className="text-center pt-4">
                <p className="text-gray-500">
                  Não tem uma conta?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Entre em contato
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
