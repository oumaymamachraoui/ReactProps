import React from "react";
import Proptypes from "prop-types";
function Profile(props) {
  const handleName = () => alert("Machraoui Oumayma");
  return (
    <div>
      {props.child }
      <p>
        Je suis {props.fullName} {props.bio} m'a profession c'est{" "}
        {props.profession}{" "}
      </p>
      <button onClick={handleName}> click me! </button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Oumayma",
  profession: "fullstack developper",
  bio: "j'ai 25 ans ",
};

Profile.prototypes = {
  fullName: Proptypes.string,
  profession: Proptypes.number,
};

export default Profile;
