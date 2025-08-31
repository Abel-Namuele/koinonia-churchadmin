import { Calendar, FileText, Users } from 'lucide-react'

export function Settings(): React.JSX.Element {
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Configurações</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total de Membros</p>
                <p className="text-2xl font-bold">{5}</p>
              </div>
              <Users size={40} className="text-blue-200" />
            </div>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Grupos Ativos</p>
                <p className="text-2xl font-bold">{54}</p>
              </div>
              <Users size={40} className="text-green-200" />
            </div>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Escalas do Mês</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Calendar size={40} className="text-purple-200" />
            </div>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Relatórios</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <FileText size={40} className="text-orange-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
