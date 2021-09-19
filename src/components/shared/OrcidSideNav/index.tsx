import { Link } from "gatsby";
import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Orcid } from "../../../types/orcid";
import MyStringUtils from "../../../utils/MyStringUtils";
import OrcidIconBar from "../OrcidIconBar";

interface Props {
  orcidRoot: Orcid.RootObject
}

const OrcidSideNav: React.FC<Props> = (props) => {

  const resolvePersName = (root: Orcid.RootObject) => {
    const foreName = MyStringUtils.catchToString(() => root.person.name["given-names"].value.toString());
    const familyName = MyStringUtils.catchToString(() => root.person.name["family-name"].value.toString());
    return foreName + " " + familyName;
  }

  return <div id="sideNav" style={{ position: "fixed", top: 0, left: 0, width: "280px", height: "100vh", padding: "1.25em" }} className="text-center text-light bg-secondary d-none d-lg-block">
    <h2 className="h5 fw-bold">
      {resolvePersName(props.orcidRoot)}
    </h2>
    <img
      alt="Main profile picture"
      src={
        process.env.LINK_TO_PROFILE_IMG
          ? process.env.LINK_TO_PROFILE_IMG
          : "/img/profile.jpg"
      }
      width={150}
      height={150}
      style={{ borderRadius: "100%", filter: "grayscale(150%)", margin: "1em 0" }}
    ></img>
    <br />
    <p className="text-light" style={{ lineHeight: 1.35 }}>
      <small>Hi, my name is {resolvePersName(props.orcidRoot)} and I'm a {props.orcidRoot["activities-summary"].employments["employment-summary"][0][
        "role-title"
      ].toLowerCase()}. Welcome to my personal page!</small>
    </p>
    <OrcidIconBar
      orcidURL={props.orcidRoot["orcid-identifier"].uri}
      researchURLs={
        props.orcidRoot.person["researcher-urls"][
        "researcher-url"
        ]
      }
      mail={
        props.orcidRoot.person.emails.email[0] &&
        props.orcidRoot.person.emails.email[0].email
      }
    />
    <hr />
    <Nav defaultActiveKey="/home" className="flex-column text-start">
      <Nav.Link as="div" className="text-light p-0"><Link className="text-light text-decoration-none" to="/">Home</Link> </Nav.Link>
      <Nav.Link as="div" eventKey="link-1" className="text-light p-0"><Link className="text-light text-decoration-none" to="/#biography">Biography</Link></Nav.Link>
      <Nav.Link as="div" eventKey="link-2" className="text-light p-0"><Link className="text-light text-decoration-none" to="/#employments">Employment</Link></Nav.Link>
      <Nav.Link as="div" eventKey="link-3" className="text-light p-0"><Link className="text-light text-decoration-none" to="/">Works</Link></Nav.Link>
      <Nav.Link as="div" eventKey="link-4" className="text-light p-0"><Link className="text-light text-decoration-none" to="/">Education</Link></Nav.Link>
      <Nav.Link as="div" eventKey="link-5" className="text-light p-0"><Link className="text-light text-decoration-none" to="/imprint">Imprint</Link></Nav.Link>
    </Nav>

    <hr />
    <a aria-label="Write a mail to the author of the page" className="btn btn-outline-warning" href={`mailto:${props.orcidRoot.person.emails.email}`}>Get in Touch</a>
  </div>

}


export default OrcidSideNav;