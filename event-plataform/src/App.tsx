import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo"
import { Router } from "./Router";


interface Lesson {
  id: string;
  title: string
}

function App() {

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