import { Icon } from '@iconify/react';

import { Button } from '~/components';
import { Layout } from '~/layouts';
import { NavigationItemType } from '~/types';

export default function Error() {
	return (
		<Layout.Error>
			<div className="flex flex-grow min-h-full pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-shrink-0 justify-center">
						<Icon
							className="h-12 text-primary-500 w-auto"
							icon="feather:check-circle"
						/>
					</div>
					<div className="py-4 text-center">
						<h1 className="mt-2 text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl">
							Welcome to Clash of Codes!
						</h1>
						<p className="mt-8 text-sm font-medium text-gray-300 dark:text-gray-400">
							Your account has been successfully created.
							<br />
							You can now login and start playing!
						</p>
						<div className="mt-6 flex justify-center items-center space-x-4">
							<Button.Standard
								type={NavigationItemType.LINK}
								href="/"
								icon="feather:home"
							>
								Home
							</Button.Standard>
						</div>
					</div>
				</div>
			</div>
		</Layout.Error>
	);
}
