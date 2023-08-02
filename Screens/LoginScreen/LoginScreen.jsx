import { useState } from "react";
import BaseContainerForForm from "../../components/BaseContainerForForm/BaseContainerForForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginScreen() {
  const [isShowKeyBoardLog, setIsShowKeyBoardLog] = useState(null);

  return (
    <BaseContainerForForm
      isShowKeyBoardLog={isShowKeyBoardLog}
      pageTitle="Увійти"
      additionalTitle="Немає акаунту? Зареєструватися"
    >
      {<LoginForm setIsShowKeyBoardLog={setIsShowKeyBoardLog} />}
    </BaseContainerForForm>
  );
}
