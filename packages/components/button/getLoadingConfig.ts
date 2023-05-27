import { BaseButtonProps, LoadingConfigType } from '.'

export function getLoadingConfig(
  loading: BaseButtonProps['loading']
): LoadingConfigType {
  if (typeof loading === 'object' && loading) {
    const delay = loading?.delay
    const isDelay =
      !Number.isNaN(delay) && typeof delay === 'number'
    return {
      loading: true,
      delay: isDelay ? delay : 0,
    }
  }

  return {
    loading: !!loading,
    delay: 0,
  }
}
