import './globals.scss';
import type { Metadata } from 'next';
import { Literata } from 'next/font/google';
import AutoViewTransitions from '~/app/AutoViewTransitions';
import type { ReactNode } from 'react';

const literata = Literata({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Recipes - Sam Apostel',
	description: 'A public personal digital cookbook by Sam Apostel.',
}

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang="en">
			<AutoViewTransitions />
			<body className={literata.className}>{children}</body>
		</html>
	)
}
