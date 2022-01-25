import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div onMouseEnter={toggleShow}>{name}</div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className="text-center font-bold mt-10">Refine Results</h4>
          <div className="text-sm text-center">Showing</div>
          <br />
          <div className="md:ml-4 text-center md:text-left">
            <label className="font-semibold">Type of pet</label>
            <br />
            <select
              defaultValue="all"
              className="w-64 h-8"
              //onChange={this.onTypeChange}
            >
              <option key="cat" value="cat">
                cat
              </option>
              <option key="dog" value="dog">
                dog
              </option>
              <option key="bunny" value="bunny">
                bunny
              </option>
              <option key="all" value="all">
                all types
              </option>
            </select>
          </div>
          <br />
          <div className="md:ml-4 text-center">
            <span>
              <label className="font-semibold">From Date:</label>
              <br />
              <input type="date" className="w-64 h-8"></input>
            </span>
            <br />
            <br />
            <span>
              <label className="font-semibold">Till Date:</label>
              <br />
              <input type="date" className="w-64 h-8"></input>
            </span>
          </div>
          <br />
          <div className="md:ml-4 text-center">
            <label className="mb-1 font-semibold">Gender:</label>
            <br />
            <span>
              <input
                type="checkbox"
                value="male"
                name="gender"
                className="w-4 h-4"
              />
              Male
            </span>
            <span className="ml-4">
              <input
                type="checkbox"
                value="female"
                name="gender"
                className="w-4 h-4"
              />
              Female
            </span>
            <span className="ml-4">
              <input
                type="checkbox"
                value="dontknow"
                name="gender"
                className="w-4 h-4"
              />
              Don't know
            </span>
          </div>
          <br />
          <div className="md:ml-4 text-center mb-4 md:mb-0">
            <label className="mb-1 font-semibold">Neutered?</label>
            <br />
            <span>
              <input
                type="checkbox"
                value="yes"
                name="neutered"
                className="w-4 h-4"
              />
              Yes
            </span>
            <span className="ml-4">
              <input
                type="checkbox"
                value="no"
                name="neutered"
                className="w-4 h-4"
              />
              No
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}
export default class OffCanvas extends Component {
  render() {
    return <Example />;
  }
}
