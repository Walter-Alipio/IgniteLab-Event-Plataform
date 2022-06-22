import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event";



const  GET_LESSONS_QUERY = gql`
  query {
    lessons{
      id
      title

      teacher{
        name
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string
}

function App() {
  const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  console.log(data)
  return (
    <Event />
  )
}
//data? só faz a query onde data for != de vazio

export default App
//CMS Content Management System
//Graphic
//query, mutation