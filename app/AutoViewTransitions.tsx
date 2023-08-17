'use client';

import { AutoViewTransitionsOnClick, EnableNextAppRouterViewTransitions } from '~/viewTransitions/next';

export default function AutoViewTransitions() {

	return (
		<>
			{/* This would make sure transition's new state is captured at the end of the route change.*/}
			<EnableNextAppRouterViewTransitions />

			{/* This captures link clicks and injects a view transition.*/}
			<AutoViewTransitionsOnClick match="a[href]" />
		</>
	);
}
