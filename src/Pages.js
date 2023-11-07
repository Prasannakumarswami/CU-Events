import React from 'react'

export default function Pages(props) {
    
  return (
    <div>
      <div className="flex justify-center">
      <button className="btn btn-primary btn-sm mt-2 mr-2 " id="prev" onClick={props.prevPage}>Prev</button>
      <div className="join">
        <button className="join-item btn" onClick={()=>props.pageSetter(1)}>1</button>
        <button className="join-item btn" onClick={()=>props.pageSetter(2)}>2</button>
        <button className="join-item btn" onClick={()=>props.pageSetter(3)}>3</button>
        <button className="join-item btn" onClick={()=>props.pageSetter(4)}>4</button>
      </div>
      <button className="btn btn-primary btn-sm mt-2 ml-2 " id="next" onClick={props.nextPage}>Next</button>
      
    </div>
    </div>
  )
}
