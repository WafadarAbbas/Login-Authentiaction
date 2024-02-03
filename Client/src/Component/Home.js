import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import Header from "./Header"



function Home() {


    return (

<div>
        <Header/>
        <h1 className="text-4xl text-center">Wafadar</h1>
        <div className="flex justify-center mt-8">
      <Link
        to="/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
      >
        Create Form
      </Link>
      <Link
        to="/list"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Show List
      </Link>
    </div>
        </div>

    )
}


export default Home