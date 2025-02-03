import React from 'react'
import eye from "/assets/frontend/images/csr/camps/eye.jpg";
import donation from "/assets/frontend/images/csr/camps/blood-donation.jpg";
import dental from "/assets/frontend/images/csr/camps/dental.jpg";

function Camps() {

    const campsData = [
        {
            image : eye,
            heading : "eye camps",
            pera : "Encouraging life-saving contributions."
        },
        {
            image : donation,
            heading : "Blood Donation Camps",
            pera : "Encouraging life-saving contributions."
        },
        {
            image : dental,
            heading : "Dental Camps",
            pera : "Promoting oral health with free check-ups and awareness."
        },
    ]

  return (
   <div className="grid grid-cols-3 gap-5 max-w-[95%] mx-auto pt-20">
    {campsData && campsData.map((item, i)=> <div key={i} className="camp">
        <img src={item.image} alt="Eye Camp" />
        <div className="content py-5">
            <div className="heading font-semibold uppercase text-[16px]">{item.heading}</div>
            <p className="opacity-70 pt-3">{item.pera}</p>
        </div>
    </div>)}
   </div>
  )
}

export default Camps
