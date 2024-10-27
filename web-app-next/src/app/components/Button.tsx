import { FC } from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "success" | "outline";
}

const Button: FC<ButtonProps> = ({ text, href, variant = "primary" }) => {
  const baseStyle = "py-2 px-4 font-semibold rounded-lg transition-all";
  let variantStyle = "";

  switch (variant) {
    case "success":
      variantStyle = "bg-green-500 text-white hover:bg-green-600";
      break;
    case "outline":
      variantStyle = "border border-gray-500 text-gray-700 hover:bg-gray-100";
      break;
    default:
      variantStyle = "bg-blue-500 text-white hover:bg-blue-600";
      break;
  }

  return (
    <a href={href} className={`${baseStyle} ${variantStyle}`}>
      {text}
    </a>
  );
};

export default Button;
