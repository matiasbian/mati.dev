import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Matías ─ Game developer';
	const description = "Hey 🕹️ I'm Matías, a game developer";

	return {
		title,
		description,
		canonical: `https://mati-dev.com.ar/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://mati-dev.com.ar/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
