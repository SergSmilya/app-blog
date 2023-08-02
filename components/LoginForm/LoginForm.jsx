import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import ButtonFormComponent from "../ButtonFormComponent/ButtonFormComponent";
import ShowPasswordButtonComponent from "../ShowPasswordButtonComponent/ShowPasswordButtonComponent";

export default function LoginForm({ setIsShowKeyBoardLog }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: { email: "", password: "" } });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        const [isHidePassword, setIsHidePassword] = useState(true);

        return (
          <TouchableWithoutFeedback
            onFocus={() => setIsShowKeyBoardLog(true)}
            onBlur={() => setIsShowKeyBoardLog(false)}
          >
            <View style={{ marginTop: 17 }}>
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
                Увійти
              </ButtonFormComponent>
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    </Formik>
  );
}
