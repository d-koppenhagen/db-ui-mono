import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState,
	FormCheckProps
} from '../../shared/model';

export interface DBCheckboxDefaultProps {
	describedbyid?: string;
	size?: 'small';
	value?: any;
	indeterminate?: boolean;
}

export type DBCheckboxProps = DBCheckboxDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	FormCheckProps;

export type DBCheckboxDefaultState = {
	initialized: boolean;
	_checked: boolean;
	_indeterminate: boolean;
};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState;
