import React from 'react'

export default function Card(props) {
  const d= new Date();
  return (
    <div className="card card-side bg-base-100 shadow-xl m-5">
  <figure><img  className="object-cover h-full w-full " src={props.link} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.desc} <br />
    Location: {props.location} <br />
    Event Start Date: {props.start} <br />
    Event End Date: {props.end}
    </p>
    

    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_4').showModal()}>ENROLL</button>
      <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{props.title}</h3>
    <p className="py-4">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
  )
}
