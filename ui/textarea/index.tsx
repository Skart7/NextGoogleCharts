import React from 'react'
import styled, { Interpolation } from 'styled-components'

interface TextareaProps {
    variant?: "outlined" | "filled";
    color?: "primary" | "secondary";
    name?: string;
    rows?: number;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
    onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
    textHelper?: string;
    statusHelper?: "success" | "warning" | "error" | "caption";
    maxLength?: number;
    inputProps?: object;
    mt?: number;
    mb?: number;
    mr?: number;
    ml?: number;
    m?: number;
    sx?: Interpolation<React.CSSProperties>;
    className?: string;
    id?: string;
}

interface StyledTextareaProps {
    sx?: Interpolation<React.CSSProperties>;
}

const TextareaContainer = styled.div.attrs<TextareaProps>(p => ({
    mt: p.mt || p.m || 0,
    mb: p.mb || p.m || 0,
    mr: p.mr || p.m || 0,
    ml: p.ml || p.m || 0,
    sx: p.sx
}))<TextareaProps>
`
    width: 16.5rem;

    margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;

    &.fullWidth {
        width: 100%;
    }
`

const StyledTextarea = styled.textarea.attrs<StyledTextareaProps>(p => ({
    sx: p.sx
}))<StyledTextareaProps>
`
    outline: none;
    border-radius: ${p => p.theme.shape.borderRadius};
    background-color: transparent;
    font-family: ${p => p.theme.typography.fontFamily};
    border: 1px solid transparent;
    color: ${p => p.theme.palette.text.main};
    width: 100%;
    resize: none;

    font-size: 0.9rem;
    padding: 0.725rem;  

    &::placeholder {
        color: ${p => p.theme.palette.text.caption};
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

                &:disabled {
                    border-color: ${p => p.theme.palette.text.disabled};
                    color: ${p => p.theme.palette.text.disabled};
                }
            }    
        }

    }

    ${p => p.sx};
`

const TextHelper = styled.p
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

export const Textarea = React.forwardRef((props:TextareaProps, ref:any) => {

    const {
        color = "primary",
        variant = "outlined",
        statusHelper = "caption",
        value,
        fullWidth = false,
        disabled = false,
        required = false,
        readOnly = false,
        textHelper,
        inputProps,
        name,
        onChange,
        placeholder,
        rows = 4,
        maxLength,
        className,
        id,
        sx,
        mr, ml, mb, mt, m
    } = props
    
    const cNameContainer = [fullWidth && "fullWidth"].join(' ').trim()
    const cName = [className, variant, color, disabled && "disabled"].join(' ').trim()

    return (
    <TextareaContainer className={cNameContainer} mr={mr} ml={ml} mb={mb} mt={mt} m={m}>
        <StyledTextarea 
            {...inputProps}
            rows={rows} 
            placeholder={placeholder} 
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            name={name}
            onChange={onChange}
            value={value}
            maxLength={maxLength}
            ref={ref}
            className={cName}
            id={id}
            sx={sx}
        />
        <TextHelper className={statusHelper}>{textHelper}</TextHelper>
    </TextareaContainer>
    )

})

Textarea.displayName = 'Textarea'