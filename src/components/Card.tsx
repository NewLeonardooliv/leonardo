
export type CardProps = {
	icon: string
	name: string
	link?: string
}

export function Card({ name, icon, link }: CardProps) {
	return (
		<a href={link} target="__blank">
			<div className="hover:drop-shadow-2xl transition-all m-1 w-40 h-40 bg-current-line rounded-lg cursor-pointer">
				<div className="flex flex-col items-center pb-10 px-4 pt-4">
					<img className="h-14 w-14 my-3 object-cover" src={icon} />
					<h5 className="mb-1 text-xl font-medium text-white">{name}</h5>
				</div>
			</div>
		</a>
	);
}