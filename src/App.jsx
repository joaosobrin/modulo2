import HelloWorld from "./HelloWorld"
import Button from "./Button";
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {

  const lista_pessoas =[
    {
      nome: "hwarehgraththatha\h"
    },
    {
      nome: "Igsssssssthsthsghsthtshsor"

    },
    {
      nome: "meu htshststhttttttttssttt 3ceirao"
    },
    {
        nome: "dtttttttttttttttttttttttttttnfjv"
    }
  ]

  return (
    <div className="App">
      <HelloWorld />
      {/* <Button cor="#00ff00" frase="confimar"/>
      <Button cor="#ff0000" frase="recusar"/> */}
      {/* <SayName nome="João"/> */}
      {/* <Perfil foto="https://picsum.photos/200" nome="João" idade={18}/> */}

      { lista_pessoas.map( (pessoa) => {
        return <Perfil foto={pessoa.foto} 
                      nome={pessoa.nome} 
                      idade={pessoa.idade}/>
      } ) }

    </div>
  );   
}

export default App