import { css, styled } from 'styled-components'
import { ButtonProps } from '../type'
import {
  getBackground,
  getFontSize,
  getPaddingSize,
  getRadius,
} from '@packages/styled-system'

export const ButtonContainer = styled.button<{
  type?: ButtonProps['type']
  size?: ButtonProps['size']
  shape?: ButtonProps['shape']
  displayblock?: ButtonProps['block'] | number
  disabled?: ButtonProps['disabled'] | number
  loading?: ButtonProps['loading'] | number
  ghost?: ButtonProps['ghost'] | number
}>`
  display: ${({ displayblock }) =>
    displayblock ? 'block' : 'inline-flex'};
  width: ${({ displayblock }) =>
    displayblock ? '100%' : 'auto'};
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  border-radius: ${({ shape }) => getRadius(shape)};

  font-size: ${({ size }) => getFontSize(size)};
  padding: ${({ size }) => getPaddingSize(size)};

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    pointer-events: none;
    transform: scale(1);
    transition: opacity 0.5s, transform 0.5s;
  }

  &:active {
    transform: scale(0.98);
  }

  &:active::after {
    opacity: 1;
    transform: scale(0);
    transition: opacity 0s;
  }

  ${({ type }) => css`
    background: ${getBackground({ type })};
    color: ${type === 'link' ? '#1890ff' : '#fff'};
    border-color: ${type === 'link'
      ? 'transparent'
      : 'transparent'};
    &:active {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.4),
        0 0 0 rgba(255, 255, 255, 0.9),
        inset -7px -7px 12px rgba(255, 255, 255, 0.9),
        inset 7px 7px 12px rgba(0, 0, 0, 0.4);
    }
  `}

  ${({ loading }) =>
    loading &&
    css`
      cursor: not-allowed;
      background: #f5f5f5;
      color: #ccc;
      &:hover {
        opacity: 1;
      }
      // 去除点击效果
      &:active {
        transform: scale(1);
        box-shadow: none;
      }
      // 去除动画
      &::after {
        opacity: 0;
        transform: scale(0);
        transition: opacity 0s;
      }
  `}


  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: #f5f5f5;
      color: #ccc;
      &:hover {
        opacity: 1;
      }
      // 去除点击效果
      &:active {
        transform: scale(1);
        box-shadow: none;
      }
      // 去除动画
      &::after {
        opacity: 0;
        transform: scale(0);
        transition: opacity 0s;
      }
  `}
`
