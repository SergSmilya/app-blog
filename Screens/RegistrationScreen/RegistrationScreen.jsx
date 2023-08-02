import { useState } from "react";
import BaseContainerForForm from "../../components/BaseContainerForForm/BaseContainerForForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegistrationScreen() {
  const [isShowKeyBoardReg, setIsShowKeyBoardReg] = useState(null);

  return (
    <BaseContainerForForm
      isShowKeyBoardReg={isShowKeyBoardReg}
      pageTitle="Реєстрація"
      additionalTitle="Вже є акаунт? Увійти"
    >
      {<RegisterForm setIsShowKeyBoardReg={setIsShowKeyBoardReg} />}
    </BaseContainerForForm>
  );
}
