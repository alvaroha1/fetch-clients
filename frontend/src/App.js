import InputField from './components/InputField';
import ToggleSwitch from './components/ToggleSwitch'
import ResultCard from './components/ResultCard'
import { useState, useEffect } from 'react'
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
      json.map(el => el.show = true)
      setData(json);
    }

    fetchData()
      .catch(console.error);
  }, [])

  const handleChange = e => {
    setFilterCompanies(e.target.value)
  };

  const handleCheckbox = target => {
    let newData;
    switch (target.id) {
      case "Excavation":
        setExcavation(!excavationValue)
          newData = data.map(el => {
          if (el.specialty === "Excavation") {
            el.show = !excavationValue;
            return el;
          } else {
            return el;
          }
        })
        setData(newData);
        break;
      case "Plumbing":
        setPlumbing(!plumbingValue)
        newData = data.map(el => {
          if (el.specialty === "Plumbing") {
            el.show = !plumbingValue;
            return el;
          } else {
            return el;
          }
        })
        setData(newData);
        break;
      case "Electrical":
        setElectrical(!electricalValue)
        newData = data.map(el => {
          if (el.specialty === "Electrical") {
            el.show = !electricalValue;
            return el;
          } else {
            return el;
          }
        })
        setData(newData);
        break;
      default:
        console.error("Error")
        break;
    }
  };

  function filterResults() {
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
            <p>Type a name to filter by company name, or use the checkboxes to filter by company specialty.</p></div>
          <FormBox>
            <InputField placeholder="Search for company..." name="company_name" type="text" required={false} handleInput={handleChange}/>
            <div>
              <ToggleSwitch
                title="Excavation"
                id="Excavation"
                size="xs"
                value={excavationValue}
                checked={excavationValue}
                onChange={({ target }) => handleCheckbox(target)} />
              <ToggleSwitch
                title="Plumbing"
                id="Plumbing"
                size="xs"
                value={plumbingValue}
                checked={plumbingValue}
                onChange={({ target }) => handleCheckbox(target)} />
              <ToggleSwitch
                title="Electrical"
                id="Electrical"
                size="xs"
                value={electricalValue}
                checked={electricalValue}
                onChange={({ target }) => handleCheckbox(target)} />
            </div>
          </FormBox>
        </Navbar>
        <Results><p>RESULTS:</p>
          {filterResults().map(
            (el, index) => {
              if (el.show) {
                const {specialty, city, company_name, logo} = el
                return <ResultCard key={index} name={company_name} city={city} imgSrc={logo} specialty={specialty} />
              }
            }
          )}
        </Results>
      </Home>
    </Fragment>
  );
}

export default App;
