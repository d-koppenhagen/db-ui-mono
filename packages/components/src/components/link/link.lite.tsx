import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { DBLinkState, DBLinkProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBLink(props: DBLinkProps) {
	const state = useStore<DBLinkState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<a
			class={'db-link' + (props.className ? ' ' + props.className : '')}
			href={props.href}
			anchorlink={props.anchorLink}
			title={props.title}
			target={props.target}
			rel={props.rel}
			role={props.role}
			aria-disabled={props.disabled}
			tabIndex={props.disabled ? -1 : 0}
			aria-selected={props.selected}
			aria-label={props.label}
			hrefLang={props.hreflang}
			aria-current={props.current}
			data-size={props.size}
			data-variant={props.variant}
			data-content={props.content || 'internal'}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children || props.href}
			<DBIcon
				icon={props.content == 'external' ? 'link-external' : 'link'}
				withText="true"></DBIcon>
		</a>
	);
}
