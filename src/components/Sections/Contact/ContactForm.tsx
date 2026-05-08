import clsx from "clsx";
import { InputHTMLAttributes, useRef, useState } from "react";
import { MAX_CHARACTER_COUNT } from "../../../data/constants";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

type Status = "waiting" | "sending" | "success" | "error" | "bot";

const shakeVariants = {
  initial: {
    x: [0],
  },
  shake: {
    x: [0, 50, 0, -50, 0, 50, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("waiting");
  const form = useRef<HTMLFormElement | null>(null);
  const {
    VITE_EMAIL_SERVICE_ID,
    VITE_EMAIL_TEMPLATE_ID,
    VITE_EMAIL_PUBLIC_KEY,
  } = import.meta.env;

  const characterCount = message.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextMessage = event.currentTarget.value;
    if (nextMessage.length <= MAX_CHARACTER_COUNT) {
      setMessage(event.currentTarget.value);
    } else {
      setMessage(message);
    }
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    if (formData.get("botpot") === "") {
      try {
        await emailjs.sendForm(
          VITE_EMAIL_SERVICE_ID,
          VITE_EMAIL_TEMPLATE_ID,
          form.current as HTMLFormElement,
          {
            publicKey: VITE_EMAIL_PUBLIC_KEY,
          },
        );
        setStatus("success");
        form.current?.reset();
        setMessage("");
      } catch (error) {
        if (error instanceof Error) setStatus("error");
      }
    } else {
      setStatus("bot");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid grid-cols-5 grid-rows-auto gap-x-8 mt-10 mb-20"
    >
      <fieldset className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-y-4">
          <InputField
            fieldName="name"
            type="text"
            required
            autoComplete="name"
          />
          <InputField
            fieldName="email"
            type="email"
            required
            autoComplete="email"
          />
          <InputField fieldName="Place you want to travel to" type="text" />
          <input name="botpot" type="hidden" />
        </div>
        <div className="relative flex flex-col h-full w-full gap-2">
          <label
            htmlFor="message"
            className="lg:text-xl font-light tracking-wide leading-relaxed"
          >
            Message
          </label>
          <motion.textarea
            variants={shakeVariants}
            animate={
              characterCount === MAX_CHARACTER_COUNT ? "shake" : "initial"
            }
            value={message}
            onChange={handleChange}
            name="message"
            id="message"
            required
            placeholder="Type your message here..."
            className={clsx(
              "px-4 py-4 min-h-[278px] min-w-[90vw] lg:min-w-[50vw] w-full text-xl lg:text-base font-light focus:ring-2 focus:bg-white/10 bg-indigo-300/10 rounded-md outline-none caret-indigo-300 caret transition",
              {
                "ring-red-900": characterCount >= MAX_CHARACTER_COUNT,
                "ring-sky-500": characterCount < MAX_CHARACTER_COUNT,
              },
            )}
          />
          <div className="flex justify-between text-2xl lg:text-xl tracking-wider italic transition pl-2">
            {
              {
                waiting: <p></p>,
                sending: <p></p>,
                success: (
                  <p className="text-green-400">
                    Thanks for reaching out, I'll get back to you soon!
                  </p>
                ),
                error: (
                  <p className="text-red-600">
                    Something went wrong. Please try again later.
                  </p>
                ),
                bot: <p className="text-orange-600">Here be dragons... 🐉</p>,
              }[status]
            }
            <p
              className={clsx("relative text-right", {
                "text-red-600": characterCount >= MAX_CHARACTER_COUNT,
                "text-white": characterCount < MAX_CHARACTER_COUNT,
              })}
            >
              <span className="font-semibold">{characterCount}</span>/
              {MAX_CHARACTER_COUNT}
            </p>
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={status === "sending"}
        className={clsx(
          "flex justify-center items-center gap-x-2 w-[50%] h-16 lg:w-36 lg:h-10 row-start-2 self-start justify-self-center lg:justify-self-end",
          {
            "btn-loading animate-glow": status === "sending",
            "form-btn btn-hover": status !== "sending",
          },
        )}
      >
        {status === "sending" ? (
          <>
            <span>Sending...</span>
            <Icon className="animate-spin" icon="formkit:spinner"></Icon>
          </>
        ) : (
          "Send Email"
        )}
      </button>
    </form>
  );
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldName: string;
};

function InputField({ fieldName, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={fieldName}
        className="lg:text-xl font-light tracking-wide leading-relaxed"
      >
        {fieldName[0].toUpperCase() + fieldName.slice(1)}
      </label>
      <input
        {...rest}
        name={fieldName
          .split(" ")
          .map((c) => c.toLocaleLowerCase("en-US"))
          .join("_")}
        id={fieldName}
        className="py-1 px-4 placeholder:text-indigo-200 placeholder:italic text-xl lg:text-base font-light w-full lg:w-[400px] h-16 lg:h-12 ring-sky-500 focus:ring-2 focus:bg-white/10 bg-indigo-300/10 rounded-md outline-none caret-indigo-300 caret transition"
      />
    </div>
  );
}
