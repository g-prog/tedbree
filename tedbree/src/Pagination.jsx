import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Card from './Card';
import  './App.css';

export default function Pagination() {
const [offset, setOffset] = useState(0);
const [perPage] = useState(10);
const [pageCount, setPageCount] = useState(0)
const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree')
      const nbaData = await response.json()
  setPageCount(Math.ceil(nbaData.length/perPage))
  setPlayerData(nbaData.slice(offset, offset+perPage))
      }

    fetchData()
  }, [offset])

const handlePageClick = (e) => {
  const selectedPage = e.selected;
  console.log(selectedPage*perPage)

  setOffset((selectedPage + 1)*perPage)

}
  return (
   
    <div>
         {playerData.map((playerData, k) => (
          <Card key={k}

                title={playerData.title}
                description={playerData.body}
            />
          
        ))}
      
          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
    
  


</div>
)}    