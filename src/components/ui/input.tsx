import * as React from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...props }, ref) => {
    const value = props.value;
    return (
      <motion.div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full peer rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <span
            className={cn(
              "pointer-events-none px-2 absolute top-1/2 left-1 rounded-full -translate-y-1/2 text-sm text-muted-foreground peer-focus:top-[-2px] bg-background transition-all border-x-transparent peer-focus:border-x-[1.5px] peer-focus:border-theme",
              value && "top-[-2px] border-x-[1.5px] border-x-theme"
            )}
          >
            {label}
          </span>
        )}
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export { Input };
