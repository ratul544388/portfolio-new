import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    const value = props.value;
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[140px] peer w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <span
            className={cn(
              "pointer-events-none px-2 absolute top-5 left-1 rounded-full -translate-y-1/2 text-sm text-muted-foreground peer-focus:top-[-2px] bg-background transition-all border-x-transparent peer-focus:border-x-[1.5px] peer-focus:border-theme",
              value && "top-[-2px] border-x-[1.5px] border-x-theme"
            )}
          >
            {label}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
