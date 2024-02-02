import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "twinline-flex twitems-center twjustify-center twwhitespace-nowrap twrounded-md twtext-sm twfont-medium twtransition-colors focus-visible:twoutline-none focus-visible:twring-1 focus-visible:twring-ring disabled:twpointer-events-none disabled:twopacity-50",
  {
    variants: {
      variant: {
        default:
          "twbg-primary twtext-primary-foreground twshadow hover:twbg-primary/90",
        destructive:
          "twbg-destructive twtext-destructive-foreground twshadow-sm hover:twbg-destructive/90",
        outline:
          "twborder twborder-input twbg-background twshadow-sm hover:twbg-accent hover:twtext-accent-foreground",
        secondary:
          "twbg-secondary twtext-secondary-foreground twshadow-sm hover:twbg-secondary/80",
        ghost: "hover:twbg-accent hover:twtext-accent-foreground",
        link: "twtext-primary twunderline-offset-4 hover:twunderline",
      },
      size: {
        default: "twh-9 twpx-4 twpy-2",
        sm: "twh-8 twrounded-md twpx-3 twtext-xs",
        lg: "twh-10 twrounded-md twpx-8",
        icon: "twh-9 tww-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
