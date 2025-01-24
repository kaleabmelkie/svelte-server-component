export type UnknownProps = Record<string, unknown>;

export type Rendered<TProps extends UnknownProps> = {
	props: TProps;
	head: string;
	body: string;
};
