import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Link from "next/link";

const AboutDescription = () => {
  return (
    <section className="about-description">
      <Container className="spcmy-60">
        <Row>
          <Col xs={12} lg={6} className="text-center">
            <img
              src="/images/aboutus-plane.png"
              className="aboutus-wfull"
              alt="About Us"
            />
            <ul className="bullets-abtdis text-center">
              <li>
                <Icon icon="ph:check-bold" color="#eabe6c" /> Flights
              </li>
              <li>
                <Icon icon="ph:check-bold" color="#eabe6c" /> Hotels
              </li>
              <li>
                <Icon icon="ph:check-bold" color="#eabe6c" /> Packages
              </li>
            </ul>
            <div className="stylereuse-1">
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus
                felis dui sed. Mauris dui elementum in cursus consequat eu
                lobortis lacus. Semper ut lacinia vitae aliquam vulputate
              </p>
            </div>

            <Link href="/contact-us">
              <a className="btn ripple-wv reqinfo-btn" target="_blank">
                <span>Request for more info</span>
              </a>
            </Link>
          </Col>
          <Col xs={12} lg={6} className="mt-5 mt-lg-0 text-center text-lg-left">
            <div className="stylereuse-1">
              <div className="section-heading">
                <h3>About Us</h3>
              </div>
              <h4>
                We eliminate the weeds that take your freedom of getting cheap
                air tickets
              </h4>
              <p>
              Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur. Eu egestas quam faucibus felis dui sed. Mauris dui elementum in cursus consequat eu lobortis lacus. Semper ut lacinia vitae aliquam vulputate


              </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutDescription;
