import { useRef, useState, useEffect } from "react";

import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [submitBtn, setSubmitBtn] = useState({
    disabled: true,
    value: "Contratar",
  });
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (inputEmail.length && inputName.length) {
      setSubmitBtn({
        ...submitBtn,
        disabled: false,
      });
    } else {
      setSubmitBtn({
        ...submitBtn,
        disabled: true,
      });
    }
  }, [inputName, inputEmail]);

  return (
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
  );
}
