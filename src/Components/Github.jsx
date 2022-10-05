import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import GithubRow from './GithubRow';
import Reducer from "./Reducer"
import Pagination from './Pagination';


const limit=5;
function fetching(dispatch,query,page){
  dispatch({type:"LOADING"})
  axios.get(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${limit}`).then((res)=>
    dispatch({type:"SUCCESS" , payload: res.data})
  ).catch((err)=>{
    console.log(err);
    dispatch({type:"ERROR"}) 
  })

}
function Github() {
  const initData = {
    loading : false,
    error : false,
    totalCount: 1,
    user : [],

  }
  const [state,dispatch] = useReducer(Reducer,initData);
  const [inputValue, setInputValue] = useState("masai");
  const [page,setPage] = useState(1);
  const handleSubmit= ()=>{
    setPage(1);
    fetching(dispatch,inputValue,page);
  }
  const handlePage = (value) => {
    setPage(value);
   
  };
  useEffect(()=>{
    fetching(dispatch,inputValue,page)

  },[page])
  return (
    <div>
      <input type="text" value={inputValue} placeholder="Enter username" onChange={(e)=>setInputValue(e.target.value)} />
      <button onClick={handleSubmit}>Search For query</button>
      {state.error && 
      <div>
      <h3>Error coming from Api, calm down why you are in a hurry ?</h3>
        <h5>(Try to Refresh the Page or search anything else)</h5>

      </div>}

      {<GithubRow data={state.user} loading={state.loading}/>}
      {<Pagination
            totalPages={state.totalCount}
            currentPage={page}
            handlePage={handlePage}
          />}
      
    </div>
  )
}

export default Github
