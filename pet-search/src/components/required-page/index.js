import React, { Component } from "react";
import report from "../../images/report.png";
import girlwithdog from "../../images/girlwithdog.jpg";
import { Button } from "react-bootstrap";
export default class RequiredPage extends Component {
  render() {
    return (
      <div>
        <div className="bg-amber-400 w-full h-[710px]">
          <div className="text-center text-8xl text-white font-light pt-20">
            Join our family
          </div>
          <img src={report} className="ml-auto mr-auto pt-24" />
        </div>

        <div className=" pt-[70px] pb-[70px] pl-[15px] pr-[15px] flex w-[1170px] h-[570px] ml-[250px] mr-[50px]">
          <img src={girlwithdog} className="w-[360px] h-[430px] " />
          <div className="w-[72rem] h-[430px] ml-16">
            <p className="font-light text-xl">
              If you've found a stray pet and you need to find the owner then
              your in the right place. By uploading pictures here (if you choose
              to) and/or a description then our website will Auto-Match (which
              means data is compared) to give you the closest matches with pets
              reported lost. If at first we don't succeed then we'll check
              everyday free of charge for you, until we find the owner or you
              close the case.
            </p>
            <br />
            <br />
            <h3 className=" font-light">Do you have an account?</h3>
            <p className="font-light text-xl mt-2">
              Before you can report this found pet, we just need to take a few
              details from you. This should only take a couple of minutes. If
              you already have an account then login using the button below.
            </p>
            <br />
            <p>
              <Button
                variant="outline-dark"
                href="/React-project/login"
                size="lg"
              >
                <span className="font-light">Login</span>
              </Button>
              <Button
                variant="outline-dark"
                href="/React-project/register"
                className="ml-24"
                size="lg"
              >
                <span className="font-light"> Register</span>
              </Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
