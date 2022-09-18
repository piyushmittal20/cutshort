const DetailPage = ({ formik }) => {
  return (
    <div className="page-section">
      <h1 className="detail-heading">Welcome! First things first...</h1>
      <p className="detail-subheading">You can always change them later</p>
      <label htmlFor="fullname" className="label-handler">
        Full Name
      </label>
      <input
        type="text"
        name="fullname"
        className="input-handler"
        placeholder="Steve Jobs"
        value={formik.values.fullname}
        onChange={formik.handleChange}
      />
      {formik.touched.fullname && formik.errors.fullname ? (
        <div className="error">{formik.errors.fullname}</div>
      ) : null}
      <label htmlFor="displayname" className="label-handler">
        Display Name
      </label>
      <input
        type="text"
        name="displayname"
        className="input-handler"
        placeholder="Steve"
        value={formik.values.displayname}
        onChange={formik.handleChange}
      />
      {formik.touched.displayname && formik.errors.displayname ? (
        <div className="error">{formik.errors.displayname}</div>
      ) : null}
    </div>
  );
};

export default DetailPage;
