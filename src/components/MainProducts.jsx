import React, { useState } from "react";
import Products from "./Products";
import { useQueryClient } from "@tanstack/react-query";

export default function MainProducts() {
	const [showLeftProducts, setShowLeftProducts] = useState(false);
	const [showRightProducts, setShowRightProducts] = useState(false);
	const client = useQueryClient();

	return (
		<main className="container">
			<div>
				{showLeftProducts && <Products />}
				<button onClick={() => setShowLeftProducts(!showLeftProducts)}>
					Toggle
				</button>
			</div>
			<div>
				{showRightProducts && <Products />}
				<button
					onClick={() => setShowRightProducts(!showRightProducts)}
				>
					Toggle
				</button>
			</div>
			<button
				onClick={() => {
					client.invalidateQueries(["products", true]);
				}}
			>
				정보가 업데이트 되었음!
			</button>
		</main>
	);
}
