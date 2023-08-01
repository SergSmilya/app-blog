import BaseContainerForForm from "../../components/BaseContainerForForm/BaseContainerForForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginScreen() {
  return (
    <BaseContainerForForm
      pageTitle="Увійти"
      additionalTitle="Немає акаунту? Зареєструватися"
    >
      {<LoginForm />}
    </BaseContainerForForm>
  );
}
