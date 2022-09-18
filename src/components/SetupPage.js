const SetupPage = ({ formik }) => {
  return (
    <div className="page-section">
      <h1 className="detail-heading">Let's set up a home for all your work</h1>
      <p className="detail-subheading">
        You can always create another workspace later
      </p>
      <label htmlFor="workspacename" className="label-handler">
        WorkSpace Name
      </label>
      <input
        type="text"
        name="workspacename"
        className="input-handler"
        placeholder="Eden"
        value={formik.values.workspacename}
        onChange={formik.handleChange}
      />
      {formik.touched.workspacename && formik.errors.workspacename ? (
        <div className="error">{formik.errors.workspacename}</div>
      ) : null}
      <label htmlFor="workspaceurl" className="label-handler">
        WorkSpace Url
      </label>
      <input
        type="text"
        name="workspaceurl"
        className="input-handler"
        placeholder="www.example.com"
        value={formik.values.workspaceurl}
        onChange={formik.handleChange}
      />
      {formik.touched.workspaceurl && formik.errors.workspaceurl ? (
        <div className="error">{formik.errors.workspaceurl}</div>
      ) : null}
    </div>
  );
};

export default SetupPage;
