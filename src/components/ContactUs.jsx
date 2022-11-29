import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Alerts from "./Alerts";

export default function ContactUs() {
  const [alert, setAlert] = useState({
    show: false,
    alertType: "",
    alertMessage: "",
  });
  const [submitBtn, setSubmitBtn] = useState({
    disabled: false,
    value: "Contratar",
  });
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitBtn({
      disabled: true,
      value: "Aguarde...",
    });

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "G-ksENfO0PJWfAtDr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert({
            show: true,
            alertType: "success",
            alertMessage: "Email enviado! Em breve entraremos em contato.",
          });
          setSubmitBtn({
            disabled: true,
            value: "Enviado!",
          });
          setInputEmail("");
          setInputName("");
        },
        (error) => {
          console.log(error.text);
          setAlert({
            show: true,
            alertType: "error",
            alertMessage: "Ops! Tivemos algum imprevisto, tente novamente",
          });
          setSubmitBtn({
            disabled: false,
            value: "Contratar",
          });
        }
      );
  };

  return (
    <div>
      <Alerts alert={alert} setAlert={setAlert} />
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <input
          placeholder="Nome"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          name="user_name"
          required
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <input
          placeholder="Email"
          value={inputEmail}
          required
          onChange={(e) => setInputEmail(e.target.value)}
          type="email"
          name="user_email"
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <input
          disabled={submitBtn.disabled}
          type="submit"
          value={submitBtn.value}
          className="w-full mt-5 inline-block rounded-lg bg-red-600 px-4 py-2 text-base font-semibold text-center leading-7 text-white shadow-sm hover:bg-red-500 disabled:bg-red-600/30 disabled:text-gray-200"
        />
      </form>
    </div>
  );
}
