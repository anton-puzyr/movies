export const required = value => value ? undefined : 'Required';

export const number = value => value && isNaN(Number(value)) ? 'Only numbers' : undefined;

export const minValue3 = value => value && value.length < 3 ? 'String is to short' : undefined;

export const maxValue4 = value => value && value.length > 4 ? 'String is to long' : undefined;
