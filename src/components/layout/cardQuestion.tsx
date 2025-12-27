"use client";
import { useState } from "react";

type Props = {
  title: string;
  children: string;
  defaultOpen: boolean;
};

export const Accordion = ({ title, children, defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="max-w-3xl mx-auto rounded-xl shadow-lg flex flex-col mt-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex  justify-between px-6 py-5 text-left font-semibold text-lg"
      >
        <span className="flex items-center">{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? " px-6 pb-6" : "max-h-0 px-6"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};
