import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <img src="/logo.svg" alt="Fylo" className="header-logo" />
      <nav>
        <ul>
          <li className="head">Features</li>
          <li className="head">Team</li>
          <li className="head">Sign In</li>
        </ul>
      </nav>
    </header>
  )
}

function Illustration() {
  return (
    <div className="illustration-container">
      <div className="illustration">
        <img src="/illustration-intro.png" />
      </div>
      <div className="illustration-heading">
        <h1>All your files in one secure location, accessible anywhere.</h1>
      </div>
      <div className="illustration-text">
        <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers. </p>
      </div>
      <div className="illustration-button">
        <button type="button">Get Started</button>
      </div>
    </div>
  )
}

function Advantage(props) {
  return (
    <div className="advantage-container">
      <div className="advantage-image">
        <img src={props.img} alt={props.heading} />
      </div>
      <div className="advantage-heading">
        <h2>{props.heading}</h2>
      </div>
      <div className="advantage-text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

function AdvantageList() {
  return (
    <div className="adv-l">
      <div className="advantage-list-container">
        <Advantage
          img="/icon-access-anywhere.svg"
          heading="Access your files, anywhere"
          text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <Advantage
          img="/icon-security.svg"
          heading="Security you can trust"
          text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
        <Advantage
          img="/icon-collaboration.svg"
          heading="Real-time collaboration"
          text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <Advantage
          img="/icon-any-file.svg"
          heading="Store any time of file"
          text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </div>
    </div>
  )
}

function AdvantagesConclusion() {
  return (
    <div className="adv-conc-container">
      <div className="adv-conc-illustration">
        <img src="/illustration-stay-productive.png" />
      </div>
      <div className="adv-conc-text-container">
        <div className="adv-conc-heading">
          <h2>Stay productive, wherever you are</h2>
        </div>
        <div className="adv-conc-text">
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        </div>
        <div className="adv-conc-text">
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <div className="adv-conc-text">
          <p>See how Fylo works</p>
        </div>
      </div>
    </div>
  )
}

function Quote(props) {
  return (
    <div class="quote-container">
      <div class="quote-text">
        <p className="quote-p">{props.text}</p>
      </div>
      <div class="quote-image">
        <img src={props.img} className="quote-img" />
      </div>
      <div class="quote-name">
        <h3>{props.name}</h3>
      </div>
      <div class="quote-title">
        <h4>{props.title}</h4>
      </div>
    </div> 
  )
}

function QuoteList() {
  return (
    <div className="quote-list-container">
      <Quote
      text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
      img="/profile-1.jpg"
      name="Satish Patel"
      title="Founder & CEO, Huddle"
    />
    <Quote
      text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
      img="/profile-2.jpg"
      name="Bruce McKenzie"
      title="Founder & CEO, Huddle"
    />
    <Quote
      text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
      img="/profile-3.jpg"
      name="Iva Boyd"
      title="Founder & CEO, Huddle"
    />
    </div>
  )
}

function SubscribeBox() {
  return (
    <div className="subscribe-box">
        <div className="subscribe">
          <h2 className="sub-h">Get early access today</h2>
        </div>
        <div className="subscribe">
          <p className="sub-p"> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <div className="subscribe-large">
          <div className="subscribe">
            <input type="text" placeholder="email@example.com" />
          </div>
          <div className="subscribe">
            <button type="button">Get Started For Free</button>
          </div>
        </div>
      </div>
  )
}

function ContactInfo(props) {
  return (
    <div className="footer-container">
      <div className="footer-img-cont">
        <img src={props.img} className="footer-img"/>
      </div>
      <div className="footer-text">
        <p className="sub-p">{props.text}</p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <SubscribeBox />
      <div className="footer-svg-container">
        <img src="/logo.svg" />
      </div>
      <div className="footer-large">
        <ContactInfo
          img="/icon-location.svg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <div className="contact-large">
          <ContactInfo
            img="/icon-phone.svg"
            text="+1-543-123-4567"
          />
          <ContactInfo
            img="/icon-email.svg"
            text="example@fylo.com"
          />
        </div>
        <div className="footer-container">
          <nav>
            <ul>
              <li className="foot">About Us</li>
              <li className="foot">Jobs</li>
              <li className="foot">Press</li>
              <li className="foot">Blog</li>
            </ul>
          </nav>
        </div>
        <div className="footer-container">
          <nav>
            <ul>
              <li className="foot">Contact Us</li>
              <li className="foot">Terms</li>
              <li className="foot">Privacy</li>
            </ul>
          </nav>
        </div>
    </div>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Illustration />
      <AdvantageList />
      <AdvantagesConclusion />
      <QuoteList />
      <Footer />
    </div>
  );
}

export default App;
