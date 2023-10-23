import React, { /*useEffect,*/ useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import GiphList from './GiphList';
export default function Searchbar() {
  const [result, setResult] = useState([])
  const [term, setTerm] = useState('')
  function handleChange(e) {
    setTerm(e.target.value)
  }
  function fetchSearchResult() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Uf5Mc95yt38C8wDnaOgCjryFUFz0hnwR&q=${term}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setResult(data.data)
    })
  }
  return (
    <>
<div class="input-group mb-3">
  <div class="input-group-prepend">
  </div>
  <input type="text" 
  class="form-control" 
  aria-label="Default" 
  aria-describedby="inputGroup-sizing-default" 
  placeholder="Search for a gif..." 
  onChange={handleChange} 
  value={term} />
  <Button onClick={() => fetchSearchResult()}> Search</Button>
  <GiphList gifs={result}/>
</div>
    </>
  )
}