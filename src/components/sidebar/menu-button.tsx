import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import React from "react";

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	active?: boolean;
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
	({ className, asChild = false, active = false, ...props }, ref) => {
		// The issue is likely here - when asChild is true, we should ensure
		// the Slot component receives a single React element child
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				ref={ref}
				className={cn(
					"flex items-center justify-start gap-2 rounded-md p-2 text-sm font-medium transition-all hover:bg-accent",
					active && "bg-accent",
					className
				)}
				{...props}
			/>
		);
	}
);

SidebarMenuButton.displayName = "SidebarMenuButton";

export { SidebarMenuButton };
