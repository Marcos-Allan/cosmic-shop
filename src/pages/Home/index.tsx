import React, { Suspense, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CardProductLoading from "../../Loadings/CardProductLoading";
import Container from "../../Components/Container";

export default function Home() {
  const [listProducts] = useState([
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
      description: 'Tênis Nike Perfeito Para Uso Do Dia a Dia Branco',
      stars: '4.6',
      price: '519,99',
    },
    {
      img: 'https://imgnike-a.akamaihd.net/250x250/007581ID.jpg',
      title: "Tênis Nike Air Max Excee Masculino",
      description: 'Tênis Nike Perfeito Para Uso Do Dia a Dia Preto',
      stars: '5.0',
      price: '1.599,99',
    },
    {
      img: 'https://imgnike-a.akamaihd.net/250x250/02841451.jpg',
      title: "Tênis Nike Air Jordan 1 High OG",
      description: 'Tênis Nike Perfeito Para Multitarefas',
      stars: '4.3',
      price: '1.799,99',
    },
    {
      img: 'https://imgnike-a.akamaihd.net/250x250/0264675A.jpg',
      title: "Tênis Nike Jordan One Take 4 Masculino",
      description: 'Tênis Nike Extravagante Multifuncional',
      stars: '4.8',
      price: '999,99',
    }
  ]);

  const Card = React.lazy(() => import("../../Components/CardProduct"));

  return (
    <div className={`relatives w-full h-screen overflow-y-scroll scrollbar-w-2 scrollbar scrollbar-thumb-color-4 scrollbar-track-color-1`}>
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