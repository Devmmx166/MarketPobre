import { useState } from "react"
import { useNavigate } from "react-router-dom" //importação para navegar entre telas
import './Login.css'


function Login(){

// cria um estado para armazena a validação de login e senha, tambem tem que ir na tag e utilizar onChange 
// onChange={(event)=> setPassword(event.target.value)}

const navigate = useNavigate()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//função para navegar entre as paginhas

console.log(password)
const handleClick = () => {
    if (password.length >= 8) {
    navigate(`/Products`)
    } else {
      alert('Senha te que ser maior que 8 caracters')
    }
    }

    return(

        <main className="corpo-page">
            <section>
            <h1>Market Pobre</h1>

        <form action="" className="form">
             <span className="nome-login">Login</span>
        <label htmlFor="email">Email: {''}
            <input 
            type="text" 
            id="email"
            name="email"
            value={email}
            onChange={({ target: {value} }) => setEmail(value) }/>      
        </label>
        <br />
        <br />
<label htmlFor="password">Senha: {''}
            <input 
            type="password" 
            id="password" 
            name="password"
            value={password} 
            onChange={ ({target: {value} }) => setPassword(value) }/>      
        </label>
        <br />
        <br />
        <button onClick={ handleClick }>Entrar</button>
        </form>
        </section>

    </main>



    //     <div>
    //         <form action="">
      
           
    //         <label htmlFor="email">Email: 
    //             <input onChange={(e)=> setPassword(e.target.value)} type="email" name="email" id="email"  />
    //         </label>
       
       
    //          <label htmlFor="senha">Senha:
    //             <input  onChange={ ({target: {value} }) => setPassword(value) } type="password" name="senha" id="senha"  />
    //         </label>
            
        
    //     <button onClick={handleClick}>Login</button>
    //  </form>
    //     </div>

        
        



    )
}

export default Login;