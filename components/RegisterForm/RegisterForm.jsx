import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import ButtonFormComponent from "../ButtonFormComponent/ButtonFormComponent";

export default function RegisterForm() {
  return (
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: { login: "", email: "", password: "" } });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ marginTop: 17 }}>
          <InputComponent
            placeholderText={"Логін"}
            inputMode={"text"}
            handleChange={handleChange("login")}
            handleBlur={handleBlur("login")}
            value={values.login}
          />
          <InputComponent
            placeholderText={"Адреса електронної пошти"}
            inputMode={"email"}
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            value={values.email}
          />
          <InputComponent
            placeholderText={"Пароль"}
            inputMode={"text"}
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            value={values.password}
          />
          <ButtonFormComponent handleButtonSubmit={handleSubmit}>
            Зареєстуватися
          </ButtonFormComponent>
        </View>
      )}
    </Formik>
  );
}
