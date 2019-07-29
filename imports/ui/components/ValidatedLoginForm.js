import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
            Meteor.loginWithPassword(values.email, values.password, function(error){
            if (!error){
              FlowRouter.go("/home");

            }else{
              if(error.reason == "Incorrect password"){
              console.log("p1");
                actions.setStatus({
                password: 'This password is incorrect.',
                });
                actions.setFieldValue('email', '');
                actions.setFieldValue('password', '');

              } 
              else if (error.reason == "User not found"){
                console.log("p2");
                actions.setStatus({
                email: 'This email does not exist.',
                });
                actions.setFieldValue('email', '');
                actions.setFieldValue('password', '');

              }else{
                console.log(error.reason);
                actions.setStatus({
                  email: "Invalid email or password."
                })
                actions.setFieldValue('email', '');
                actions.setFieldValue('password', '');
              }

            }

            });
        actions.setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),

      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        status,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur= {e => {
            handleBlur(e)
            let someValue = e.currentTarget.value
            }}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          {status && status.email ? (<div>{status.email}</div>) : (<div></div>) }
          {status && status.password ? (<div>{status.password}</div>) : (<div></div>) }

        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
