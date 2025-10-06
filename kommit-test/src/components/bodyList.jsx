import { state, useEffec, useState } from "react";

export default function BodyList() {
  const [lista, setLista] = useState([]);
  const [addHead, setAddHead] = useState(0);
  const [addTail, setAddTail] = useState(0);
  const [indexEliminar, setIndexEliminar] = useState(0);
  const [itemRepetido, setItemRepetido] = useState(0);
  const [itemBuscar, setItemBuscar] = useState(0);
  const [indexEncontrado, setIndexEncontrado] = useState();

  //   funciones

  function agregarHead() {
    const nuevaLista = [parseInt(addHead), ...lista];
    setLista(nuevaLista);
  }

  function agregarTail() {
    const nuevaLista = [...lista, parseInt(addTail)];
    setLista(nuevaLista);
  }

  function removerElement() {
    if (indexEliminar < 0 || indexEliminar >= lista.length) {
      alert("Índice fuera de rango");
    }
    const nuevaLista = [...lista];
    nuevaLista.splice(indexEliminar, 1);
    setLista(nuevaLista);
  }

  function buscarElemento() {
    const index = lista.indexOf(parseInt(itemBuscar));
    if (index !== -1) {
      setIndexEncontrado(index);
      alert("Elemento encontrado en el índice: " + index);
    } else {
      alert("Elemento no encontrado");
    }
  }

  function eliminarRepetidos() {
    const nuevaLista = lista.filter((item) => item !== parseInt(itemRepetido));
    setLista(nuevaLista);
  }

  console.log("AddHead", addHead);
  console.log("AddTail", addTail);
  console.log("Item repetido", itemRepetido);

  return (
    <div className="w-4/5 h-auto bg-gray-200 border-2 border-gray-700 px-4">
      <p>Body List 2</p>
      <div className="flex space-x-3">
        <div className="flex flex-col space-y-3">
          <input
            className="bg-white"
            type="text"
            value={addHead}
            onChange={(e) => {
              setAddHead(e.target.value);
            }}
          />
          <button className="bg-green-300" onClick={agregarHead}>
            Add Head
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          <input
            className="bg-white"
            type="text"
            value={addTail}
            onChange={(e) => {
              setAddTail(e.target.value);
            }}
          />
          <button className="bg-green-300" onClick={agregarTail}>
            Add Head
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          <input
            className="bg-white"
            type="text"
            value={indexEliminar}
            onChange={(e) => {
              setIndexEliminar(e.target.value);
            }}
          />
          <button className="bg-red-300" onClick={removerElement}>
            Eliminar Elemento
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          <input
            className="bg-white"
            type="text"
            value={itemBuscar}
            onChange={(e) => {
              setItemBuscar(e.target.value);
            }}
          />
          <button className="bg-red-300" onClick={buscarElemento}>
            Buscar Elemento
          </button>
          <div>
            {indexEncontrado ? (
              <div>Índice encontrado: {indexEncontrado}</div>
            ) : (
              <div>No se encontró el elemento</div>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <input
            className="bg-white"
            type="text"
            value={itemRepetido}
            onChange={(e) => {
              setItemRepetido(e.target.value);
            }}
          />
          <button className="bg-red-300" onClick={eliminarRepetidos}>
            Eliminar Repetidos
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {lista?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        <div>Tamaño de la lista:{lista?.length}</div>
      </div>
      <div className="flex gap-2 my-6">
        {lista?.map((item, index) => {
          return (
            <div className="w-1/3 bg-blue-300 border-2 border-blue-400 h-80 flex p-2 gap-2">
              <div className="w-1/2 h-full border-2 border-gray-800 space-y-2">
                <div className="h-1/2 border-2 border-gray-800">
                  <p>Prev</p>
                  <p></p>
                  <p>{lista[index - 1]}</p>
                </div>
                <div className="h-1/2 border-2 border-gray-800">
                  <p>Next</p>
                  <p>{lista[index + 1]}</p>
                </div>
              </div>
              <div className="w-1/2 h-full border-2 border-gray-800">
                <p>Data</p>
                <p>{item}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
