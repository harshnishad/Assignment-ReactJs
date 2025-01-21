import styled from "styled-components";

const PlayList = () => {
    const PlayListWrapper = styled.div`
     display:flex;
     margin-top:20px;
     border:2px solid #33333B;
     border-radius:10px;
    `;
    
    const ImageDiv = styled.div``;
    const Img = styled.img`
     border-radius:10px;
     margin:5px 0 0 0;
    `;
    const Description = styled.div`
     margin-left:20px;

    `;
    const Title = styled.p`
      font-size:12px;
      margin:0px;
    `;
    const Time = styled.p`
      font-size:12px;
      background-color:#35373B;
      text-align:center;
      width:43px;
      border-radius:20px;
      
      margin:1px;
    `;
    const Text = styled.p`
    font-size:14px;
     margin:1px;
    `;
  return (
    <PlayListWrapper>
       <ImageDiv >
              <Img src="https://www.bing.com/th?id=OADD2.7971511979590_1U2Y297CI8YR7XYF87&pid=21.2&c=16&roil=0&roit=0&roir=1&roib=1&w=300&h=157&dynsize=1&qlt=90"  height={50} width={70} />
       </ImageDiv>
       <Description>
         <Title>
              Video Title Name
         </Title>
          <Time>
               4:05:60
          </Time>
          <Text>
            Products Attached : 5
          </Text>
       </Description>
    </PlayListWrapper>
  )
}

export default PlayList