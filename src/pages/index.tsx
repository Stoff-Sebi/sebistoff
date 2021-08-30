
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import BaseLayout from "../components/shared/layouts/BaseLayout";
import StyleOverlay from "../components/static/EntryHero";
const orcid = require("../../api/orcid");

const IndexPage: React.FC = () => {
  return (
    <>
    
    <Button onClick={() => {
      orcid.OrcidAPI.fetchPubPerson("0000-0001-6941-113X");
    }}>Test fetch</Button>

    <BaseLayout>
      <StyleOverlay></StyleOverlay>
      <Row>
        <Col md={6}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Hi, I'm Sebastian Stoff!</h1>
          <h2 className="text-secondary">Pleasure to meet you!</h2>
          <br></br>
          <Button variant="primary">Request meeting</Button>
        </Col>
        <Col md={6}>
          <br></br>
          <br></br>
          <br></br>
          <img src="/illustrations/dev.svg" style={{maxWidth:"38vw"}}></img>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Projects</h2>
    </BaseLayout>
    </>
  )
}

export default IndexPage
