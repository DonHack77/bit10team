import React from 'react'

export const Suggform = ({sugg, setSugg}) => {

    const handleInput = (e)=>{
        setSugg({...sugg, sug: e.target.value })
    }

  return (
    <>
    <div>
      <input type="text" onInput={handleInput}placeholder='Escribe tu sugerencia' />
      <button>Enviar</button>
    </div>
    </>
  )
}
