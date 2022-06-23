import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo"
import { Router } from "./Router";




// const  GET_LESSONS_QUERY = gql`
//   query {
//     lessons{
//       id
//       title

//       teacher{
//         name
//       }
//     }
//   }
// `

interface Lesson {
  id: string;
  title: string
}

function App() {
  // const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  // console.log(data)
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
//data? só faz a query onde data for != de vazio

export default App
//CMS Content Management System
//Graphic
//query, mutation