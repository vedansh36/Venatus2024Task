import "./vematus.css";
export default function DiscountBanner() {
  return (
    <div className="banner">
      <span>
        <p className="banner-para">
          Save 50% for 12 months <br /> - limited time offer.{" "}
          <a
            href="https://mailchimp.com/pricing/marketing/"
            className="banner-link"
          >
            Get started today.
          </a>{" "}
        </p>
      </span>
    </div>
  );
}
