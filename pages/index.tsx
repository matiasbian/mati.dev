import { differenceInYears, isSameDay, isSameMonth } from 'date-fns';
import { Icon } from '@iconify/react';

import { Animate, Button, Event, Pill } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { NavigationItem } from '~/types';

import { isMobile } from 'react-device-detect';

const ACTIONS: Array<NavigationItem> = [
	{
		type: NavigationItemType.LINK,
		href: '/games',
		icon: <Icon className="mr-3" icon="feather:dribbble" />,
		text: 'Games',
	},
	{
		type: NavigationItemType.LINK,
		href: '/playabletimeline',
		icon: <Icon className="mr-3" icon="feather:play" />,
		text: 'Play my timeline',
		highlight: true,
	},
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://www.linkedin.com/in/matiasbian/',
		icon: <Icon className="mr-3" icon="feather:linkedin" />,
		text: 'LinkedIn',
	},
];

// remove play timeline option if you are playing in a device.
if (isMobile) {
	ACTIONS[1] = {
		type: NavigationItemType.LINK,
		href: '/playabletimeline',
		icon: <Icon className="mr-3" icon="feather:globe" />,
		text: 'Web Apps',
	}
}

export default function HomePage() {
	const today = new Date();
	const birthday = new Date('1992-10-02');
	const age = differenceInYears(today, birthday);
	const isBirthday = isSameDay(today, birthday) && isSameMonth(today, birthday);

	const description = `I am a ${age} year old game developer`;

	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div className="min-h-screen flex items-center justify-center py-12">
				<div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="text-whitetext-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
					>
						I&apos;m Matías, <br className="hidden sm:block" />a{' '}
						<Pill.Standard className="mt-4">game dev.</Pill.Standard>
						<span className="inline-block origin-70 hover:(animate-wave)">🎮</span>{' '}
					</Animate>

					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
						transition={{
							delay: 0.5,
						}}
					>
						{description}
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}
								>
									<Button.Outline href={action.href} highlight={action.highlight}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
