import { BookOpen, ClipboardList, Mic, Music } from 'lucide-react'

export function Escalas(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Escalas de Serviço</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="bg-blue-100 text-blue-800 p-4 rounded-lg hover:bg-blue-200 flex items-center gap-3">
          <BookOpen size={24} />
          Pregadores
        </button>
        <button className="bg-green-100 text-green-800 p-4 rounded-lg hover:bg-green-200 flex items-center gap-3">
          <Music size={24} />
          Louvor
        </button>
        <button className="bg-purple-100 text-purple-800 p-4 rounded-lg hover:bg-purple-200 flex items-center gap-3">
          <Mic size={24} />
          Sonoplastia
        </button>
        <button className="bg-orange-100 text-orange-800 p-4 rounded-lg hover:bg-orange-200 flex items-center gap-3">
          <ClipboardList size={24} />
          Dirigentes
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cronograma Semanal</h2>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
            <div key={day} className="font-semibold text-gray-700 py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i} className="border border-gray-200 p-2 min-h-20 text-sm">
              {i % 7 === 0 && i < 28 && (
                <div className="text-xs text-blue-600">Culto - {Math.floor(i / 7) + 1}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
