import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center text-white text-2xl bg-gray-600 py-6">
      Github
    </div>
  );
}

export default Github;
