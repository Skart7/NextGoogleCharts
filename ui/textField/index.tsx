import React from 'react'
import styled, { Interpolation } from 'styled-components'

interface TextFieldProps {
    color?: "primary" | "secondary";
    variant?: "outlined" | "filled";
    size?: "small" | "medium" | "large";
    textHelper?: string;
    statusHelper?: "success" | "warning" | "error" | "caption";
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string; 
    name?: string; 
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean; 
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    inputProps?: object;
    sx?: Interpolation<React.CSSProperties>;
    className?: string;
    id?: string;
}

interface GroupInputProps {
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
}

interface InputProps {
    sx?: Interpolation<React.CSSProperties>;
}

const TextFieldContainer = styled.div.attrs<GroupInputProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
}))<GroupInputProps>    
`
    width: 16.5rem;

    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;

    &.fullWidth {
        width: 100%;
    }
`

const TextFieldContent = styled.label
`
    position: relative; 
    width: 100%;
`

const StyledIconStart = styled.span
`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
`
const StyledIconEnd = styled.span
`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`

const Input = styled.input.attrs<InputProps>(p => ({
    sx: p.sx
}))<InputProps>
`
    outline: none;
    border-radius: ${p => p.theme.shape.borderRadius};
    background-color: transparent;
    font-family: ${p => p.theme.typography.fontFamily};
    border: 1px solid transparent;
    width: 100%;

    &::placeholder {
        color: ${p => p.theme.palette.text.caption};
    }

    & + .icon {
        color: ${p => p.theme.palette.text.caption};
    }

    &.small {
        font-size: 0.825rem;
        padding: 0.625rem;        
    }
    &.medium {
        font-size: 0.9rem;
        padding: 0.725rem;  
    }
    &.large {
        font-size: 1rem;
        padding: 0.85rem;
    }

    &.start {
        padding-left: 2.5rem;
    }
    &.end {
        padding-right: 2.5rem;
    }

    &.filled {
        background-color: ${p => p.theme.palette.text.disabled};

        &.primary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.primary.main};
            }
            &:hover, &:focus, &:not(:placeholder-shown) {
                background-color: ${p => p.theme.palette.primary.action};
                color: ${p => p.theme.palette.primary.contrastText};

                & + .icon {
                    color: ${p => p.theme.palette.primary.contrastText};
                }

                &:disabled   {
                    background-color: ${p => p.theme.palette.text.disabled};
                    color: ${p => p.theme.palette.text.caption};
                }
            }   
        }
        &.secondary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.secondary.main};
            }
            &:hover, &:focus, &:not(:placeholder-shown) {
                background-color: ${p => p.theme.palette.secondary.action};
                color: ${p => p.theme.palette.secondary.contrastText};

                & + .icon {
                    color: ${p => p.theme.palette.secondary.contrastText};
                }

                &:disabled {
                    background-color: ${p => p.theme.palette.text.disabled};
                    color: ${p => p.theme.palette.text.caption}
                }
            }   
        }
    }

    &.outlined {
        border-color: ${p => p.theme.palette.text.caption};
        color: ${p => p.theme.palette.text.caption};
        
        &.primary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.primary.main};
            }

            &:hover, &:focus, &:not(:placeholder-shown) {
                border-color: ${p => p.theme.palette.primary.main};
                color: ${p => p.theme.palette.primary.main};

                & + .icon {
                    color: ${p => p.theme.palette.primary.main};
                }

                &:disabled {
                    border-color: ${p => p.theme.palette.text.disabled};
                    color: ${p => p.theme.palette.text.disabled};
                }
            }    
        }
        &.secondary {
            &:focus {
                outline: 2px solid ${p => p.theme.palette.secondary.main};
            }
            &:hover, &:focus, &:not(:placeholder-shown) {
                border-color: ${p => p.theme.palette.secondary.main};
                color: ${p => p.theme.palette.secondary.main};

                & + .icon {
                    color: ${p => p.theme.palette.secondary.main};
                }

                &:disabled {
                    border-color: ${p => p.theme.palette.text.disabled};
                    color: ${p => p.theme.palette.text.disabled};
                }
            }    
        }

    }

    ${p => p.sx};
`

const TextHelper = styled.span
`
    font-family: ${p => p.theme.typography.caption.fontFamily};
    font-weight: ${p => p.theme.typography.caption.fontWeight};
    font-size: ${p => p.theme.typography.caption.fontSize};
    line-height: ${p => p.theme.typography.caption.lineHeight};
    letter-spacing: ${p => p.theme.typography.caption.letterSpacing};
    margin-left: 0.5rem;
    margin-top: 0.1rem;
    
    &.caption {
        color: ${p => p.theme.palette.text.caption};
    }
    &.success {
        color: ${p => p.theme.palette.success.main};
    }
    &.error {
        color: ${p => p.theme.palette.error.main};
    }
    &.warning {
        color: ${p => p.theme.palette.warning.main};
    }
`

export const TextField = React.forwardRef((props:TextFieldProps, ref:any) => {

    const {
        color = "primary",
        disabled = false,
        fullWidth = false,
        name,
        placeholder,
        required = false,
        readOnly = false,
        size = "medium",
        statusHelper = "caption",
        textHelper,
        onChange,
        type = "text",
        value,
        variant = "outlined",
        iconStart,
        iconEnd,
        inputProps,
        className,
        id,
        sx,
        mr, ml, mb, mt, m
    } = props

    const cName = [className, variant, color, size, iconStart && "start", iconEnd && "end"].join(' ').trim()

    return (
    <TextFieldContainer className={fullWidth?"fullWidth" : ""} mr={mr} ml={ml} mb={mb} mt={mt} m={m}>
        <TextFieldContent>
            <Input
                {...inputProps}
                value={value}
                onChange={onChange}
                type={type}
                readOnly={readOnly}
                required={required}
                disabled={disabled}
                name={name}
                className={cName}
                placeholder={placeholder}
                ref={ref}
                sx={sx}
                id={id}
            />
            {iconStart && <StyledIconStart className="icon">{iconStart}</StyledIconStart>}
            {iconEnd && <StyledIconEnd className="icon">{iconEnd}</StyledIconEnd>}
        </TextFieldContent>
        {textHelper && <TextHelper className={statusHelper}>{textHelper}</TextHelper>}
    </TextFieldContainer>
    )

})

TextField.displayName = 'TextField'