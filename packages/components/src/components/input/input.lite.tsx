import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DBInputState, DBInputProps, iconVariants } from "./model";
import { DBIcon } from '../icon';
import "./input.scss";

useMetadata({
  isAttachedToShadowDom: false,
  component: {
    includeIcon: false,
    properties: [],
  },
});

export default function DBInput(props: DBInputProps) {
  const state = useStore<DBInputState>({});

  onMount(() => {
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });

  return (
		<div
			class={
				'db-input' +
				(props.className || '') +
				(props.iconBefore ? ' icon-before' : '') +
				(props.iconAfter ? ' icon-after' : '')
			}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.iconBefore}>
				<DBIcon icon={props.iconBefore} className="icon-before" />
			</Show>
			<input
				id={props.id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={props.placeholder}
				aria-labelledby={props.id + '-label'}
				disabled={props.disabled}
				required={props.required}
			/>
			<label for={props.id} aria-hidden="true" id={props.id + '-label'}>
				<span>{props.label}</span>
				<Show when={props.required}>
					<span> *</span>
				</Show>
			</label>
			<Show when={props.description}>
				<p className="description">{props.description}</p>
			</Show>
			<Show when={props.variant}>
				<DBIcon
					icon={props.variant && iconVariants[props.variant]}
					className="elm-state-icon"
				/>
			</Show>
			<Show when={props.iconAfter}>
				<DBIcon icon={props.iconAfter} className="icon-after" />
			</Show>
		</div>
  );
}
