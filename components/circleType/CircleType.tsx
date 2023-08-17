'use client';

import { useLayoutEffect, useRef } from 'react';
import CircleType from 'circletype';

export default function CircleTypeComponent({ children, radius, direction, forceWidth, forceHeight }: {
	children: string;
	radius?: number;
	direction?: -1 | 1;
	forceWidth?: boolean;
	forceHeight?: boolean;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!ref.current) return;
		const circle = new CircleType(ref.current);

		circle.radius(Math.min( (512 + 64) / 2, (window.innerWidth) / 2));
		if (forceWidth) circle.forceWidth(forceWidth);
		if (forceHeight) circle.forceHeight(forceHeight);
		if (direction) circle.dir(direction);

		setTimeout(() => document.body.classList.add('circle-typed'));
		return () => {
			circle.destroy();
			document.body.classList.remove('circle-typed');

		};
	}, [
		children,
		radius,
		forceWidth,
		forceHeight,
		direction
	]);
	return (
		<div ref={ref}>{children}</div>
	);
}