import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import AddTodo from "./pages/AddTodo";
import Header from "./components/Header";

const queryClient = new QueryClient();

// Zadanie 1
// Utwórz routing aplikacji zawierający podstrony: home, todos, add-todos
// Na podstronie add todos utwó®z formularz do dodawania todos
// Wyświetl liste todos na podstronie /todos


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/addTodo" element={<AddTodo />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
