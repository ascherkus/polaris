import React from 'react';
export interface LoadingProps {
}
interface State {
    progress: number;
    step: number;
    animation: number | null;
}
export declare class Loading extends React.Component<LoadingProps, State> {
    state: State;
    private ariaValuenow;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private increment;
}
export {};