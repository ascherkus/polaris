import React from 'react';
interface Transition {
    /** Assign a transition duration to the collapsible animation. */
    duration?: string;
    /** Assign a transition timing function to the collapsible animation */
    timingFunction?: string;
}
export interface CollapsibleProps {
    /** Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component’s aria-controls prop. */
    id: string;
    /** Toggle whether the collapsible is expanded or not. */
    open: boolean;
    /** Assign transition properties to the collapsible */
    transition?: Transition;
    /** The content to display inside the collapsible. */
    children?: React.ReactNode;
}
declare type AnimationState = 'idle' | 'measuring' | 'closingStart' | 'closing' | 'openingStart' | 'opening';
interface State {
    height?: number | null;
    animationState: AnimationState;
    open: boolean;
}
declare const ParentCollapsibleExpandingContext: React.Context<boolean>;
declare class CollapsibleInner extends React.Component<CollapsibleProps, State> {
    static contextType: React.Context<boolean>;
    static getDerivedStateFromProps({ open: willOpen }: CollapsibleProps, { open, animationState: prevAnimationState }: State): {
        animationState: AnimationState;
        open: boolean;
    };
    context: React.ContextType<typeof ParentCollapsibleExpandingContext>;
    state: State;
    private node;
    private heightNode;
    componentDidUpdate({ open: wasOpen }: CollapsibleProps): void;
    render(): JSX.Element;
    private handleTransitionEnd;
}
export declare const Collapsible: React.ComponentClass<CollapsibleProps, any> & typeof CollapsibleInner;
export {};