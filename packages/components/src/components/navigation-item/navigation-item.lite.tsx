import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationItemProps, DBNavigationItemState } from './model';
import { DBButton } from '../button';
import { cls, uuid, visibleInVX, visibleInVY } from '../../utils';
import { DEFAULT_BACK } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	const ref = useRef<HTMLLIElement>(null);

	// jscpd:ignore-start
	const state = useStore<DBNavigationItemState>({
		initialized: false,
		hasAreaPopup: false,
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		subNavigationId: 'sub-navigation-' + uuid(),
		handleClick: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}

			if (state.hasAreaPopup) {
				state.isSubNavigationExpanded = true;
			}
		},
		handleBackClick: (event: any) => {
			event.stopPropagation();
			state.isSubNavigationExpanded = false;
		}
	});

	onMount(() => {
		state.initialized = true;
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (props.subNavigationExpanded !== undefined) {
			state.isSubNavigationExpanded = !!props.subNavigationExpanded;
		}
	}, [props.subNavigationExpanded]);

	onUpdate(() => {
		if (props.areaPopup !== undefined) {
			state.hasAreaPopup = props.areaPopup;
			state.hasSubNavigation = state.hasAreaPopup;
		} else if (state.initialized && document && state.subNavigationId) {
			const subNavigationSlot = document?.getElementById(
				state.subNavigationId
			) as HTMLMenuElement;

			if (subNavigationSlot) {
				const children = subNavigationSlot.children;
				if (children?.length > 0) {
					state.hasAreaPopup = true;
					if (!visibleInVX(subNavigationSlot)) {
						subNavigationSlot.setAttribute(
							'data-outside-vx',
							'true'
						);
					}
					if (!visibleInVY(subNavigationSlot)) {
						subNavigationSlot.setAttribute(
							'data-outside-vy',
							'true'
						);
					}
				} else {
					state.hasSubNavigation = false;
				}
			}
		}
	}, [state.initialized, props.areaPopup]);

	// jscpd:ignore-end

	return (
		<li
			ref={ref}
			id={props.id}
			class={cls('db-navigation-item', props.className)}
			data-width={props.width}
			data-icon={props.icon}
			aria-current={props.active ? 'page' : undefined}
			aria-disabled={props.disabled}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Show when={!state.hasSubNavigation}>{props.children}</Show>

			<Show when={state.hasSubNavigation}>
				<button
					aria-haspopup={state.hasAreaPopup}
					aria-expanded={state.isSubNavigationExpanded}
					className="db-navigation-item-expand-button"
					disabled={props.disabled}
					onClick={(event: ClickEvent<HTMLButtonElement>) =>
						state.handleClick(event)
					}>
					{props.children}
				</button>

				{/* TODO: Consider using popover here */}
				<menu className="db-sub-navigation" id={state.subNavigationId}>
					<Show when={state.hasAreaPopup}>
						<div class="db-mobile-navigation-back">
							<DBButton
								id={props.backButtonId}
								icon="arrow_back"
								variant="text"
								onClick={(event) =>
									state.handleBackClick(event)
								}>
								{props.backButtonText ?? DEFAULT_BACK}
							</DBButton>
						</div>
					</Show>
					<Slot name="sub-navigation"></Slot>
				</menu>
			</Show>
		</li>
	);
}
