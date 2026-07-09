import { differenceInYears, isSameDay, isSameMonth } from 'date-fns';
import { Icon } from '@iconify/react';
import Link from 'next/link';

import { Animate, Button, Event, Pill } from '~/components';
import { EventType } from '~/types';
import { Layout } from '~/layouts';

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
						className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
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

					<div className="flex flex-col items-center justify-center w-full mt-8 sm:mt-4">
						<Animate
							animation={{
								y: [50, 0],
								opacity: [0, 1],
							}}
							className="w-full sm:w-auto"
							transition={{
								delay: 0.7,
							}}
						>
							<Button.Outline href="/games" highlight>
								<Icon className="mr-3" icon="feather:dribbble" />
								<span>Portfolio</span>
							</Button.Outline>
						</Animate>

						<Animate
							as="p"
							animation={{
								opacity: [0, 1],
							}}
							className="mt-4 text-sm text-gray-400 dark:text-gray-500"
							transition={{
								delay: 1,
							}}
						>
							or,{' '}
							<Link href="/playabletimeline" passHref>
								<a className="text-primary-500 hover:underline font-medium default-transition default-focus rounded">
									play through my timeline
								</a>
							</Link>
							{' · '}
							<Link href="/playablegames" passHref>
								<a className="text-primary-500 hover:underline font-medium default-transition default-focus rounded">
									play my web games
								</a>
							</Link>
						</Animate>
					</div>
				</div>
			</div>
		</Layout.Default>
	);
}
