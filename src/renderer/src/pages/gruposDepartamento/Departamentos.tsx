import { Edit, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'

export function Departamentos(): React.JSX.Element {
  const [groups] = useState([
    { id: 1, name: 'Louvor', leader: 'Maria Santos', members: 12 },
    { id: 2, name: 'Ensino', leader: 'João Silva', members: 8 },
    { id: 3, name: 'Sonoplastia', leader: 'Pedro Oliveira', members: 5 }
  ])
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Grupos e Departamentos</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <Plus size={20} />
            Novo Grupo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{group.name}</h3>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Líder:</span> {group.leader}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Membros:</span> {group.members}
                </p>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
