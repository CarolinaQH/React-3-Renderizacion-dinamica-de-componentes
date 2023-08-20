import { useState } from "react"
import Listado from "./components/Listado"
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./components/Formulario"
import { BaseColaboradores } from './BaseColaboradores/BaseColaboradores'
import './App.css'
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";

function App() {
  const [alert, setAlert] = useState ({msg: "", color: ""})
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [search, setSearch] = useState("")

  const handleChange = (e) =>{
    setSearch(e.target.value)

  }

  const filteredColaboradores = colaboradores.filter ((lc) => {
    if (
      lc.nombre.toLowerCase().includes(search.toLowerCase()) || 
      lc.correo.toLowerCase().includes(search.toLowerCase()) || 
      lc.edad.toLowerCase().includes(search.toLowerCase()) || 
      lc.cargo.toLowerCase().includes(search.toLowerCase()) || 
      lc.telefono.toLowerCase().includes(search.toLowerCase())
    ){
      return true;
    }
      return false;
  })

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {
      ...nuevoColaborador, 
      id: colaboradores.length + 1, 
    
    }
    setColaboradores([...colaboradores, colaboradorConId]) 



  }

    return (
      <>
      <h1>Lista de Colaboradores</h1>
      <Buscador onChange={handleChange} search={search} />
      <Listado colaboradores= {filteredColaboradores}/>
      <Formulario onSubmit={handleSubmit} setAlert={setAlert}/>
      {alert.msg && <Alert msg={alert.msg} color = {alert.color} />}

  </>

  );
  }


export default App
