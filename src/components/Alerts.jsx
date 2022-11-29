import { motion } from "framer-motion";

const alertAnimation = {
  show: { x: -100, opacity: 1 },
  hide: { x: 0, opacity: 0, transition: { duration: 2 } },
};

export default function Alerts({ alert, setAlert }) {
  const { show, alertType, alertMessage, alertImg } = alert;
  return (
    <div>
      {show ? (
        <motion.div
          className="fixed z-50 top-5 right-0 max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          variants={alertAnimation}
          animate={show ? "show" : "hide"}
        >
          {alertType === "success" ? (
            <div className="flex">
              <div className="flex items-center justify-center w-12 bg-emerald-500">
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                    Sucesso!
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {alertMessage}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="pr-5 transition-colors duration-300 transform rounded-md text-gray-900/80 dark:text-white text hover:text-green-400 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : null}
          {alertType === "info" ? (
            <div className="flex">
              <div className="flex items-center justify-center w-12 bg-blue-500">
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-blue-500 dark:text-blue-400">
                    Informação
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {alertMessage}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="pr-5 transition-colors duration-300 transform rounded-md text-gray-900/80 dark:text-white text hover:text-green-400 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : null}
          {alertType === "warning" ? (
            <div className="flex">
              <div className="flex items-center justify-center w-12 bg-yellow-400">
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-yellow-400 dark:text-yellow-300">
                    Atenção
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {alertMessage}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className="pr-5 transition-colors duration-300 transform rounded-md text-gray-900/80 dark:text-white text hover:text-green-400 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : null}
          {alertType === "error" ? (
            <div className="flex">
              <div className="flex items-center justify-center w-12 bg-red-500">
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-red-500 dark:text-red-400">
                    Erro
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {alertMessage}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          {alertType === "notification" ? (
            <div className="flex">
              <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

              <div className="flex items-center px-2 py-3">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  alt="User avatar"
                  src={alertImg}
                />

                <div className="mx-3">
                  <p className="text-gray-600 dark:text-gray-200">
                    {alertMessage}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </div>
  );
}
