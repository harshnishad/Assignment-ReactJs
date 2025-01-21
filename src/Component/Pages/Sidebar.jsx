import styled from "styled-components";
import {
  AppsOutline,
  GridOutline,
  HomeOutline,
  NewspaperOutline,
  NotificationsOutline,
  PeopleOutline,
  PieChartOutline,
} from "react-ionicons";

const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width:20vw;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
   margin:30px;
  border-radius:20px;
`;

const LogoWrapper = styled.div`
  font-size:30px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: "flex-start";
  align-items: center;
  padding-left: 3vw;
  background-color: #27272F;
  
`;

const LogoText = styled.span`
  font-family: "Signika Negative", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: #fff;
  font-weight: 600;
  font-size: 30px;
`;

const NavLinksWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  border-right: 1px solid #cbd5e1;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isExpanded ? "flex-start" : "center")};
  gap: 0.5rem;
  padding: 1.25rem;
  background-color: #27272F;
  position: relative;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  border: ${(props) => (props.active ? "+1px solid blue;" : "transparent")};
  &:hover {
   border:1px solid blue;
  
  }
`;

const NavLinkText = styled.span`
  font-weight: 500;
  font-size: 0.9375rem;
  display: ${(props) => (props.isExpanded ? "block" : "none")};
`;



const Sidebar = () => {
  const navLinks = [
    {
      title: "Revenue",
      icon: <HomeOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Shoppable video",
      icon: <AppsOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Story",
      icon: <GridOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Live Commerce",
      icon: <PieChartOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Playlist Manager",
      icon: <PeopleOutline color="#555" width="22px" height="22px" />,
      active: true,
    },
    {
      title: "One Click Post",
      icon: <NotificationsOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
      title: "Calender",
      icon: <NewspaperOutline color="#555" width="22px" height="22px" />,
      active: false,
    },
    {
        title: "Hire Influencer",
        icon: <NewspaperOutline color="#555" width="22px" height="22px" />,
        active: false,
      }
  ];

  return (
    <SidebarWrapper isExpanded={true}>
      <LogoWrapper isExpanded={true}>
        <LogoText>blaash</LogoText>
      </LogoWrapper>
      <NavLinksWrapper isExpanded={true}>
        {navLinks.map((link) => (
          <NavLink key={link.title} active={link.active}>
            {link.icon}
            <NavLinkText isExpanded={true}>{link.title}</NavLinkText>
          </NavLink>
        ))}
        
      </NavLinksWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
