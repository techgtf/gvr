import React from 'react';
import { Link } from 'react-router-dom';

export default function CommonBtn({
    TagName = 'button', // Default to 'button'
    children,
    className = '',
    onClick,
    to,
    target,
    type = 'button', // Only for button
    ...rest // Any other props
}) {
    const isReactRouterLink = TagName === Link; // Check if it's React Router's Link
    const isAnchor = TagName === 'a'; // Check if it's an anchor tag

    return (
        <TagName
            className={`common_btn uppercase cursor-pointer ${className}`}
            onClick={!isReactRouterLink && !isAnchor ? onClick : undefined} // Attach only if not Link or a
            to={isReactRouterLink ? to : undefined} // Attach to for Link
            target={isAnchor ? target : undefined} // Attach target for anchor
            type={TagName === 'button' ? type : undefined} // Attach type for button
            {...rest}
        >
            {children}
        </TagName>
    );
}
