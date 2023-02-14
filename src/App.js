import "./App.css"

import Select from "react-select"
import { useEffect, useState } from "react"
import { getBerry } from "./GetBerry"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getBerry().then((res) => {
      setData(res.sort((a, b) => a.label.localeCompare(b.label)))
    })
  }, [])
  return (
    <>
      <Select options={data} />
    </>
  )
}

export default App
