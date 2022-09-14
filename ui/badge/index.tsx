import React from 'react'
import styled from 'styled-components'

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    color?: "secondary" | "primary" | "warning" | "error" | "success";
    max?: number;
    showZero?: boolean;
    value?: number;
    variant?: "dot" | "standard"
}

const StyledBadge = styled.div
`
    position: relative;
`

const StyledBadgeContent = styled.span
`
    pointer-events: none;

    &.standard {
        position: absolute;
        top: 0rem;
        right: 0rem;
        height: 1.1rem;
        padding: 0 0.35rem;
        border-radius: 40%;
        box-shadow: 0px 1px 0px 1px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;

        font-family: ${p => p.theme.typography.caption.fontFamily};
        font-size: ${p => p.theme.typography.caption.fontSize};
        font-weight: ${p => p.theme.typography.caption.fontWeight};
        letter-spacing: ${p => p.theme.typography.caption.letterSpacing};
        line-height: ${p => p.theme.typography.caption.lineHeight};

        &.primary {
            background-color: ${p => p.theme.palette.primary.main};
            color: ${p => p.theme.palette.primary.contrastText};
        }
        &.secondary {
            background-color: ${p => p.theme.palette.secondary.main};
            color: ${p => p.theme.palette.secondary.contrastText};
        }
        &.success {
            background-color: ${p => p.theme.palette.success.main};
            color: ${p => p.theme.palette.success.contrastText};
        }
        &.error {
            background-color: ${p => p.theme.palette.error.main};
            color: ${p => p.theme.palette.error.contrastText};
        }
        &.warning {
            background-color: ${p => p.theme.palette.warning.main};
            color: ${p => p.theme.palette.warning.contrastText};
        }
    }
    &.dot {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 40%;
        box-shadow: 0px 1px 0px 1px rgba(0,0,0,0.3);
        z-index: 1;
        color: transparent;

        &.primary {
            background-color: ${p => p.theme.palette.primary.main};
        }
        &.secondary {
            background-color: ${p => p.theme.palette.secondary.main};
        }
        &.success {
            background-color: ${p => p.theme.palette.success.main};
        }
        &.error {
            background-color: ${p => p.theme.palette.error.main};
        }
        &.warning {
            background-color: ${p => p.theme.palette.warning.main};
        }
    }
`

export const Badge = React.forwardRef((props:BadgeProps, ref:any) => {

    const {
        children,
        value = 0,
        showZero = false,
        color = "primary",
        max = null,
        className = "",
        variant="standard"
    } = props

    const cName = [className, color, variant].join(' ').trim()

    const [showValue, setShowValue] = React.useState(false)
    const [Value, setValue] = React.useState<number | string | null>(0)

    React.useEffect(() => {
        variant === "standard" && value === 0 && !showZero ? setShowValue(false) : setShowValue(true);
        variant === "standard" && max && value > max ? setValue(`${max}+`) : setValue(value);
    }, [showZero, variant, value, max])

    return (
    <StyledBadge>
        {showValue && 
            <StyledBadgeContent className={cName} ref={ref}>
                {Value}
            </StyledBadgeContent>
        }
        {children}
    </StyledBadge>
    )

})

Badge.displayName = 'Badge'