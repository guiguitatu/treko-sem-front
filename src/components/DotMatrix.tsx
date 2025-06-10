'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBg() {
	// bg animado pra tela de inicio do app
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const resize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		window.addEventListener('resize', resize)
		resize()

		const dots: [number, number, number][] = []
		const dotCount = (canvas.width * canvas.height) / 10000
		for (let i = 0; i < dotCount; i++) {
			dots.push([
				Math.random() * canvas.width,
				Math.random() * canvas.height,
				Math.random() * Math.PI * 2,
			])
		}

		const animate = () => {
			ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)
			ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'

			dots.forEach(dot => {
				dot[0] += Math.cos(dot[2]) * 0.2
				dot[1] += Math.sin(dot[2]) * 0.2
				dot[2] += 0.002

				if (dot[0] < 0) dot[0] = canvas.width
				if (dot[0] > canvas.width) dot[0] = 0
				if (dot[1] < 0) dot[1] = canvas.height
				if (dot[1] > canvas.height) dot[1] = 0

				ctx.fillStyle = 'rgba(16, 185, 129, 0.5)' // emerald-500 with opacity
				ctx.beginPath()
				ctx.arc(dot[0], dot[1], 1, 0, Math.PI * 2)
				ctx.fill()
			})

			requestAnimationFrame(animate)
		}
		animate()

		return () => window.removeEventListener('resize', resize)
	}, [])

	return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10" />
}
