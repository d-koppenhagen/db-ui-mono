export type ComponentParserType = {
	componentsString: string;
};

export type ComponentType = {
	index?: string | number;
	type?: /* hygen type */
	| 'tag'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'p'
		| 'a'
		| 'div'
		| 'alert'
		| 'brand'
		| 'button'
		| 'card'
		| 'divider'
		| 'header'
		| 'icon'
		| 'infotext'
		| 'input'
		| 'link'
		| 'section'
		| string;
	content?: string | ComponentType[];
	props?: any;

	className?: string;
};
