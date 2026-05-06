import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-ocean-500 text-white hover:bg-ocean-600 shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40",
  secondary:
    "bg-white text-ocean-500 border-2 border-ocean-500 hover:bg-ocean-50",
  outline:
    "bg-transparent text-white border-2 border-white/80 hover:bg-white/10",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;
  const interactiveClasses = disabled
    ? "opacity-60 cursor-not-allowed"
    : "hover:scale-[1.02] active:scale-[0.98]";
  const classes = `${baseClasses} ${interactiveClasses}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
