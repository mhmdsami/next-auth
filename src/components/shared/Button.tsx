import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
const Button = ({ children, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="text-white text-xl flex items-center gap-3 rounded-lg bg-white/10 px-4 py-1.5 border-[0.2px] border-gray-100/20"
  >
    {children}
  </button>
);

export default Button;
