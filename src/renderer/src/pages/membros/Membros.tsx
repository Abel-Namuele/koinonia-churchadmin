/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Edit,
  PlusCircle,
  Search,
  Trash2,
  Users,
  Phone,
  UserCheck,
  Filter,
  Calendar,
  Mail,
  Camera,
  Save,
  ArrowLeft,
  Heart
} from 'lucide-react'
import { useState } from 'react'

// Lista de Membros Component
export function Membros() {
  const [members] = useState([
    {
      id: 1,
      name: 'João Silva',
      phone: '(11) 99999-9999',
      email: 'joao.silva@email.com',
      role: 'Diácono',
      group: 'Ministério de Louvor',
      status: 'Ativo',
      joinDate: '2022-03-15',
      address: 'São Paulo, SP'
    },
    {
      id: 2,
      name: 'Maria Santos',
      phone: '(11) 88888-8888',
      email: 'maria.santos@email.com',
      role: 'Líder de Célula',
      group: 'Ministério de Ensino',
      status: 'Ativo',
      joinDate: '2021-08-22',
      address: 'São Paulo, SP'
    },
    {
      id: 3,
      name: 'Pedro Oliveira',
      phone: '(11) 77777-7777',
      email: 'pedro.oliveira@email.com',
      role: 'Pastor Auxiliar',
      group: 'Ministério de Pregação',
      status: 'Ativo',
      joinDate: '2020-01-10',
      address: 'São Paulo, SP'
    },
    {
      id: 4,
      name: 'Ana Costa',
      phone: '(11) 66666-6666',
      email: 'ana.costa@email.com',
      role: 'Membro',
      group: 'Ministério de Recepção',
      status: 'Inativo',
      joinDate: '2023-06-18',
      address: 'São Paulo, SP'
    }
  ])

  const [currentView, setCurrentView] = useState('list') // 'list' or 'register'
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    return status === 'Ativo'
      ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
      : 'bg-amber-100 text-amber-800 border-amber-200'
  }

  const getRoleColor = (role) => {
    switch (role) {
      case 'Pastor Auxiliar':
        return 'bg-purple-100 text-purple-800'
      case 'Diácono':
        return 'bg-blue-100 text-blue-800'
      case 'Líder de Célula':
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (currentView === 'register') {
    return <MembrosRegister onBack={() => setCurrentView('list')} />
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded shadow-lg">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Membros da Igreja
              </h1>
              <p className="text-gray-600 mt-1">Gerencie sua comunidade de fé com amor e cuidado</p>
            </div>
          </div>

          <button
            onClick={() => setCurrentView('register')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded flex items-center gap-2 shadow-lg hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <PlusCircle size={20} />
            <span className="font-semibold">Novo Membro</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded p-4 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total de Membros</p>
                <p className="text-2xl font-bold text-gray-800">{members.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users size={20} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-4 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Membros Ativos</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {members.filter((m) => m.status === 'Ativo').length}
                </p>
              </div>
              <div className="p-2 bg-emerald-100 rounded-lg">
                <UserCheck size={20} className="text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-4 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Líderes</p>
                <p className="text-2xl font-bold text-purple-600">
                  {
                    members.filter((m) => m.role.includes('Líder') || m.role.includes('Pastor'))
                      .length
                  }
                </p>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Heart size={20} className="text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-4 shadow-md border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Ministérios</p>
                <p className="text-2xl font-bold text-indigo-600">
                  {new Set(members.map((m) => m.group)).size}
                </p>
              </div>
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Filter size={20} className="text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded shadow p-6 border border-slate-100">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Buscar por nome, função ou ministério..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 border border-gray-200 rounded w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
              />
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 rounded font-medium text-gray-700 transition-all duration-200 flex items-center gap-2">
              <Filter size={18} />
              Filtros
            </button>
          </div>

          {/* Members Table */}
          <div className="overflow-hidden rounded border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Membro</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Contato</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Função</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Ministério</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredMembers.map((member, index) => (
                    <tr
                      key={member.id}
                      className={`hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {member.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                              .slice(0, 2)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{member.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar size={12} />
                              Membro desde {new Date(member.joinDate).toLocaleDateString('pt-BR')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone size={14} />
                            {member.phone}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail size={14} />
                            {member.email}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(member.role)}`}
                        >
                          {member.role}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-medium text-gray-800">{member.group}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(member.status)}`}
                        >
                          {member.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Registro de Membros Component
export function MembrosRegister({ onBack }) {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    endereco: '',
    dataNascimento: '',
    estadoCivil: '',
    profissao: '',
    ministerio: '',
    funcao: '',
    dataConversao: '',
    dataBatismo: '',
    observacoes: ''
  })

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-white rounded transition-colors border border-gray-200"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Cadastro de Novo Membro
              </h1>
              <p className="text-gray-600 mt-1">Adicione um novo membro à família de fé</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Photo Upload Section */}
          <div className="bg-white rounded shadow p-6 border border-slate-100 lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Camera size={20} className="text-blue-600" />
              Foto do Membro
            </h3>
            <div className="space-y-4">
              <label htmlFor="foto" className="cursor-pointer block">
                <input type="file" name="foto" id="foto" className="hidden" accept="image/*" />
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 h-64 w-full rounded border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-200 flex flex-col items-center justify-center">
                  <Camera size={32} className="text-gray-400 mb-2" />
                  <span className="text-gray-600 font-medium">Clique para selecionar</span>
                  <span className="text-gray-500 text-sm">ou arraste uma foto aqui</span>
                </div>
              </label>

              {/* Quick Actions */}
              <div className="space-y-2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 rounded font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <Save size={16} />
                  Salvar Rascunho
                </button>
              </div>
            </div>

            {/* Inspirational Card */}
            <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded p-4 border border-blue-200">
              <div className="text-center">
                <Heart size={20} className="mx-auto text-blue-600 mb-2" />
                <p className="text-sm text-blue-800 font-medium italic">
                  "Cada membro é uma bênção especial na casa do Senhor"
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded shadow p-6 border border-slate-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users size={20} className="text-blue-600" />
                Informações Pessoais
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="Nome do membro"
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="sobrenome"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    name="sobrenome"
                    id="sobrenome"
                    value={formData.sobrenome}
                    onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="Sobrenome do membro"
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="endereco"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    name="endereco"
                    id="endereco"
                    value={formData.endereco}
                    onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="Rua, número, bairro, cidade - UF"
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="dataNascimento"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    name="dataNascimento"
                    id="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="estadoCivil"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Estado Civil
                  </label>
                  <select
                    name="estadoCivil"
                    id="estadoCivil"
                    value={formData.estadoCivil}
                    onChange={(e) => setFormData({ ...formData, estadoCivil: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Church Information */}
            <div className="bg-white rounded shadow p-6 border border-slate-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Heart size={20} className="text-purple-600" />
                Informações Eclesiásticas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <label
                    htmlFor="ministerio"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ministério
                  </label>
                  <select
                    name="ministerio"
                    id="ministerio"
                    value={formData.ministerio}
                    onChange={(e) => setFormData({ ...formData, ministerio: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50 focus:bg-white"
                  >
                    <option value="">Selecione um ministério...</option>
                    <option value="louvor">Ministério de Louvor</option>
                    <option value="ensino">Ministério de Ensino</option>
                    <option value="pregacao">Ministério de Pregação</option>
                    <option value="recepcao">Ministério de Recepção</option>
                    <option value="criancas">Ministério Infantil</option>
                    <option value="jovens">Ministério de Jovens</option>
                    <option value="intercessao">Ministério de Intercessão</option>
                  </select>
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="funcao" className="block text-sm font-medium text-gray-700 mb-2">
                    Função
                  </label>
                  <select
                    name="funcao"
                    id="funcao"
                    value={formData.funcao}
                    onChange={(e) => setFormData({ ...formData, funcao: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50 focus:bg-white"
                  >
                    <option value="">Selecione uma função...</option>
                    <option value="membro">Membro</option>
                    <option value="lider">Líder de Célula</option>
                    <option value="diacono">Diácono</option>
                    <option value="pastor-auxiliar">Pastor Auxiliar</option>
                    <option value="coordenador">Coordenador</option>
                  </select>
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="dataConversao"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Data de Conversão
                  </label>
                  <input
                    type="date"
                    name="dataConversao"
                    id="dataConversao"
                    value={formData.dataConversao}
                    onChange={(e) => setFormData({ ...formData, dataConversao: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="dataBatismo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Data do Batismo
                  </label>
                  <input
                    type="date"
                    name="dataBatismo"
                    id="dataBatismo"
                    value={formData.dataBatismo}
                    onChange={(e) => setFormData({ ...formData, dataBatismo: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="observacoes"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Observações
                  </label>
                  <textarea
                    name="observacoes"
                    id="observacoes"
                    rows={4}
                    value={formData.observacoes}
                    onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Informações adicionais sobre o membro..."
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={onBack}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded transition-all duration-200"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded shadow-lg hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Save size={18} />
                Cadastrar Membro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
