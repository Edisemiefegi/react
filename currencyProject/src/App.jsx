import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setForm] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  console.log(currencyInfo, options, "info");

  const swap = () => {
    setForm(to);
    setTo(from);
    setConvertAmount(amount * currencyInfo[to]);
    // setAmount(convertAmount);
  };

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=600)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currency={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setForm(currency)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 border-2 border-white  bg-blue-600 text-white px-2 py-0.5 rounded-md "
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertAmount}
                amountDisable
                currency={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 rounded-lg text-white"
            >
              Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
