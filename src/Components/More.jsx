import React from 'react'
import { RxCaretDown } from "react-icons/rx";

export default function More() {
  return (
    <>
    <div className="max-w-[1200px] mx-auto mb-4 px-2 my-12">
      <div className="text-[25px] font-bold">
      More Foods Options Near Me in  Nagpur
      </div>
      <div className=" flex flex-wrap gap-6 my-4">
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>

          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>
          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Amrican Restaurant
          </div>

          <div className=" flex items-center justify-center w-[25%]  rounded-[10px] border border-slate-200 py-3">
            Show more <RxCaretDown />
          </div>
        </div>
      <hr className='my-6 border-[1px]' />
    </div>
  </>
  )
}
