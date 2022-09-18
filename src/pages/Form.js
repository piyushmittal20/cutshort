import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import DetailPage from "../components/DetailPage";
import SetupPage from "../components/SetupPage";
import PlanPage from "../components/PlanPage";
import CongratsPage from "../components/CongratsPage";

const Form = () => {
  const [page, setPage] = useState(0);
  const length = 4;

  const PageDisplay = () => {
    if (page == 0) {
      return <DetailPage formik={formik} />;
    } else if (page == 1) {
      return <SetupPage formik={formik} />;
    } else if (page == 2) {
      return <PlanPage formik={formik} />;
    } else {
      return <CongratsPage formik={formik} />;
    }
  };

  const page1 = {
    fullname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    displayname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  };

  const page2 = {
    workspacename: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    workspaceurl: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  };

  const page3 = {
    usage: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      displayname: "",
      workspacename: "",
      workspaceurl: "",
      usage: "",
    },
    validationSchema: Yup.object(
      page === 0 ? page1 : page === 1 ? page2 : page === 2 ? page3 : {}
    ),
    onSubmit: (values) => {
      if (values.fullname !== "" && values.displayname !== "") {
        setPage((currPage) => currPage + 1);
      }
      console.log(values);
    },
  });

  return (
    <form className="page" onSubmit={formik.handleSubmit}>
      <div className="progress-bar">
        <div className={page >= 0 ? "element completed" : "element"}>1</div>
        <div></div>
        <div className={page >= 1 ? "element completed" : "element"}>2</div>
        <div></div>
        <div className={page >= 2 ? "element completed" : "element"}>3</div>
        <div></div>
        <div className={page >= 3 ? "element completed" : "element"}>4</div>
      </div>
      <div className="page-body">{PageDisplay()}</div>
      <div className="btn-container">
        {page !== length - 1 ? (
          <div
            className={page === 0 ? "btn disabled" : "btn"}
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </div>
        ) : null}
        <button className="btn" type="submit">
          {page === length - 2
            ? "Submit"
            : page === length - 1
            ? "Launch Eden"
            : "Next"}
        </button>
      </div>
    </form>
  );
};

export default Form;
