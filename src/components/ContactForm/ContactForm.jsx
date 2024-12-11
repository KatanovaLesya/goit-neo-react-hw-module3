import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: { name: "", number: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name cannot exceed 50 characters")
        .required("Required"),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      addContact(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className={styles.error}>{formik.errors.name}</div>
        )}
      </label>
      <label>
        Number
        <input
          type="text"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number && (
          <div className={styles.error}>{formik.errors.number}</div>
        )}
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
