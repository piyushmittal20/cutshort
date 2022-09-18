import logo from "../lottie/88860-success-animation.gif";

const CongratsPage = ({ formik }) => {
  return (
    <div className="page-section">
      <img className="image" src={logo} />
      <h1 className="detail-heading">
        Congratulations, {formik.values.displayname}
      </h1>
      <p className="detail-subheading">
        You have completed onboarding, you can start using the Eden!
      </p>
    </div>
  );
};

export default CongratsPage;
