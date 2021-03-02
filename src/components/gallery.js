import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { graphql, useStaticQuery } from "gatsby";

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const images = useStaticQuery(graphql`
    query {
      photo: allFile(filter: { relativeDirectory: { glob: "photography/*" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                srcSet
                originalName
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const photos = images.photo.edges.map(({ node }) => ({
    ...node.childImageSharp.fluid,
    width: node.childImageSharp.fluid.presentationWidth,
    height: node.childImageSharp.fluid.presentationHeight
  }));

  return (
    <div>
      <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.originalName
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PhotoGallery;
