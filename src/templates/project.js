import React from "react";
import "../utils/css/project.scss";
import Hero from "../components/hero";
import Brief from "../components/brief";
import Card from "../components/card";
import VideoBox from "../components/videoBox";

function template({
  //hero
  hero,
  heroTitle,
  heroParagraph,
  // breif
  title,
  paragraph,
  one,
  two,
  three,
  postscript,
  //card
  cardData
}) {
  const column1Data = (cardData && [...cardData].splice(0, 1)) || [];
  const column2Data = (cardData && [...cardData].splice(1, 2)) || [];
  const column3Data = (cardData && [...cardData].splice(-3)) || [];

  const mapCard = ({ title, imageUrl, paragraph }) => (
    <Card cardImg={imageUrl} cardTitle={title} cardParagraph={paragraph} />
  );

  return (
    <div>
      <Hero
        heroImg={hero}
        heroTitle={heroTitle}
        heroParagraphy={heroParagraph}
      />
      <Brief
        briefTitle={title}
        briefParagraphy={paragraph}
        one={one}
        two={two}
        three={three}
        postscript={postscript}
      />
      <container>
        <section className="divide-1">{column1Data.map(mapCard)}</section>
        <section className="divide-2">{column2Data.map(mapCard)}</section>
        <section className="divide-3">{column3Data.map(mapCard)}</section>
        <section className="row full">
          <div className="col-12">
            <VideoBox
              src="https://www.youtube.com/watch?v=6bwmlRzt8TE"
              description="p.s concept got proved by apple in their latest iteration of ipad aimed at the education sector: here is the keynote summarised by verge."
            />
          </div>
        </section>
      </container>
    </div>
  );
}

export default template;
