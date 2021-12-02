import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Row, Col } from "react-grid-system";
import { Grid } from "swiper";
import QuoteImg from "./quote.svg";

function Link(props) {
  return (
    <a
      className={
        "link " + (props.mode === "dark" ? "link--dark" : "link--light")
      }
      href={props.url}
      rel="noreferrer"
      target="_blank"
    >
      {props.title}
    </a>
  );
}

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.currentIndex || 0,
    };
  }

  render() {
    return (
      <div className="tabbar">
        <Row>
          <Col xs={3}>
            {this.props.tabs.map((e) => (
              <div
                onClick={(event) => {
                  console.log(event);
                }}
              >
                {e}
              </div>
            ))}
          </Col>
          <Col xs={9}>{this.props.children}</Col>
        </Row>
      </div>
    );
  }
}

function Card(props) {
  return (
    <div className="card">
      <div
        className={`card__bookmark ${
          props.mode === "recorded" ? "card__bookmark__secondary" : ""
        }`}
      >
        {props.type}
      </div>
      <div className="card__header">
        <div className="card__header__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="card__header__content">
          <div className="card__header__content__title">{props.date}</div>
          <div className="card__header__content__divider"></div>
          <div className="card__header__content__subtitle">
            {props.duration}
          </div>
        </div>
      </div>
      <div className="card__body">
        <div className="card__body__title">{props.title}</div>
        <div className="card__body__subtitle">
          <div className="card__body__subtitle__author">By {props.author}</div>
          <div className="card__body__subtitle__link">
            <a
              class="card__body__subtitle__link__element"
              href="https://pankhuri.co/register/771"
            >
              <span>Apply now</span>
              <strong>
                <span>Rs {props.price}/-</span>
              </strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconLink(props) {
  return (
    <div className="icon-link">
      <div className="icon-link__icon">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="icon-link__title">{props.title}</div>
    </div>
  );
}

function Container(props) {
  return <div className="container">{props.children}</div>;
}

function Jumbotron(props) {
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
           <nav className="view_all_opening_link">
            <a
              class="view__all__opening__link__element"
              href="https\\"
            >
              <span>View all Openings</span>
            </a>
           </nav>
        </div>
    </div>
  );
}

function ProfileCard(props) {
  return (
    <div className="profile__card">
      <div className="profile__card__image">
        <img src={props.image} alt={props.title} />
      </div>
      <h3 className="profile__card__title">{props.title}</h3>
      <h4 className="profile__card__subtitle">{props.subtitle}</h4>
      <div className="profile__card__container">
        <div className="profile__card__content">
          <div className="profile__card__content__title">
            {props.experience}
          </div>
          <div className="profile__card__content__subtitle">Years of Exp</div>
        </div>
        <div className="profile__card__divider"></div>
        <div className="profile__card__content">
          <div className="profile__card__content__title">
            {props.classesTaken}
          </div>
          <div className="profile__card__content__subtitle">Classes Taken</div>
        </div>
        <div className="profile__card__divider"></div>
        <div className="profile__card__content">
          <div className="profile__card__content__title">{props.students}</div>
          <div className="profile__card__content__subtitle">
            Students taught
          </div>
        </div>
      </div>
      <a href="/" className="profile__card__cta">
        View Classes
      </a>
    </div>
  );
}

function InvestorCard(props) {
  return (
    <div className="investor__card">
      <div className="investor__card__image">
        <img src={props.image} alt={props.title} />
      </div>
      <h4 className="investor__card__title">{props.title}</h4>
      <h4 className="investor__card__subtitle">{props.subtitle}</h4>
      </div>
  );
}

function ReviewCard(props) {
  return (
    <div className="review__card">
      <div className="review__card__container">
        <div className="review__card__title">
          <img
            className="review__quote"
            alt={"review"}
            height={36}
            src={QuoteImg}
          />
        </div>
        <div className="review__card__subtitle">{props.review}</div>
      </div>
      <div className="review__card__footer">
        <h3 className="review__card__content__title">{props.author}</h3>
      </div>
    </div>
  );
}

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__title">Learn from our top trainers</div>
      <div className="banner__container">
        <ProfileCard
          image={
            "https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fd2mg4f939tfgga.cloudfront.net%2FIMG_8844F2F9CE4C-7FAC-46C5-9FBF-C3BC86FABF28_compressed.jpg&w=384&q=75"
          }
          title="Komal"
          subtitle="Others"
          experience={1}
          classesTaken={96}
          students={260}
        />
        <ProfileCard
          image={
            "https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fd2mg4f939tfgga.cloudfront.net%2FIMG_8844F2F9CE4C-7FAC-46C5-9FBF-C3BC86FABF28_compressed.jpg&w=384&q=75"
          }
          title="Komal"
          subtitle="Others"
          experience={1}
          classesTaken={96}
          students={260}
        />
        <ProfileCard
          image={
            "https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fd2mg4f939tfgga.cloudfront.net%2FIMG_8844F2F9CE4C-7FAC-46C5-9FBF-C3BC86FABF28_compressed.jpg&w=384&q=75"
          }
          title="Komal"
          subtitle="Others"
          experience={1}
          classesTaken={96}
          students={260}
        />
        <ProfileCard
          image={
            "https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fd2mg4f939tfgga.cloudfront.net%2FIMG_8844F2F9CE4C-7FAC-46C5-9FBF-C3BC86FABF28_compressed.jpg&w=384&q=75"
          }
          title="Komal"
          subtitle="Others"
          experience={1}
          classesTaken={96}
          students={260}
        />
      </div>
    </div>
  );
}

