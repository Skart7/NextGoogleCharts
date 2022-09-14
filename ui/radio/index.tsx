import React from 'react'
import styled from 'styled-components'

interface RadioProps {
    children?: React.ReactNode;
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

const RadioGroup = styled.label.attrs<RadioProps>(p => ({
  mt: p.mt || p.m || 0,
  mb: p.mb || p.m || 0,
  mr: p.mr || p.m || 0,
  ml: p.ml || p.m || 0,
}))<RadioProps>
`
  display: flex;
  align-items: center;
  gap: 1.5vh;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin: ${p => p.mt}rem ${p => p.mr}rem ${p => p.mb}rem ${p => p.ml}rem;
`

const RadioButton = styled.div
`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
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

const Label = styled.span
`
  font-size: ${p => p.theme.typography.body1.fontSize};
  font-weight: ${p => p.theme.typography.body1.fontWeight};
  font-family: ${p => p.theme.typography.body1.fontFamily};
  line-height: ${p => p.theme.typography.body1.lineHeight};
  letter-spacing: ${p => p.theme.typography.body1.letterSpacing};
`

const Input = styled.input
`
  opacity: 0;

  &.primary {
    &:focus {
      & + .mark {
          border-radius: ${p => p.theme.shape.borderRadius};
          outline: 4px solid ${p => p.theme.palette.primary.contrastText};
      }
    }
    &:checked {
      & + .mark {
          opacity: 1;
          color: ${p => p.theme.palette.primary.main};
          background-color: ${p => p.theme.palette.primary.main};
      }
    }
    &:disabled {
      & + .mark {
          color: ${p => p.theme.palette.text.disabled};
          background-color: ${p => p.theme.palette.text.disabled};
      }
    }
  }
  &.secondary {
    &:focus {
      & + .mark {
          border-radius: ${p => p.theme.shape.borderRadius};
          outline: 4px solid ${p => p.theme.palette.secondary.contrastText};
      }
    }
    &:checked {
      & + .mark {
          opacity: 1;
          color: ${p => p.theme.palette.secondary.main};
          background-color: ${p => p.theme.palette.secondary.main};
      }
    }
    &:disabled {
      & + .mark {
          color: ${p => p.theme.palette.text.disabled};
          background-color: ${p => p.theme.palette.text.disabled};
      }
    }
  }
`

const Mark = styled.span
`
  width: calc(100% - 0.5rem);
  height: calc(100% - 0.5rem);
  border-radius: 50%;
  opacity: 0;
  transition: ${p => p.theme.transition.defaultAction};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


export const Radio = React.forwardRef((props:RadioProps, ref:any) => {

    const {
        children,
        name,
        disabled = false,
        value,
        onChange,
        color = 'primary',
        checked,
        inputProps,
        mr,mb,mt,ml,m,
        className,
        id,
    } = props

    const cName = [className, color, disabled && "disabled"].join(' ').trim()

    return (
    <RadioGroup mt={mt} mr={mr} mb={mb} ml={ml} m={m}>
      <RadioButton className={cName}>
        <Input 
          type="radio" 
          name={name} 
          value={value} 
          onChange={onChange} 
          className={color}
          ref={ref} 
          checked={checked} 
          disabled={disabled} 
          id={id}
          {...inputProps}
        />
        <Mark className="mark" />
      </RadioButton>
      <Label>{children}</Label>
    </RadioGroup>
    )

})

Radio.displayName = 'Radio'