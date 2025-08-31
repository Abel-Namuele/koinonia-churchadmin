import { Calendar, FileText, Users, Clock, TrendingUp, Heart, Star, Award } from 'lucide-react'

export function Dashboard(): React.JSX.Element {
  return (
    <div className=" min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Visão geral da sua comunidade de fé • Hoje, {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg">
            <Heart size={18} />
            <span className="font-medium">Servindo com amor</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Members Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-6 rounded-lg shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Users size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">1.247</div>
                  <div className="text-blue-100 text-sm">+12 este mês</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Membros Ativos</h3>
                <p className="text-blue-100 text-sm">Comunidade crescendo</p>
              </div>
            </div>
          </div>

          {/* Active Groups Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white p-6 rounded-lg shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Award size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">24</div>
                  <div className="text-emerald-100 text-sm">6 ministérios</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Grupos Ativos</h3>
                <p className="text-emerald-100 text-sm">Células e departamentos</p>
              </div>
            </div>
          </div>

          {/* Monthly Schedules Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white p-6 rounded-lg shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Calendar size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">18</div>
                  <div className="text-purple-100 text-sm">Dezembro 2024</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Escalas do Mês</h3>
                <p className="text-purple-100 text-sm">Cultos e eventos</p>
              </div>
            </div>
          </div>

          {/* Reports Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-6 rounded-lg shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <FileText size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-amber-100 text-sm">Este mês</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Relatórios</h3>
                <p className="text-amber-100 text-sm">Dados e análises</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Schedules */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Próximas Escalas</h2>
                  <p className="text-gray-500 text-sm">Programação dos próximos cultos</p>
                </div>
              </div>
              <div className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full font-medium">
                5 próximos eventos
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  service: 'Pregação',
                  date: 'Domingo 15/12',
                  person: 'Pr. João Silva',
                  time: '19h00',
                  type: 'culto'
                },
                {
                  service: 'Louvor',
                  date: 'Domingo 15/12',
                  person: 'Maria Santos',
                  time: '18h30',
                  type: 'musica'
                },
                {
                  service: 'Sonoplastia',
                  date: 'Domingo 15/12',
                  person: 'Pedro Oliveira',
                  time: '18h00',
                  type: 'tecnico'
                },
                {
                  service: 'Recepção',
                  date: 'Quarta 18/12',
                  person: 'Ana Costa',
                  time: '19h00',
                  type: 'apoio'
                },
                {
                  service: 'Pregação',
                  date: 'Quarta 18/12',
                  person: 'Pr. Carlos Lima',
                  time: '19h30',
                  type: 'culto'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 border border-slate-100 hover:border-blue-200"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-lg ${
                        item.type === 'culto'
                          ? 'bg-purple-100 text-purple-600'
                          : item.type === 'musica'
                            ? 'bg-green-100 text-green-600'
                            : item.type === 'tecnico'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-amber-100 text-amber-600'
                      }`}
                    >
                      {item.type === 'culto' ? (
                        <Star size={16} />
                      ) : item.type === 'musica' ? (
                        <Heart size={16} />
                      ) : item.type === 'tecnico' ? (
                        <Users size={16} />
                      ) : (
                        <Award size={16} />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{item.service}</div>
                      <div className="text-sm text-gray-500">
                        {item.date} • {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      {item.person}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Activity Summary */}
            <div className="bg-white rounded-lg shadow p-6 border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                  <TrendingUp size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Atividades Recentes</h3>
                  <p className="text-gray-500 text-sm">Últimas 24 horas</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Novos membros</span>
                  <span className="font-semibold text-green-600">+3</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Escalas criadas</span>
                  <span className="font-semibold text-blue-600">+2</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Relatórios gerados</span>
                  <span className="font-semibold text-purple-600">+1</span>
                </div>
              </div>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 text-white rounded-lg shadow p-6">
              <div className="text-center">
                <Heart size={24} className="mx-auto mb-3 text-purple-200" />
                <blockquote className="text-sm font-medium mb-3 italic">
                  Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e
                  do Filho, e do Espírito Santo
                </blockquote>
                <cite className="text-xs text-purple-200">Mateus 28:19</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