function ReviewBanner(props) {
  return (
    <div className="review__banner">
      <div className="review__banner__title">
        What do our students have to say
      </div>
      <div className="review__banner__container">
        <ReviewCard
          review={
            "This app is very useful for every modern women who wants to look beautiful and have passion about self grooming or towards the beauty.they do provide a digital certificate for every course we complete that's the best thing.I love this app and we can learn everything in very affordable prices from the experts."
          }
          author={"Sejal Yadav"}
        />
      </div>
    </div>
  );
}

function InvestorBanner(props) {
  return (
    <div className="investor_banner">
      <div className="investor_logo">
      <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\sequoia.png"
        }
       />
       <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\indiaQuotent.png"
        }
       />
       <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\taurus.png"
        }
       />
      </div>
    <div className="investor_card">
       <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\kunal shah.png"
        }
        title="Kunal Shah"
        subtitle="(cred)"
        />
          <h3>Kunal Shah</h3>
       <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\farid ahsan.png"
        }
        title="Farid Ahsan"
        subtitle="(Share Chat)"
       />
       <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\sai srinivas.png"
        }
        title="Sai Srinivas"
        subtitle="(Mpl)"
       />
       <InvestorCard
        image={
          "C:\Users\Lenovo\test\test\src\images\krishnan Menon.png"
        }
        title="Krishnan Menon"
        subtitle="(Bukukas)"
       />
       <InvestorCard
        image={
          "src\images\sweta Rau.png"
        }
        title="Sweta Rau"
        subtitle="(White Ventures)"
        />
        </div>
        <nav className="join us now">
            <a
              class="join_us_now__link__element"
              href="https\\"
            >
              <span>Join Us Now</span>
            </a>
        </nav>
        
    </div>
    
  );
}

function Paragraph(props) {
  return (
    <div className="para">
    <div className="paragraph_header"><h1>Whats the buzz all about? </h1></div>.
    <div className="paragraph_sub_heading">Pankhuri aims to enable 120 million indian women to learn and shop through live streaming<br/><div> and short videos. Our beauty community is a place where you can watch experts talk about <br/></div>what they know and love,ask them question and discuss it with other cool members all in<br/>real time. Our short video app opens up endless possibilities for women with interest in<br/> fashion, beaty and lifestyle.</div>
      <div className="paragraph_sub_heading_1"><h3>"Backed by marquee investors & Sequoia Capital, Pankhuri was<br/> started by Pankhuri Srivastav who previously co-founded<br/> grabhouse and sold it to Quikr."</h3></div>
      <div className="paragraph_sub_heading_2">Sequoia Capital is an American venture capital firm. The firm is headquatered in Menlo Park,<br/>California and mainly focuses on the technoly industry. it has backed companies that now<br/> control $1.4 trillion of combined stock market value.</div>
      </div>
  )
}

