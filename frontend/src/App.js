import InputField from './components/InputField';
import ToggleSwitch from './components/ToggleSwitch'
import ResultCard from './components/ResultCard'
import { useState, useEffect, useReducer } from 'react'
import { Home, Results, Navbar, FormBox } from "./styles/App";
import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';


function App() {
  // Data coming from API
  const [data, setData] = useState([]);

  // component state
  const [excavationValue, setExcavation] = useState(true);
  const [plumbingValue, setPlumbing] = useState(true);
  const [electricalValue, setElectrical] = useState(true);
  const [filterCompanies, setFilterCompanies] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:5000/clients");
      const json = await data.json();
      console.log(json)
      setData(json);
    }

    fetchData()
      .catch(console.error);
  }, [])

  const handleChange = e => {
    setFilterCompanies(e.target.value)
  };

  const filterResults = function () {
    return data.filter((value) => {
      if (filterCompanies === "") {
        return value;
      } else if (value.company_name.toLowerCase().includes(filterCompanies.toLowerCase())) {
        return value;
      }
    });
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Home>
        <Navbar>
          <div> <h1>
            WELCOME
          </h1>
            <p>Type a name to filter by name, or use the checkboxes to filter by speciality.</p></div>
          <FormBox>
            <InputField placeholder="Filter by company name..." name="company_name" type="text" required={false} handleInput={handleChange}/>
            <div>
              <ToggleSwitch title="Excavation"
                size="xs"
                value={excavationValue}
                checked={excavationValue}
                onChange={({ target }) => setExcavation(!excavationValue)} />
              <ToggleSwitch title="Plumbing"
                size="xs"
                value={plumbingValue}
                checked={plumbingValue}
                onChange={({ target }) => setPlumbing(!plumbingValue)} />
              <ToggleSwitch title="Electrical"
                size="xs"
                value={electricalValue}
                checked={electricalValue}
                onChange={({ target }) => setElectrical(!electricalValue)} />
            </div>
          </FormBox>
        </Navbar>
        <Results><p>RESULTS:</p>
          {filterResults().map(
            (el, index) => {
              const {specialty, city, company_name, logo} = el
              return <ResultCard key={index} name={company_name} city={city} imgSrc={logo} specialty={specialty} />
            }
          )}
        </Results>
      </Home>
    </Fragment>
  );
}

export default App;
