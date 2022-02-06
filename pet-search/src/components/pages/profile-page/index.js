import React from "react";
import { Nav } from "react-bootstrap";
import FoundInfo from "./found-info";
import LostInfo from "./lost-info";
import AccountInfo from "./pages-info";

export default function ProfilePage() {
  const [link, setLink] = React.useState("info");
  const pages = {
    info: <AccountInfo />,
    found: <FoundInfo />,
    lost: <LostInfo />,
  };

  return (
    <div className="inline-flex" style={{ minHeight: "inherit" }}>
      <Nav
        defaultActiveKey="info"
        className="flex-column w-48 bg-neutral-500 text-center"
        onSelect={(key) => setLink(key)}
      >
        <Nav.Link eventKey="info" className="hover:bg-neutral-700 text-white ">
          Account info
        </Nav.Link>
        <Nav.Link eventKey="found" className="hover:bg-neutral-700 text-white">
          Found pets
        </Nav.Link>
        <Nav.Link eventKey="lost" className="hover:bg-neutral-700 text-white">
          Lost pets
        </Nav.Link>
      </Nav>
      <div className="profile-nav">{pages[link]}</div>
    </div>
  );
}
