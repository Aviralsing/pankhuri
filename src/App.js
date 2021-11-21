import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Row, Col } from 'react-grid-system';

function Link(props) {
  return <a className={"link " + (props.mode === "dark" ? "link--dark" : "link--light")} href={props.url} rel="noreferrer" target="_blank">{props.title}</a>
}

function Card(props) {
  return (
    <div className="card">
    <div className="card__bookmark">
      {props.type}
    </div>
      <div className="card__header">
        <div className="card__header__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="card__header__content">
          <div className="card__header__content__title">{props.date}</div>
          <div className="card__header__content__divider"></div>
          <div className="card__header__content__subtitle">{props.duration}</div>
        </div>
      </div>
      <div className="card__body">
        <div className="card__body__title">
          {props.title}
        </div>
        <div className="card__body__subtitle">
          <div className="card__body__subtitle__author">
            By {props.author}
          </div>
          <div className="card__body__subtitle__link">
            <a class="card__body__subtitle__link__element" href="https://pankhuri.co/register/771"><span>Buy Now</span><strong><span>Rs 25/-</span></strong></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconLink(props) {
  return (
    <div className="icon-link">
      <div className="icon-link__icon">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="icon-link__title">{props.title}
      </div>
    </div>
  )
}

function Container(props){
  return (<div className="container">{props.children}</div>)
}

function Jumbotron(props){
  return (
    <div className="jumbotron">
      <nav className="jumbotron__nav">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <Link url="http://onelink.to/hr3hu4" title="Download App" />
        </div>
      </nav>
      <div className="jumbotron__content">
        <div className="jumbotron__content__title">{props.title}</div>
        <div className="jumbotron__content__subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}

class App extends React.Component {

  render(){
    return (
      <>
      <Jumbotron title="India's Most Trusted Masterclasses" subtitle="Making Beauty Accessible & Affordable" />
      <Container>
        <Row>
          <Col xs={3}>
          </Col>
          <Col xs={9}>
            <Row>
              <Card type="Recorded" image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75" title="Making Of Henna Paste And Cone" author="Komal" price={25} date="31 Oct" duration="60 minutes" />
              <Card type="Recorded" image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75" title="Making Of Henna Paste And Cone" author="Komal" price={25} date="31 Oct" duration="60 minutes" />
              <Card type="Recorded" image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75" title="Making Of Henna Paste And Cone" author="Komal" price={25} date="31 Oct" duration="60 minutes" />
              <Card type="Recorded" image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75" title="Making Of Henna Paste And Cone" author="Komal" price={25} date="31 Oct" duration="60 minutes" />
            </Row>
          </Col>
        </Row>
      </Container>
      </>
    )
  }

}
export default App;
