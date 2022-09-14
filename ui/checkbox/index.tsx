import React from 'react'
import styled from 'styled-components'

interface CheckboxProps {
    children: React.ReactNode;
    color?: "primary" | "secondary";
    name?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    checked?: boolean;
    inputProps?: object;
    className?: string;
    id?: string;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
}

const CheckboxContainer = styled.label.attrs<CheckboxProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
}))<CheckboxProps>
`
    display: flex;
    align-items: center;
    gap: 1.5vh;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.5%;
    border-radius: ${p => p.theme.shape.borderRadius};
    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
`

const StyledCheckbox = styled.span
`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${p => p.theme.shape.borderRadius};
    border: 2px solid transparent;
    position: relative;

    &.primary {
        border-color: ${p => p.theme.palette.primary.main};
    }
    &.secondary {
        border-color: ${p => p.theme.palette.secondary.main};
    }
    &.disabled {
        border-color : ${p => p.theme.palette.text.disabled};
    }

`

const Input = styled.input
`
    opacity: 0;

    &.primary {
        &:focus {
            & + .mark {
                opacity: 1;
                color: transparent;
                outline: 5px solid ${p => p.theme.palette.primary.main};
                border-radius: ${p => p.theme.shape.borderRadius};
            }
        }
        &:checked {
            & + .mark {
                opacity: 1;
                color: ${p => p.theme.palette.primary.main};
                background-color: ${p => p.theme.palette.primary.action};
            }
        }
        &:disabled {
            & + .mark {
                background-color: transparent;
                color: ${p => p.theme.palette.text.disabled};
            }
        }
    }
    &.secondary {
        &:focus {
            & + .mark {
                opacity: 1;
                color: transparent;
                outline: 5px solid ${p => p.theme.palette.secondary.main};
                border-radius: ${p => p.theme.shape.borderRadius};
            }
        }
        &:checked {
            & + .mark {
                opacity: 1;
                color: ${p => p.theme.palette.secondary.main};
                background-color: ${p => p.theme.palette.secondary.action};
            }
        }
        &:disabled {
            & + .mark {
                background-color: transparent;
                color: ${p => p.theme.palette.text.disabled};
            }
        }
    }

`

const Mark = styled.span
`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const Label = styled.span
`
    font-size: ${p => p.theme.typography.body1.fontSize};
    font-weight: ${p => p.theme.typography.body1.fontWeight};
    font-family: ${p => p.theme.typography.body1.fontFamily};
    line-height: ${p => p.theme.typography.body1.lineHeight};
    letter-spacing: ${p => p.theme.typography.body1.letterSpacing};
`

export const Checkbox = React.forwardRef((props:CheckboxProps, ref:any) => {

    const {
        children,
        color = "primary",
        name,
        disabled = false,
        onChange,
        value,
        checked,
        inputProps,
        mr,mb,mt,ml,m,
        className,
        id
    } = props

    const cName = [className, color, disabled && "disabled"].join(' ').trim()

    return (
    <CheckboxContainer className={color} mt={mt} mr={mr} mb={mb} ml={ml} m={m}>
        <StyledCheckbox className={cName}>
            <Input 
                type="checkbox"
                className={color}
                id={id}
                name={name} 
                value={value} 
                onChange={onChange} 
                disabled={disabled} 
                checked={checked}
                {...inputProps}
                ref={ref}
            />
            <Mark className="mark">&#10004;</Mark>
        </StyledCheckbox>
        <Label className="label">{children}</Label>
    </CheckboxContainer>
    )

})

Checkbox.displayName = 'Checkbox'