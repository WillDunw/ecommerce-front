import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  height: 200px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const ImageButtons = styled.div`
  display: flex;
  justify-content:center;
  gap: 10px;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 1px solid #ccc;
${props => props.active? `
border-color: #ccc;
` : `
border-color: transparent;
opacity: 0.6;
z-index:0;
`}

  height: 50px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
            key={image}
          >
            <Image src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
