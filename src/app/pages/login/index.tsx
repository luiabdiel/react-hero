import { useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();

  function handleClick (){
    history("/pagina-inicial");
  }

  return (
    <div>
      Login

      <button onClick={handleClick}>Página inicial</button>
    </div>
  )
}