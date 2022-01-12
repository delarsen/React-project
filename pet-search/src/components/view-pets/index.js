import { Component } from "react";
import { Col, Button } from "react-bootstrap";
import catanddog from "../../images/catanddog.jpg";

class ViewPetsPage extends Component {
  render() {
    return (
      <div>
        <div className="w-full h-48 bg-amber-400 text-center pt-12 text-7xl text-white font-light">
          Search our site for missing or found pets:
        </div>
        <div className="w-full h-48 mb-8">
          <h2 className="font-light text-inherit text-6xl text-center mt-32 ml-24">
            Register your missing pet here:
          </h2>
          <Button
            type="button"
            className="center relative left-2/4 mt-3 "
            size="lg"
            href="/pet-search/reportlostpet"
          >
            <span className="font-light ">Register</span>
          </Button>
        </div>
        <div className="w-full h-96 bg-slate-100 flex space-x-96 justify-center">
          <span className="ml-36 mt-28 font-light ">
            <h3 className="font-light">
              <b>Missing</b> Pets
            </h3>
            <p className="text-lg">
              Browse pets reported missing by their owner.
            </p>
            <Button>
              <span className="font-light">View Missing</span>
            </Button>
          </span>

          <span className="mt-28 font-light">
            <h3 className="font-light">
              <b>Found</b> Pets
            </h3>
            <p className="text-lg">
              Look through pets reported found by members of the public.
            </p>
            <Button>
              <span className="font-light">View Found</span>
            </Button>
          </span>
        </div>
      </div>
    );
  }
}
export default ViewPetsPage;
