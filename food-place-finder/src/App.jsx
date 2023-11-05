import "./App.css";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import SearchResultCategory from "./components/SearchResultCategory";
import { store } from "./store/store";
import { Provider } from "react-redux";
import About from "./pages/about/About";
import SearchContextProvider from "./context/SearchContextProvider";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/search-results',
    element: <SearchResult/>
  },
  {
    path: '/search-result-category',
    element: <SearchResultCategory/>
  },
  {
    path: '/about',
    element : <About/>
  }
]);

function App() {

  return (
    <>
    <Provider store={store}>
      <SearchContextProvider>
      <RouterProvider router={router}>
        </RouterProvider>
      </SearchContextProvider>
    </Provider>
        
    </>
  );
}

export default App;