"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";


export default function Home() {
  let ref = useRef()

  return (
    
    <div className="w-2/3 mx-auto my-3 ">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset(e)}}>
        <div >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="text-white" id="name" />
        </div>
        <div>
          <label htmlFor="add">Adress</label>
          <input type="text" name="add" className="text-white" id="add" />
        </div>
        <button className="border-b-white">Submit</button>
      </form>
    </div>
  );
}
