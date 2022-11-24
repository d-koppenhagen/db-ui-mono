import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBCardState, DBCardProps } from './model';
import './card.scss';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBCard(props: DBCardProps) {
	const state = useStore<DBCardState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			class="db-card"
			data-variant={props.variant}
			data-color-variant={props.colorVariant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</div>
	);
}
