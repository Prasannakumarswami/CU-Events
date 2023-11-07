import React,{ useEffect, useState} from 'react';

import Navbar from './Navbar';
import Events from './Events';
import Footer from './Footer';
import './App.css';
import Pages from './Pages';




function App() {
  
  useEffect(()=>{
    showPage(page)
  }, [])  
  const [page, setPage]= useState(0);
  const NoOfPages=5;
  
  const showPage=(page)=>{
    fetch(`https://eventmanagementplatform.onrender.com/events?page=${page}&size=3&sort=id`).then((data)=>{
    return data.json();
  }).then((complete)=>{
    
    setContent(complete);
    console.log(content);
    
  }).catch((err)=>{
    console.log(err);
  })
  }
  let initial={"content":[{"ID":2,"title":"Fornt end work still not done ehhh?","content":"Back end has been done since a long time","location":"NC-3 415","startDay":"2023-09-13","endDay":"2023-10-26","startTime":"01:31:00","endTime":"01:32:59"},{"ID":52,"title":"Mobile App Development Workshop","content":"Learn to develop mobile apps in this hands-on workshop.","location":"AppCraft Academy","startDay":"2023-12-22","endDay":"2023-12-22","startTime":"13:00:00","endTime":"16:00:00"},{"ID":53,"title":"Backend Development Conference","content":"Discover the latest trends in backend development.","location":"BackendCon Center","startDay":"2023-12-05","endDay":"2023-12-06","startTime":"08:30:00","endTime":"17:30:00"}],"pageable":{"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"pageNumber":0,"pageSize":3,"paged":true,"unpaged":false},"totalPages":27,"totalElements":81,"last":false,"size":3,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":3,"first":true,"empty":false};
  let [content, setContent]=useState(initial);
  const nextPage= ()=>{
    if(page<NoOfPages){
    const curPage = page;
    setPage(curPage+1);
    showPage(curPage+1);
    console.log(page);
    console.log(content);
  }

  };
  const prevPage= ()=>{
    if(page>1){
    setPage(page-1);
    showPage(page);
    console.log(page);}
    
  };
  const pageSetter=(num)=>{
    setPage(num);
    showPage(num);
    console.log(page);
  }

  
  return (
    <div>
      
      <Navbar/>
      <Events content={content}/>
      
      <Pages page={page} nextPage={nextPage} pageSetter={pageSetter} prevPage={prevPage}/>
      <Footer/>
      
    </div>
  );
}


export default App;