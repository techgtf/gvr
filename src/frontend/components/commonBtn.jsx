import React from 'react';
import { Link } from 'react-router-dom';

export default function CommonBtn({
    TagName = 'button', // Default to 'button'
    children,
    className = '',
    onClick,
    to = '#',
    href, // Separate href for anchor tags
    target,
    type = 'button', // Only for button
    'aria-label': ariaLabel, // Ensure accessibility
    ...rest // Any other props
}) {
    // Determine which element it is
    const isReactRouterLink = TagName === Link;

    const isAnchor = TagName === 'a';
    const isButton = TagName === 'button';

    // Compute final props based on tag type
    const tagProps = {
        className: `common_btn uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-0 ${className}`,
        onClick: (!isReactRouterLink && !isAnchor) ? onClick : undefined, // Only attach if not Link or anchor
        'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined), // Ensure accessibility
        ...(isReactRouterLink ? { to } : {}), // React Router Link needs 'to'
        ...(isAnchor ? { href: href || to, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined } : {}), // Anchor needs 'href'
        ...(isButton ? { type } : {}), // Button needs 'type'
        ...rest, // Spread any remaining props
    };

    // Render dynamically
    const Component = isReactRouterLink ? Link : TagName;

    return <Component {...tagProps}>{children}</Component>;
}
