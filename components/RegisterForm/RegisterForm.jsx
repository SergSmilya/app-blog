import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import ButtonFormComponent from "../ButtonFormComponent/ButtonFormComponent";
import ShowPasswordButtonComponent from "../ShowPasswordButtonComponent/ShowPasswordButtonComponent";

export default function RegisterForm({ setIsShowKeyBoardReg }) {
  return (
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: { login: "", email: "", password: "" } });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        const [isHidePassword, setIsHidePassword] = useState(true);

        return (
          <TouchableWithoutFeedback
            onFocus={() => setIsShowKeyBoardReg(true)}
            onBlur={() => setIsShowKeyBoardReg(false)}
          >
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
              <View style={{ position: "relative" }}>
                <InputComponent
                  placeholderText={"Пароль"}
                  inputMode={"text"}
                  handleChange={handleChange("password")}
                  handleBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={isHidePassword}
                />
                <ShowPasswordButtonComponent
                  isHidePassword={isHidePassword}
                  setIsHidePassword={setIsHidePassword}
                />
              </View>

              <ButtonFormComponent handleButtonSubmit={handleSubmit}>
                Зареєстуватися
              </ButtonFormComponent>
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    </Formik>
  );
}