function Investor(props) {
  return (
    <div className="investor_box">
      <div className="investor_header">Our Investors</div>
      <row>
      <div className="investor_top">
        <div className="invester_logo">
            <img src={require('./images/sequoia.png')}alt="sequoia_logo"/>
        </div>
        <div className="invester_logo2">
            <img src={require('./images/indiaQuotent.png')} alt="indiaQuotient_logo"/>
        </div>
        <div className="invester_logo3">
        <img src={require('./images/taurus.png')} alt="taurus logo"/>
        </div>
        </div>
        </row>
        </div>
  )
}

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__logo">
        <div className="footer__logo__image">
          <img
            alt="logo"
            src={
              "https://pankhuri.co/master-class/_next/image?url=%2Fmaster-class%2Fimg%2Flogo-footer.svg&w=3840&q=75"
            }
          />
        </div>
        <div className="footer__logo__copyright">
          &copy; R P Cube Pvt. Ltd. 2021
        </div>
        <div className="footer__wp">
          <div className="footer__wp__image">
            <img
              src={
                "https://pankhuri.co/master-class/_next/image?url=%2Fmaster-class%2Fimg%2Fwhatsapp.png&w=128&q=75"
              }
              alt="Wp"
            />
          </div>
          <div className="footer__wp__content">
            <div className="footer__wp__title">Whatsapp us on</div>
            <div className="footer__wp__subtitle">9698600800</div>
          </div>
        </div>
      </div>
      <div className="footer__menu">
        <div className="footer__menu__content">
          <div className="footer__menu__title">Company</div>
          <ul className="footer__menu__list">
            <li className="footer__menu__list__element">Home</li>
            <li className="footer__menu__list__element">MasterClass</li>
            <li className="footer__menu__list__element">About</li>
            <li className="footer__menu__list__element">Careers</li>
            <li className="footer__menu__list__element">Press</li>
          </ul>
        </div>
        <div className="footer__menu__content">
          <div className="footer__menu__title">Social Media</div>
          <ul className="footer__menu__list">
            <li className="footer__menu__list__element">
              <i class="fab fa-facebook"></i>Facebook
            </li>
            <li className="footer__menu__list__element">
              <i class="fab fa-instagram"></i>Instagram
            </li>
            <li className="footer__menu__list__element">
              <i class="fab fa-twitter"></i>Twitter
            </li>
            <li className="footer__menu__list__element">
              <i class="fab fa-pinterest"></i>Pinterest
            </li>
            <li className="footer__menu__list__element">
              <i class="fab fa-youtube"></i>Youtube
            </li>
          </ul>
        </div>
        <div className="footer__menu__content">
          <div className="footer__menu__title">Quick links</div>
          <ul className="footer__menu__list">
            <li className="footer__menu__list__element">Become a Trainer</li>
            <li className="footer__menu__list__element">Become a Reseller</li>
            <li className="footer__menu__list__element">Privacy Policy</li>
            <li className="footer__menu__list__element">Terms & Conditions</li>
            <li className="footer__menu__list__element">
              Refund & Cancellation
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__apps">
        <div className="footer__apps__title">Download App</div>
        <div className="footer__apps__image">
          <img
            alt="Android app"
            src={
              "https://pankhuri.co/master-class/_next/image?url=%2Fmaster-class%2Fimg%2Fgoogle-play.png&w=384&q=75"
            }
          />
        </div>
        <div className="footer__apps__image">
          <img
            alt="iOS app"
            src={
              "https://pankhuri.co/master-class/_next/image?url=%2Fmaster-class%2Fimg%2Fapp-store.png&w=384&q=75"
            }
          />
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
        <Jumbotron
          title="Be a part of the big change."
          subtitle="Build the future of Content,Community&Commerce."
        />
        <Row
          style={{
            justifyContent: "center",
            paddingTop: 72,
            paddingBottom: 72,
          }}
        >
          <Card
            type="Live"
            mode={"live"}
            image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75"
            title="Product Manager"
            author="Komal"
            price={25}
            date="31 Oct"
            duration="60 minutes"
          />
          <Card
            type="Live"
            mode={"live"}
            image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75"
            title="Making Of Henna Paste And Cone"
            author="Komal"
            price={25}
            date="31 Oct"
            duration="60 minutes"
          />
          <Card
            type="Live"
            mode={"live"}
            image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75"
            title="Making Of Henna Paste And Cone"
            author="Komal"
            price={25}
            date="31 Oct"
            duration="60 minutes"
          />
          <Card
            type="Live"
            mode={"live"}
            image="https://pankhuri.co/master-class/_next/image?url=https%3A%2F%2Fmedia.pankhuri.co%2FKhadiData%2Fcourse_705%2Fcid705_131946.jpg&w=3840&q=75"
            title="Making Of Henna Paste And Cone"
            author="Komal"
            price={25}
            date="31 Oct"
            duration="60 minutes"
          />
          
        </Row>
        <Paragraph />
        <InvestorBanner />
        <Banner />
        
        <ReviewBanner />
        
        <Footer />
      </>
    );
  }
}
export default App;
