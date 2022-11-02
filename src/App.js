import React from "react";
import MainProducts from "./components/MainProducts";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MainProducts />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}
