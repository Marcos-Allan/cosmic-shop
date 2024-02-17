import React, { Suspense } from "react"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardProduct from "./Components/CardProduct";
import CardProductLoading from "./Loadings/CardProductLoading";

export default function App() {
  
  const LazyProductAsync:any = React.lazy(() => CardProduct());

  return (
    <div className={`w-screen h-screen bg-color-1 flex flex-col justify-start items-center`}>
      <Header />
      <Suspense fallback={<CardProductLoading />}>
        <LazyProductAsync />
      </Suspense>
      <Footer />
    </div>
  )
}