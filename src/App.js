import React, { useState } from "react";
//import logo from "./logo.svg";
import "./assets/styles/App.css";
import Text from "./components/styled-text";
import CustomSlider from "./components/slider";

function App() {
  const [amount, setAmount] = useState(1590);
  const [term, setTerm] = useState(0);
  return (
    <div className="App">
      <div className="content padding-horizontal-4">
        <div className="height-20 center">
          <Text className="bold">Simulá tu crédito</Text>
        </div>
        <div className="height-60">
          <div className="space-between">
            <Text className="regular">MONTO TOTAL</Text>
            <div className="border padding-horizontal-4">
              <Text className="bold">${amount}</Text>
            </div>
          </div>
          <CustomSlider />
        </div>
        <div className="height-20">
          <Text className="bold">Simulá tu crédito</Text>
        </div>
      </div>
    </div>
  );
}

export default App;
