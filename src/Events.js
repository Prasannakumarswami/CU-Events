import React from 'react';
import Card from './Card';

export default function Events(props) {
  
  
  return(
    // {
    //   props.content.content.map((data)=>{
    //     return(
    //       <Card title={data.title}  desc={data.desc} link="https://picsum.photos/seed/picsum/200/200" start="" end=""/>
    //     )
    //   })
    // }
      
      
    props.content.content.map((data)=>{ return <Card title={data.title} desc={data.content} start={data.startDay} end={data.endDay} id={data.ID} location={data.location} link="https://picsum.photos/seed/picsum/200/200"  />}) 
  );
  
}
