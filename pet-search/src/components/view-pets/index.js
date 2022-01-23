import { Component } from "react";
import { Col, Button } from "react-bootstrap";
import catanddog from "../../images/catanddog.jpg";

class ViewPetsPage extends Component {
  render() {
    return (
      <div>
        <div className="w-full h-48 bg-amber-400 text-center pt-12 text-3xl text-white font-light sm:text-7xl">
          Search our site for missing or found pets:
        </div>
        <div className="w-full h-48 mb-8 text-center">
          <h2 className="font-light text-inherit text-3xl text-center mt-32  sm:text-6xl">
            Register your missing pet here:
          </h2>
          <Button
            type="button"
            className=" rounded-none  mt-3 "
            size="lg"
            href="/React-project/reportlostpet"
          >
            <span className="font-light ">Register</span>
          </Button>
        </div>
        <div className="w-full h-96 bg-slate-100 flex  justify-center flex-col   md:flex-row  md:space-x-64">
          <span className=" mt-8 font-light md:mt-28">
            <h3 className="font-light">
              <b>Missing</b> Pets
            </h3>
            <p className="text-lg">
              Browse pets reported missing by their owner.
            </p>
            <Button href="/React-project/viewlostpets">
              <span className="font-light">View Missing</span>
            </Button>
          </span>

          <span className="mt-8 font-light md:mt-28">
            <h3 className="font-light">
              <b>Found</b> Pets
            </h3>
            <p className="text-lg">
              Look through pets reported found by members of the public.
            </p>
            <Button href="/React-project/viewfoundpets">
              <span className="font-light">View Found</span>
            </Button>
          </span>
        </div>
      </div>
    );
  }
}
export default ViewPetsPage;
