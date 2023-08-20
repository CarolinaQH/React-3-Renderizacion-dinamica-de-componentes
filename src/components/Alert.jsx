

const Alert = ({msg, color}) => {
  return (
  <>
  <div className={`alert alert-${color}`}>
    <p>{msg}</p>
    </div>

  </>

  );
  } 

  export default Alert