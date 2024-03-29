import { useState } from 'react'
import './App.css'

function App() {


  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHf] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("resultado");

  const soma = () => {
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMin = Number(mi.value) + Number(mf.value);
    while (somaMin > 59) {
      somaMin -= 60;
      somaHora++;
    }
  }

  const sub = () => {
    let momentoInicial = hi.value * 60 + Number(mi.value);
    let momentoFinal = hf.value * 60 + Number(mf.value);
    let resultadoHora = 0;
    let resultadoMinuto = momentoInicial - momentoFinal;
    if (resultadoMinuto < 0) {
      resultadoMinuto *= -1
    }
    while (resultadoMinuto > 59) {
      resultadoMinuto -= 60;
      resultadoHora++;
    }
    setResultado(resultadoHora + ":" + resultadoMinuto);
  }






  return (
    <>
      <h1>Calculadora de Horas</h1>
      <div className="samba">
        <h3>Digite os horários que deseja calcular!</h3>
        <input
          type="number" id="horaInicial"
          value={hi}
          onChange={(e) => setHi(e.target.value)}
          placeholder="Hora Inicial"
        />&nbsp; : &nbsp;
        <input
          type="number"
          value={mi}
          onChange={(e) => setMi(e.target.value)}
          placeholder="Minuto Inicial"
        /><br /><br />
        <input
          type="number"
          value={hf}
          onChange={(e) => setHf(e.target.value)}
          placeholder="Hora Final"
        />&nbsp; : &nbsp;
        <input
          type="number"
          value={mf}
          onChange={(e) => setMf(e.target.value)}
          placeholder="Minuto Final"
        /><br /><br />
        <button onClick={soma}>Soma</button>
        <button onclick="sub()">Diferença</button>
        <h3 id="resultado">{resultado}</h3>

      </div>
    </>
  )
}


export default App
