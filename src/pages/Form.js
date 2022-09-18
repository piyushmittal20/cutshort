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

  const formik = useFormik({
    initialValues: {
      fullname: "",
      displayname: "",
      workspacename: "",
      workspaceurl: "",
      usage: "",
    },
    // validationSchema: Yup.object({
    //   fullname: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   displayname: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   workspacename: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   workspaceurl: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   usage: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    // }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="page" onSubmit={formik.handleSubmit}>
      <div className="progress-bar">
        <div className={page >= 0 ? "element completed" : "element"}>1</div>
        <div className={page >= 1 ? "element completed" : "element"}>2</div>
        <div className={page >= 2 ? "element completed" : "element"}>3</div>
        <div className={page >= 3 ? "element completed" : "element"}>4</div>
      </div>
      <div className="page-body">{PageDisplay()}</div>
      <div className="btn-container">
        {page !== length - 1 ? (
          <button
            className={page === 0 ? "btn disabled" : "btn"}
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </button>
        ) : null}
        <button
          onClick={() => {
            if (page == length - 1) {
              console.log(formik.values);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
          className={formik.isValid ? "btn" : "btn disabled"}
          type="submit"
        >
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
