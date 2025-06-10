"use client"

import React, { createContext, useContext, useState } from "react";
import { TOrg } from "@/app/modules/base/orgs/page";

interface OrgContextType {
	currentOrg: TOrg | null;
	setCurrentOrg: (org: TOrg | null) => void;
}

const OrgContext = createContext<OrgContextType | undefined>(undefined);

export const OrgProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentOrg, setCurrentOrg] = useState<TOrg | null>(null);
	return (
		<OrgContext.Provider value={{ currentOrg, setCurrentOrg }}>
			{children}
		</OrgContext.Provider>
	);
};

export const useOrg = () => {
	const context = useContext(OrgContext);
	if (!context) {
		throw new Error("useOrg must be used within an OrgProvider");
	}
	return context;
};
