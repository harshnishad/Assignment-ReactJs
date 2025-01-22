import styled from "styled-components";

const CardBox = ({ data }) => {
  
  const { backgroundImage, playlistName, videoCount } = data;

  const CardWrapper = styled.div`
    width: 15vw;
    height: 23vh;
    background-color: black;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px 0 0 0;
  `;

  const PlayListName = styled.div`
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1vh;
  `;

  const Section = styled.div`
    margin-top: 16vh;
  `;

  const PlayListCount = styled.div`
    background-color: #1c1c23;
    height: 4vh;
    border-radius: 0 0 24px 24px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  `;

  const Logo = styled.img`
    width: 20px;
    height: 20px;
  `;

  const PlayListCountText = styled.p`
    margin: 0;
    color: white;
    font-size: 12px;
  `;

  return (
    <CardWrapper backgroundImage={backgroundImage}>
      <Section>
        <PlayListName>{playlistName}</PlayListName>
        <PlayListCount>
          <Logo
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/video-playlist.png"
            alt="video-playlist"
          />
          <PlayListCountText>{videoCount} Videos</PlayListCountText>
        </PlayListCount>
      </Section>
    </CardWrapper>
  );
};

export default CardBox;
