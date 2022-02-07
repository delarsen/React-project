import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AccountInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div>
      <div className="w-full h-[18rem] bg-amber-400 text-white text-4xl md:text-7xl font-light text-center pt-24">
        Dashboard
      </div>
      <div>
        <span className="flex flex-col text-black text-2xl space-y-4 pt-28 pl-16">
          <span className="font-light text-4xl">
            Welcome {user.name} {user.surname}!
          </span>
          <hr />
          <span className="font-bold text-xl">
            Name:
            <span className="font-light ml-4">
              {user.name} {user.surname}
            </span>
          </span>
          <span className="font-bold text-xl">
            Email: <span className="font-light ml-4">{user.email} </span>
          </span>
        </span>
        <div className="mt-10 ml-10">
          <Button
            variant="outline-dark"
            className="ml-4"
            onClick={() => logOut()}
          >
            <span>Log out</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
