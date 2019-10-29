import React, { useState } from "react";
//import logo from "./logo.svg";
import "./assets/styles/App.css";
import Text from "./components/styled-text";
import CustomSlider from "./components/slider";
import Row from "./components/row";

function App() {
  const [amount, setAmount] = useState(5000);
  const [monthlyFee, setMonthlyFee] = useState(3);
  const fee = () => {
    const total = amount / monthlyFee;
    const totalStr = total.toFixed(2);
    return totalStr;
  };
  return (
    <div className="App">
      <div className="content padding-horizontal">
        <div className="header center">
          <Text className="black">Simulá tu crédito</Text>
        </div>
        <div className="main">
          <Row
            title="MONTO TOTAL"
            value={amount}
            min={5000}
            max={50000}
            onChange={value => setAmount(value)}
            money
          />
          <Row
            title="PLAZO"
            value={monthlyFee}
            min={3}
            max={24}
            onChange={value => setMonthlyFee(value)}
          />
        </div>
        <div className="footer">
          <div className="row-50 dark-blue space-between padding-horizontal-4">
            <Text className="black-sm">CUOTA FIJA POR MES</Text>
            <Text className="black-lg">${fee()}</Text>
          </div>
          <div className="row-50 space-between">
            <button className="width-60 green">
              <Text className="bold">OBTENÉ CRÉDITO</Text>
            </button>
            <button className="width-30 light-blue">
              <Text className="bold-sm">VER DETALLE DE CUOTAS</Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
