import React from 'react'
import {useState} from 'react'
import {Suggform} from '../Components/Suggform'

export const Suggestions = () => {

  const [sugg, setSugg] = useState({ id:null, sug: "", checked: false})


  return (
    <>
    <Suggform
    sugg={sugg}
    setSugg={setSugg}
    />
    </>
  )
}
