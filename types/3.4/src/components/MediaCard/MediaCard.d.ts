import React from 'react';
import { Action, ActionListItemDescriptor } from '../../types';
declare type Size = 'small' | 'medium';
interface MediaCardProps {
    /** The visual media to display in the card */
    children: React.ReactNode;
    /** Heading content */
    title: string;
    /** Body content */
    description: string;
    /** Main call to action, rendered as a basic button */
    primaryAction: Action;
    /** Secondary call to action, rendered as a plain button */
    secondaryAction?: Action;
    /** Action list items to render in ellipsis popover */
    popoverActions?: ActionListItemDescriptor[];
    /** Whether or not card content should be laid out vertically
     * @default false
     */
    portrait?: boolean;
    /** Size of the visual media in the card
     * @default 'medium'
     */
    size?: Size;
}
export declare function MediaCard({ title, children, primaryAction, secondaryAction, description, popoverActions, portrait, size, }: MediaCardProps): JSX.Element;
export {};