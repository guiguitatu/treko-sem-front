// ...existing code...

<SidebarMenuButton asChild active={isActive}>
	<Link href={item.href} className="flex items-center gap-2">
		{item.icon && <item.icon className="h-4 w-4" />}
		<span>{item.label}</span>
	</Link>
</SidebarMenuButton>

// ...existing code...
