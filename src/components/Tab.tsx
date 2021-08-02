import React, { useState } from 'react';

const content: Array<{ id: number; tab: string; content: string }> = [
	{
		id: 0,
		tab: 'Section 1',
		content: 'I am the content of the Section 1',
	},
	{
		id: 1,
		tab: 'Section 2',
		content: 'I am the content of the Section 2',
	},
];

const Tab = () => {
	const useTabs = (
		initialTab: number,
		allTabs: Array<{ id: number; tab: string; content: string }>
	) => {
		const [currentIndex, setCurrentIndex] = useState(initialTab);
		return {
			currentItem: allTabs[currentIndex],
			changeItem: (item: number) => setCurrentIndex(item),
		};
	};
	const tabs = useTabs(0, content);
	// console.log(typeof tabs.currentItem.content);
	return (
		<section>
			<h3>Me, Career, Portfolio</h3>
			<div>
				{content.map((item, index) => (
					<button
						type="button"
						key={item.id}
						onClick={() => tabs.changeItem(index)}
					>
						{item.tab}
					</button>
				))}
			</div>
			<div>{tabs.currentItem.content}</div>
		</section>
	);
};

export default Tab;
