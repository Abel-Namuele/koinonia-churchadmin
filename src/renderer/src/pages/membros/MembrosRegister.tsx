import { Button } from '@renderer/form/buttons/Button'

export function MembrosRegister(): React.JSX.Element {
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Registro de Membros</h1>
        </div>

        <form className="space-y-4">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded shadow space-y-4 ">
              <div className=" mb-4">
                <label htmlFor="foto">
                  <input type="file" name="foto" id="foto" className="opacity-0" />
                  <div className="bg-gray-100 h-60 w-60"></div>
                  <span className="text-center">Selecione a foto</span>
                </label>
              </div>
              <Button
                className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600 transition-all "
                onClick={undefined}
                type={undefined}
              />
            </div>
            <div className="bg-white p-6 rounded shadow">
              <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
                <div className="col-span-2">
                  <label htmlFor="nome" className=" text-gray-500 font-semibold">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="px-4 py-1 border border-gray-500 focus:outline-0 rounded w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="snome" className=" text-gray-500 font-semibold">
                    Sobre Nome
                  </label>
                  <input
                    type="text"
                    name="snome"
                    id="snome"
                    className="px-4 py-1 border border-gray-500 focus:outline-0 rounded w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="nome"></label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="px-4 border border-gray-500 focus:outline-0 w-full"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="nome"></label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="px-4 border border-gray-500 focus:outline-0 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
