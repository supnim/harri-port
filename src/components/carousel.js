import React from "react";
import Img from "gatsby-image";
import Carousel from "react-bootstrap/Carousel";
import "../utils/css/components/carousel.css";

function Slide({
  one,
  two,
  three,
  four,
  five,
  oneAlt,
  twoAlt,
  threeAlt,
  fourAlt,
  fiveAlt,
  style
}) {
  return (
    <section>
      <Carousel>
        {!!one && (
          <Carousel.Item>
            <Img fluid={one} />
            <Carousel.Caption>
              {!!oneAlt && <b style={style}>{oneAlt}</b>}
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {!!two && (
          <Carousel.Item>
            <Img fluid={two} />
            <Carousel.Caption>
              {!!twoAlt && <b style={style}>{twoAlt}</b>}
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {!!three && (
          <Carousel.Item>
            <Img fluid={three} />
            <Carousel.Caption>
              {!!threeAlt && <b style={style}>{threeAlt}</b>}
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {!!four && (
          <Carousel.Item>
            <Img fluid={four} />
            <Carousel.Caption>
              {!!fourAlt && <b style={style}>{fourAlt}</b>}
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {!!five && (
          <Carousel.Item>
            <Img fluid={five} />
            <Carousel.Caption>
              {!!fiveAlt && <b style={style}>{fiveAlt}</b>}
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </section>
  );
}
export default Slide;
