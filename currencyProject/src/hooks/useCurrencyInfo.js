import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        }
      });
  }, [currency]);

  console.log(data, "data");

  return data;
}

export default useCurrencyInfo;
