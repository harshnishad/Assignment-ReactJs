import styled from "styled-components"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from "../Pages/Sidebar";
import Topbar from "../Pages/Topbar";
import Midbar from "../Pages/Midbar";
import Rightbar from "../Pages/Rightbar";

function HomePage() {
 const AppDiv = styled.div`
  background-color:#1B1B22;
  height:100vh;
  width:100vw;
  margin:0;
  padding:0;
 `;

  return (
    <AppDiv>
      <Sidebar />
      <Topbar />
      <DndProvider backend={HTML5Backend}>
      <Midbar />
    </DndProvider>
      <Rightbar />
    </AppDiv>
      
    
  )
}

export default HomePage
