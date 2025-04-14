/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';

export interface TOrg {
	name: string
	image_url?: string
	id: string
}

export default function Orgs() {
	const [currentPage, setCurrentPage] = useState(1);
	const [orgs, setOrgs] = useState<Array<TOrg> | null>(null);
	const itemsPerPage = 8; // Show 8 items per page

	// Calculate pagination
	const totalItems = orgs?.length ?? 16; 
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch("endpoint da sivla")
			const data_json = await data.json() as Array<TOrg>
			return data_json
		}

		fetchData().then(data => {
			setOrgs(data)
		})
		.catch(() => {
			console.error("nao")
		})
	}, [])

	return (
		<>
			<div className="flex flex-col items-center justify-evenly">
				<div className="grid grid-cols-4 gap-4 p-6 w-full max-w-7xl ">
					{Array.from({ length: 16 })
						.slice(startIndex, endIndex)
						.map((_, index) => (
							<a
								key={index}
								href={`/org/${startIndex + index}`}
								className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden "
							>
								<div className="h-40 overflow-hidden relative">
									<img
										src={`https://source.unsplash.com/random/300x200`}
										alt={`Organization ${startIndex + index + 1}`}
										sizes="(max-width: 768px) 100vw, 300px"
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="font-semibold text-lg mb-1">Organization {startIndex + index + 1}</h3>
									<p className="text-gray-600 text-sm">A brief description of this organization</p>
								</div>
							</a>
						))}
				</div>

				{/* Pagination Controls */}
				<div className="flex gap-2 my-4">
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
					>
						Previous
					</button>
					{Array.from({ length: totalPages }).map((_, index) => (
						<button
							key={index}
							onClick={() => handlePageChange(index + 1)}
							className={`px-4 py-2 rounded ${currentPage === index + 1
								? 'bg-blue-500 text-white'
								: 'bg-gray-200'
								}`}
						>
							{index + 1}
						</button>
					))}
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
					>
						Next
					</button>
				</div>
			</div>
		</>
	)
}