import BaseContainerForForm from "../../components/BaseContainerForForm/BaseContainerForForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegistrationScreen() {
  return (
    <BaseContainerForForm
      pageTitle="Реєстрація"
      additionalTitle="Вже є акаунт? Увійти"
    >
      {<RegisterForm />}
    </BaseContainerForForm>
  );
}
