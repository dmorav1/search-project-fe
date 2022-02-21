import React, { FormEvent, KeyboardEventHandler, useEffect, useState, KeyboardEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { IInformation } from './IInformation';
import InformationComponent from './InformationComponent';

function App() {
  const [informationFound, setInformationFound] = useState<IInformation[]>([])
  const [informationSearch, setInformationSearch] = useState('')

  const searchForInformation = async (title: string): Promise<IInformation[]> =>{

    const result = await fetch(`${process.env.REACT_APP_API_URL}/information?title=${title}`)
    

    return (await result.clone().json());
  }

  const search = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    const form = event.target as HTMLFormElement
    const input = form.querySelector('#searchText') as HTMLInputElement
    assignInputValue(input)
  }

  const assignInputValue = (input: HTMLInputElement) => {
    const title = input.value
    setInformationSearch(title)
    input.value = '';
  }

  const handleKeypress = (e: KeyboardEvent)=> {
    //it triggers by pressing the enter key
    
    if (e.code === "13") {
      e.preventDefault()
      const input = e.target as HTMLInputElement
      assignInputValue(input)
    }
  };

  
  

  useEffect(() => {
    (async () => {
      const title = encodeURIComponent(informationSearch)
      if (title) {
        const response = await searchForInformation(title)
        setInformationFound(response)
      }
    })()
  },[informationSearch])
 
  return (
    
    <div className="App">
      <h1>Search App</h1>
      <form className="searchForm" onSubmit={event => search(event)}  >
        <input id="searchText" type="text" onKeyPress={handleKeypress}/>
        <button>Search</button>
      </form>
      {informationSearch && <p>Results for search {informationSearch} </p>}
      <div className="information-container">
        {informationFound.length &&
          informationFound.map(information =>
            (<InformationComponent key={information.id} information={information}></InformationComponent>))
        }
        {
          !informationFound && informationSearch && <p>No information found for {informationSearch}</p>
        }
      </div>
    </div>
  );
}

export default App;

