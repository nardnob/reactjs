import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h4>Brandon Dixson - nardnob</h4>
              <p>Feel free to contact me using the <a href="/contact">Contact</a> form.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-6 mb-md-0 mb-3">
              <h5>Important Links</h5>
              <ul className="list-unstyled">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/contact">Contact Me</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright text-center py-3">© 2024 Copyright</div>
      </footer>
    </>
  );
}