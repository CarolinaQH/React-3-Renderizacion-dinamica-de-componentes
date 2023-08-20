import Table from 'react-bootstrap/Table';

const Listado = ({colaboradores}) => {
      return (
  <>
     <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>


      <tbody>
        {colaboradores.map ((lc) =>  (
         <tr key={lc.id}>
          <th>{lc.nombre}</th>
          <th>{lc.correo}</th>
          <th>{lc.edad}</th>
          <th>{lc.cargo}</th>
          <th>{lc.telefono}</th>
          {/* lc es lista de colaboradores */}

        </tr>

        ))}

      </tbody>
    </Table>
  
    </>
  
    );
    }
  
  
  export default Listado;


