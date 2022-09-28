import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import Todos from './componenet/Todos';


export default function Home() {


  return (
    <div >
      <div className='mt-5 d-flex justify-content-center'>todos</div>
      <div className='d-flex justify-content-center mt-5'><Todos/></div>
    </div>
  )
}
