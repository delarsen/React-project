import React, { Component, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as userService from "../../services/user-service";
import PagesInfo from "./pages-info";
export default function ProfilePage(props) {
  let { id } = useParams();
  const [user, setUser] = React.useState(null);
  const [link, setLink] = React.useState("info");
  const pages = {
    info: <PagesInfo />,
    found: <div>found</div>,
    lost: <div>lost</div>,
  };

  useEffect(() => {
    if (!user) {
      userService.getUsersById(id).then((response) => setUser(response));
      console.log("user");
    }

    return;
  });

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
      <div style={{ width: "calc(100vw - 12rem)" }}>{pages[link]}</div>
    </div>
  );
}