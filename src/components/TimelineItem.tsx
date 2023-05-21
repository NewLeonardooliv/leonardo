import React from 'react';

type TimelineItemProps = {
	title: string;
	description: string;
	date: string;
	icon: string;
}

export function TimelineItem({ title, description, date, icon }: TimelineItemProps) {
	return (
		<div className="relative py-8 pl-12">
			<div className="absolute left-0 top-4 -ml-5 w-2 h-2 rounded-full bg-blue-500"></div>
			<div className="relative flex items-start">
				<div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center border-4 border-blue-500">
					<img src={icon} alt={title} className="w-8 h-8" />
				</div>
				<div className="ml-4">
					<h3 className="text-lg font-semibold">{title}</h3>
					<p className="text-gray-500">{description}</p>
					<p className="text-sm text-gray-500 mt-1">{date}</p>
				</div>
			</div>
		</div>
	);
};
