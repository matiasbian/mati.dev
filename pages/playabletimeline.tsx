import { Layout } from '~/layouts';

import type { Timeline, TimelineEvent } from '~/types';
import React from "react";
import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import { Unity, useUnityContext } from "react-unity-webgl";
import { useRouter } from 'next/router'


const DynamicComponentWithNoSSR = dynamic(
	() => import('components/Game'),
	{ ssr: false }
)


interface TimelineProps {
	timeline?: Timeline;
}
export default function TimelinePage({ timeline: rawTimeline }: TimelineProps) {
	const router = useRouter()

	useEffect(() => {
		if (true) {
			const routeChangeStart = () => {
				unload();
				setTimeout(() => {

				}, 3000);
				throw "Abort route change. Please ignore this error."

			}
			router.events.on("routeChangeStart", routeChangeStart)

			return () => {
				router.events.off("routeChangeStart", routeChangeStart)
			}
		}
	}, [])


	const { unityProvider, unload } = useUnityContext({
		loaderUrl: "unitybuild/build.loader.js",
		dataUrl: "unitybuild/build.data",
		frameworkUrl: "unitybuild/build.framework.js",
		codeUrl: "unitybuild/build.wasm"
	});


	async function handleClickBack() {
		console.log('unloading');
		await unload();
		console.log('unloaded');
		// Ready to navigate to another page.
	}



	return (
		<Layout.Default seo={{ title: 'Matías ─ timeline' }}>
			<div className="flex flex-grow min-h-screen" style={{ alignSelf: 'center' }}>
				<div className='game-container' style={{ margin: "auto", padding: 20, zIndex: 9 }}>
					<Unity unityProvider={unityProvider}
						style={{ width: 1280, height: 720 }} />;
					<button onClick={handleClickBack}>Back</button>
				</div>
			</div>
		</Layout.Default>
	);
}
