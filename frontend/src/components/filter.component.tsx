import { ChangeEventHandler, ReactElement } from "react";

const FilterSelect = ({
	children,
	id,
	description,
	onChange,
}: {
	children: ReactElement[];
	id: string;
	description: string;
	onChange?: ChangeEventHandler;
}) => (
	<div className="flex flex-col gap-2">
		<label
			className="block text-gray-700 text-sm font-bold mb-2"
			htmlFor={id}
		>
			{description}
		</label>
		<select
			className="block appearance-none  bg-white border border-gray-400
             hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus
             :outline-none focus:shadow-outline"
			id={id}
			onChange={onChange}
		>
			{children}
		</select>
	</div>
);

export default FilterSelect;
