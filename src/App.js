import { useEffect, useState } from "react";

import data from "./Wine-data.json";
import Table from "./Table.js";
import "./App.css";

function App() {
  const [classValues, setClassValues] = useState({
    class1: [],
    class2: [],
    class3: [],
  });

  const [gammaValues, setGammaValues] = useState({
    gamma1: [],
    gamma2: [],
    gamma3: [],
  });

  /* function to filter the data based on alcohol value */
  const filterData = (alcoholValue) => {
    return data.filter((drink) => drink["Alcohol"] === alcoholValue);
  };

  /* function to calculate the gamma values for each class */
  const calculateGamma = (drinks) => {
    return drinks.map(
      (drink) => Number(drink["Ash"] * drink["Hue"]) / drink["Magnesium"]
    );
  };

  /* function to calculate the classValues  */
  const calculateClassValues = (drinks) => {
    return drinks.map((drink) => drink["Flavanoids"]);
  };

  useEffect(() => {
    const drinks1 = filterData(1);
    const drinks2 = filterData(2);
    const drinks3 = filterData(3);

    setClassValues({
      class1: calculateClassValues(drinks1),
      class2: calculateClassValues(drinks2),
      class3: calculateClassValues(drinks3),
    });

    setGammaValues({
      gamma1: calculateGamma(drinks1),
      gamma2: calculateGamma(drinks2),
      gamma3: calculateGamma(drinks3),
    });
  }, []);

  return (
    <div className="App">
      <>
        <Table
          class1={classValues.class1}
          class2={classValues.class2}
          class3={classValues.class3}
          text={"Flavanoids"}
        />
        <Table class1={gammaValues.gamma1} class2={gammaValues.gamma2} class3={gammaValues.gamma3} text={"Gamma"} />
      </>
    </div>
  );
}

export default App;
