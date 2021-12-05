import InputField from './components/InputField';
import ToggleSwitch from './components/ToggleSwitch'
import ResultCard from './components/ResultCard'
import { useState, useEffect } from 'react'
import { Home, Card, Navbar, FormBox } from "./styles/App";
import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';


function App() {
  const [data, setData] = useState([]);
  const [value, setCheckbox] = useState(true);
  const [state, setState] = useState({
    companyName: '',
    Excavation: true,
    Plumbing: true,
    Electrical: true,
  });

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
                value={value}
                checked={value}
                onChange={({ target }) => setCheckbox(!value)} />
              <ToggleSwitch title="Plumbing"
                size="xs"
                value={value}
                checked={value}
                onChange={({ target }) => setCheckbox(!value)} />
              <ToggleSwitch title="Electrical"
                size="xs"
                value={value}
                checked={value}
                onChange={({ target }) => setCheckbox(!value)} />
            </div>
          </FormBox>
        </Navbar>
        <Card>RESULTS
          {data.filter((value) => {
            if (filterCompanies === "") {
              return value;
            } else if (value.company_name.toLowerCase().includes(filterCompanies.toLowerCase())) {
              return value;
            }
          }).map(
            (el, index) => {
              const {specialty, city, company_name, logo} = el
              return <ResultCard key={index} name={company_name} city={city} imgSrc={logo} specialty={specialty} />
            }
          )}
        </Card>
      </Home>
    </Fragment>
  );
}

export default App;
