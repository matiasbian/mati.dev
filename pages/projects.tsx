import styled from '@emotion/styled';
import tw from 'twin.macro';

import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { List } from '~/components';
import { ListActionType } from '~/types';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';
import projectsJson from '../public/statics/portfolio.json'

interface ProjectProps {
	stringifiedProjects: string;
}

const Container = styled.div(tw`
	my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-xl mx-auto
`);

const ProjectIcon = styled.span(tw`
	text-xl
`);

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
	const projects = await fetchProjects();

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps) {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;
	console.log('extras', projectsJson)


	return (
		<Layout.Default seo={{ title: 'Matías ─ projects' }}>
			<Container>
				<Content>
					<List.Container
						item={(project, index) => (
							<List.Item
								actions={[
									...(project.post
										? [
											{
												type: ListActionType.LINK,
												external: false,
												href: project.post,
												icon: 'feather:edit-3',
												label: `Blog post about ${project.name}`,
											} as ListAction,
										]
										: []),
									...(project.homepage
										? [
											{
												type: ListActionType.LINK,
												href: project.homepage,
												icon: 'feather:globe',
												label: `${project.name} homepage`,
											} as ListAction,
										]
										: []),


									...(project.playstore
										? [
											{
												type: ListActionType.LINK,
												href: project.playstore,
												icon: 'feather:play',
												label: `${project.name} homepage`,
											} as ListAction,
										]
										: []),

									...(project.appstore
										? [
											{
												type: ListActionType.LINK,
												href: project.appstore,
												icon: 'feather:airplay',
												label: `${project.name} homepage`,
											} as ListAction,
										]
										: []),


									...(project.url
										? [
											{
												type: ListActionType.LINK,
												href: project.url,
												icon: 'feather:github',
												label: `${project.name} homepage`,
											} as ListAction,
										]
										: []),
								]}
								description={project.description}
								icon={<ProjectIcon>{project.icon}</ProjectIcon>}
								key={index}
								title={project.name}
							/>
						)}
						items={projectsJson}
					/>
				</Content>
			</Container>
		</Layout.Default>
	);
}
