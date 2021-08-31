import React, { useEffect , useState} from 'react';
import './App.css';
import axios from 'axios';
import norr from './norr.jpg'

function App() {

  const [ state , setState] = useState({
    category: ''
  })
  
    useEffect (() => {
      realData();
    }, []);

    const realData = async() => {
      const jokes = await axios.get("https://api.chucknorris.io/jokes/categories");
      console.log(jokes.data);
      setState({
        ...state,
        category: jokes.data
      })
    }
    return (
    <div className="container">
        <div className="row">
          <h1 className="Chuck">Welcome for the chuck demo</h1>
            <div className="col-6">
            <img src={norr} alt="Chuck with guns"/>
          </div>
        </div>
        <div className="col-6">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

              <a className="navbar-brand" href="#">Select Category</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Category
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Science</a>
                      <a className="dropdown-item" href="#">Animal</a>
                      <a className="dropdown-item" href="#">Technology</a>
                    </div>
                    </li>
              
                </ul>
                
                </div>
            </nav>
            </div>
            <div>
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div role="separator" className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
  </div>
  <div className="input-group">
  </div>
</div>

    </div>
  );
}

export default App;
