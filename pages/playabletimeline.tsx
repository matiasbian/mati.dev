import { Layout } from '~/layouts';

import type { Timeline, TimelineEvent } from '~/types';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
	() => import('components/Game'),
	{ ssr: false }
)

interface TimelineProps {
	timeline?: Timeline;
}
export default function TimelinePage({ timeline: rawTimeline }: TimelineProps) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
	}, []);
	return (
		<Layout.Default seo={{ title: 'Matías ─ timeline' }}>
			<div className="flex flex-grow min-h-screen" style={{ alignSelf: 'center' }}>
				<div className='game-container' style={{ width: '100vw', height: '100vh' }}>
					<div key={Math.random()} id="game"></div>
					{loading ? <DynamicComponentWithNoSSR /> : null}
				</div>
			</div>
		</Layout.Default>
	);
}
