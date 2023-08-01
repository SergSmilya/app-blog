import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import ButtonFormComponent from "../ButtonFormComponent/ButtonFormComponent";

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: { email: "", password: "" } });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ marginTop: 17 }}>
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
            Увійти
          </ButtonFormComponent>
        </View>
      )}
    </Formik>
  );
}
