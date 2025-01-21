import React, { useState } from 'react';
import CardBox from '../assets/CardBox';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';

// Dummy data
const dummyData = [
  {
    backgroundImage: "https://th.bing.com/th/id/OIP.2ZY6_dTCqtDRtH4z9xpqcwHaEK?rs=1&pid=ImgDetMain",
    playlistName: "Product Playlists 1",
    videoCount: 5,
  },
  {
    backgroundImage: "https://th.bing.com/th/id/OIP.Fy6UTxsoxd77WKr4jS3LQwHaD4?rs=1&pid=ImgDetMain",
    playlistName: "Product Playlists 2",
    videoCount: 12,
  },
  {
    backgroundImage: "https://i.pinimg.com/736x/f0/f3/e8/f0f3e875426ffc6a84dc6b9c27b3f96c--spirit-world-the-spirit.jpg",
    playlistName: "Product Playlists 3",
    videoCount: 8,
  },
  {
    backgroundImage: "https://th.bing.com/th/id/OIP.breEW9lfe1KLPWaUvz_EzwAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    playlistName: "Product Playlists 4",
    videoCount: 6,
  },
  {
    backgroundImage: "https://th.bing.com/th/id/OIP.NVaAP9-ktYYK_iGlL2EFJQHaFj?rs=1&pid=ImgDetMain",
    playlistName: "Product Playlists 5",
    videoCount: 15,
  },
  {
    backgroundImage: "https://th.bing.com/th/id/OIP.V-D_x-wSDO3IDslrHgmtwAHaFi?w=640&h=479&rs=1&pid=ImgDetMain",
    playlistName: "Product Playlists 6",
    videoCount: 3,
  },
];

// Midbar component
const Midbar = () => {
  const [playlists, setPlaylists] = useState(dummyData);  // Store state for dynamic changes

  const MidbarWrapper = styled.div`
    position: fixed;
    top: 150px;
    left: 24%;
    width: 55vw;
    height: 73vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #27272f;
  `;

  const CardDiv = styled.div`
    margin: 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  `;

  return (
    <MidbarWrapper>
      <CardDiv>
        {playlists.map((ele, idx) => (
          <DraggableCard key={idx} index={idx} data={ele} moveCard={moveCard} />
        ))}
      </CardDiv>
    </MidbarWrapper>
  );

  function moveCard(fromIndex, toIndex) {
    const updatedPlaylists = [...playlists];
    const [movedCard] = updatedPlaylists.splice(fromIndex, 1);
    updatedPlaylists.splice(toIndex, 0, movedCard);
    setPlaylists(updatedPlaylists);
  }
};

// DraggableCard component
const DraggableCard = ({ index, data, moveCard }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'CARD',
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index); // Move the card
        item.index = index; // Update the index of the dragged card
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <CardBox data={data} />
    </div>
  );
};

export default Midbar;
