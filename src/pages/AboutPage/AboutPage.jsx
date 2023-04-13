import React, { useEffect, useState } from "react";

import Slider from "../../components/Slider";
import TennisCard from "../../components/TennisCard";

import cort1 from "../../images/cort1.jpg";
import cort2 from "../../images/cort2.jpg";

import s from "./AboutPage.module.scss";

const slides = [
  {
    id: 0,
    image: cort1,
    description: "Голубой корт",
  },
  {
    id: 1,
    image: cort2,
    description: "Закрытый корт",
  },
];

const endpoint = process.env.REACT_APP_ENDPOINT || "";

function AboutPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${endpoint}/cards`);
      const data = await response.json();
      setCards(data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className={s.header}>Header</div>

      <div className={s.main}>
        <div className={s.container}>
          <Slider slides={slides} />
        </div>

        <div className={s.grid}>
          {cards?.length > 0 &&
            cards.map((elem) => (
              <TennisCard
                key={elem.id}
                id={elem.id}
                image={elem.image}
                date={elem.date}
                text={elem.text}
                buttonText={elem.buttonText}
              />
            ))}
        </div>
      </div>
      <div className={s.footer}>Footer</div>
    </div>
  );
}

export default AboutPage;
