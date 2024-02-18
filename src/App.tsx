import React, { Suspense, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardProductLoading from "./Loadings/CardProductLoading";
import Container from "./Components/Container";

export default function App() {
  const [listProducts, setListProducts] = useState([
    {
      img: 'https://imgnike-a.akamaihd.net/250x250/0269827T.jpg',
      title: "Tênis Air Jordan 1 Low SE Craft Masculino",
      description: 'Tênis Nike Prfeito Para Eventos Casuais',
      stars: '5',
      price: '1.230,00',
    },
    {
      img: 'https://imgnike-a.akamaihd.net/360x360/02784151.jpg',
      title: "Women's Air Jordan 1 Low",
      description: 'Tênis Nike Popular Usuavel Em Diversas Ocasiões',
      stars: '4.5',
      price: '1.099,99',
    },
    {
      img: 'https://imgnike-a.akamaihd.net/360x360/02732251.jpg',
      title: "Tênis Nike Air Max Excee Masculino",
      description: 'Tênis Nike Perfeito Para Uso Do Dia a Dia',
      stars: '4.6',
      price: '519,99',
    }
  ]);

  const Card = React.lazy(() => import("./Components/CardProduct"));

  return (
    <div className={`w-screen h-screen bg-color-1 flex flex-col justify-start items-center overflow-x-hidden`}>
      <Header />
      <Container>
        {listProducts.map((product, index) => (
            <Suspense fallback={<CardProductLoading />}>
              <Card
                key={index}
                index={index}
                img={product.img}
                title={product.title}
                description={product.description}
                stars={product.stars}
                price={product.price}
                />
          </Suspense>
        ))}
        </Container>
      <Footer />
    </div>
  );
}