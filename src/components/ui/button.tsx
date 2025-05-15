
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "neumorphic-button bg-[#f0f4fa] text-slate-900 hover:text-black",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 neumorphic-button",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground neumorphic-button",
        secondary: "bg-[#e0e4ed] text-slate-900 hover:bg-[#d8dce5] neumorphic-button",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neu: "neumorphic-button bg-[#f0f4fa] text-slate-900 hover:text-black",
        neuDark: "neumorphic-button bg-[#1A1F2C] text-white hover:bg-[#222733]",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-xl px-3.5",
        lg: "h-12 rounded-xl px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
