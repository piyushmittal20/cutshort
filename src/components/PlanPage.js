import { useState } from "react";

const PlanPage = ({ formik }) => {
  const [select, setSelect] = useState("");

  return (
    <div className="page-section">
      <h1 className="detail-heading">How are you planing to use Eden?</h1>
      <p className="detail-subheading">
        We will streamline your experience accordingly
      </p>
      <div className="card-container">
        <div
          className={select === "first" ? "card active" : "card"}
          onClick={() => {
            setSelect("first");
            formik.values.usage = "myself";
          }}
        >
          <i className="fa-solid fa-user"></i>
          <h2>For myself</h2>
          <p>Write better. Think more clearly. Stay organized.</p>
        </div>
        <div
          className={select === "second" ? "card active" : "card"}
          onClick={() => {
            setSelect("second");
            formik.values.usage = "team";
          }}
        >
          <i className="fa-solid fa-user-group"></i>
          <h2>With my team</h2>
          <p>Wiki, docs, tasks & projects. all in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
