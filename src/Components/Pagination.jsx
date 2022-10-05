import { useEffect, useState } from "react"


function Pagination({totalPages,currentPage,handlePage,Page}){
    const [page,setPage]=useState(6);
    useEffect(()=>{
        setPage(6);
    },[totalPages])
    const data = [];
    for(let i=page-5 ; i<=page+4 ; i++ ){
        if(i<=totalPages){
            
            data.push(i);
        }    
    
    }
    const handlePrev = ()=>{
        setPage(page-5)
    }
    const handleNext = ()=>{
        setPage(page+5)
    }
    return (
        <div>
            <button disabled={page===6 ?true : false} onClick={handlePrev}>PREV</button>
            {data && data.map((el)=>(
                <button disabled={currentPage===el} onClick={()=>handlePage(el)}>{el}</button>
            ))}
            <button onClick={handleNext} disabled={page>=totalPages ? true : false}>NEXT</button>
        </div>
    )
}

export default Pagination
