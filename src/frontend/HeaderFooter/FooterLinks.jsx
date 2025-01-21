import React from 'react'

export default function FooterLinks({
    toggelLinks
}) {
    return (
        <div className={`footerLinks ${toggelLinks ? "active" : ""}`}>FooterLinks</div>
    )
}
