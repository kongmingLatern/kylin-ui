import { styled } from 'styled-components'

export const ImagePreviewContainer = styled.span`
  display: inline-flex;
  position: relative;
  user-select: none;
`

export const ImagePreviewMask = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.6);
  }
`

export const ImagePreviewInfo = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
`

export const ImagePreviewCover = styled.img`
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
    rotate(0deg);
  max-width: 80%;
  max-height: 80%;
  min-width: 20%;
  min-height: 20%;
  object-fit: cover;
  user-select: none;
`

export const ImagePreviewPopupTools = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 1rem;
  left: 0;
`

export const ImagePreviewPopupToolsIcon = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

export const ImagePreviewPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`

export const ImagePreviewPopupContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: transform 0.3s
    cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  z-index: -1;
`
