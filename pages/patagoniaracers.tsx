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

	const { unityProvider, unload } = useUnityContext({
		loaderUrl: "patagoniaracers/build.loader.js",
		dataUrl: "patagoniaracers/build.data",
		frameworkUrl: "patagoniaracers/build.framework.js",
		codeUrl: "patagoniaracers/build.wasm"
	});

	const router = useRouter()
	var firstGoOut = false;


	async function handleClickBack() {
		console.log('unloading');
		await unload();
		console.log('unloaded');
		firstGoOut = true
		router.push(document.getElementById("but-but").innerText)
	}

	// Assume this value holds the status of your form
	const [dirty, setDirty] = React.useState();

	// We need to ref to it then we can access to it properly in callback properly
	const ref = React.useRef(dirty);
	ref.current = dirty;



	useEffect(() => {
		// We listen to this event to determine whether to redirect or not
		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, []);

	function handleRouteChange(url) {
		console.log("App is changing to: ", url, ref.current);

		if (!firstGoOut) {
			document.getElementById("but-but").innerText = url
			document.getElementById("but-but").click()
			router.events.emit('routeChangeError')
			firstGoOut = true
			throw `routeChange aborted. This error can be safely ignored - https://github.com/zeit/next.js/issues/2476.`
		}
	};


	return (
		<Layout.Default seo={{ title: 'Matías ─ timeline' }}>
			<div className="flex flex-grow min-h-screen" style={{ alignSelf: 'center', alignItems: 'center' }}>
				<div className='game-container' style={{ height: 'calc(100vh - 64px)', width: '80vw', margin: '0px', padding: '0px', border: '0px', zIndex: '999' }}>
					<Unity unityProvider={unityProvider}
						style={{ width: '100%', height: '100%' }} />
					<button hidden id="but-but" onClick={handleClickBack}>Back</button>
				</div>
			</div>
		</Layout.Default>
	);
}
