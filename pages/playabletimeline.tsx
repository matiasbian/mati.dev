import { Layout } from '~/layouts';

import type { Timeline, TimelineEvent } from '~/types';
import React from "react";
import dynamic from 'next/dynamic'
import { Unity, useUnityContext } from "react-unity-webgl";

const DynamicComponentWithNoSSR = dynamic(
	() => import('components/Game'),
	{ ssr: false }
)


interface TimelineProps {
	timeline?: Timeline;
}
export default function TimelinePage({ timeline: rawTimeline }: TimelineProps) {
	const { unityProvider } = useUnityContext({
		loaderUrl: "unitybuild/build.loader.js",
		dataUrl: "unitybuild/build.data",
		frameworkUrl: "unitybuild/build.framework.js",
		codeUrl: "unitybuild/build.wasm"
	});


	return (
		<Layout.Default seo={{ title: 'Matías ─ timeline' }}>
			<div className="flex flex-grow min-h-screen" style={{ alignSelf: 'center' }}>
				<div className='game-container' style={{ width: '100vw', height: '100vh', zIndex: 9 }}>
					<Unity unityProvider={unityProvider}
						style={{ width: 1280, height: 720 }} />;
				</div>
			</div>
		</Layout.Default>
	);
}
