import React from 'react'
import mansory from "/assets/frontend/images/microsite/specifications/mansory.png";
import parquet from "/assets/frontend/images/microsite/specifications/parquet.png";
import mansory1 from "/assets/frontend/images/microsite/specifications/mansory1.png";
import mansory2 from "/assets/frontend/images/microsite/specifications/mansory2.png";
import mansory3 from "/assets/frontend/images/microsite/specifications/mansory3.png";
import parquet2 from "/assets/frontend/images/microsite/specifications/parquet2.png";
import door from "/assets/frontend/images/microsite/specifications/door.png";
// import window from "/assets/frontend/images/microsite/specifications/window.png";
import roller from "/assets/frontend/images/microsite/specifications/roller.png";

function Specifications() {
  return (
    <>
        <div className="col-span-8 mt-10 sm:m-0">
            <div className="about_desc">
              <h2 className="uppercase midlandfontmedium text-[0.875em] tracking-[4px]">
                specifications
              </h2>
              <div className="grid grid-cols-12 pt-14 h-[500px] overflow-y-scroll">
                <div className="col-span-6">
                  <div className="master">
                    <h4 className="font-semibold">Master Bedroom(s)</h4>

                    <div className="flex gap-3 py-5">
                      <div className="icon">
                        <img src={mansory} alt="mansory" className='h-[80%]' />
                      </div>
                      <p className="text-sm w-60">
                        Walls : Gypsum Plaster/ Level Plast on RCC With Emulsion
                        Paint
                      </p>
                    </div>
                    <div className="flex gap-3 py-5">
                      <div className="icon">
                        <img src={parquet} alt="parquet" className='h-[80%]' />
                      </div>
                      <p className="text-sm w-60">
                        Walls : Gypsum Plaster/ Level Plast on RCC With Emulsion
                        Paint
                      </p>
                    </div>
                  </div>
                  <div className="modular_kitchen mt-10">
                    <h4 className="font-semibold">Modular Kitchen</h4>

                    <div className="flex gap-3 py-5">
                      <div className="icon">
                        <img src={mansory2} alt="mansory 2" className='h-[80%]' />
                      </div>
                      <p className="text-sm w-60">
                        Walls : Gypsum Plaster/ Level Plast on RCC With Emulsion
                        Paint
                      </p>
                    </div>
                    <div className="flex gap-3 py-5">
                      <div className="icon">
                        <img src={mansory3} alt="mansory 3" className='h-[80%]' />
                      </div>
                      <p className="text-sm w-60">
                        Fixtures : High Quality Branded CP Fittings
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <h4 className="font-semibold">Living/Dinning Room</h4>
                  <div className="flex gap-3 py-5">
                    <div className="icon">
                      <img src={mansory1} alt="mansory 1" className='h-[80%]' />
                    </div>
                    <p className="text-sm w-60">
                      Gypsum Plaster/ Level Plaster on RCC With Emulsion Paint
                    </p>
                  </div>
                  <div className="flex gap-3 py-5">
                    <div className="icon">
                      <img src={parquet2} alt="parquet 2" className='h-[80%]' />
                    </div>
                    <p className="text-sm w-60">
                      Floors : High Quality Vitrified Tile
                    </p>
                  </div>
                  <div className="flex gap-3 py-5">
                    <div className="icon">
                      <img src={door} alt="door" className='h-[80%]' />
                    </div>
                    <p className="text-sm w-60">
                      Floors : High Quality Vitrified Tile
                    </p>
                  </div>
                 

                  <div className="flex gap-3 py-5">
                    <div className="icon">
                      <img src={roller} alt="roller" className='h-[80%]' />
                    </div>
                    <p className="text-sm w-60">
                      Floors : High Quality Vitrified Tile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Specifications
