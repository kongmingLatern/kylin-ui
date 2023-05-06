export function extractThemeConfig(
  themeConfig,
  componentName,
  themeType
) {
  const result = {}
  function extractValueByType(type: string) {
    if (
      componentName in themeConfig &&
      themeConfig[componentName][type]
    ) {
      for (const [key, value] of Object.entries(
        themeConfig[componentName][type]
      )) {
        result[key] = value
      }
    } else {
      console.warn(
        `type ${type} not exists in ${componentName}, please check your themeConfig`
      )
    }
    return result
  }

  function isSpecialClass(key) {
    return key === 'hover' || key === 'active'
  }

  let str = ''
  const res = {
    ...extractValueByType('common'),
    ...extractValueByType(themeType),
  }
  return combineProps(res)

  function combineProps(res) {
    const arr = Object.entries(res).map(([key, value]) => {
      if (isSpecialClass(key)) {
        // NOTE: 若含有特殊类，则需要将特殊类的属性提取出来
        return combineObject(value, {
          specialKey: key,
        })
      } else {
        return `${key}-${value}`
      }
    })
    return arr.join(' ').trim()
  }
}

function combineObject(obj, options?) {
  const { specialKey } = options || {}
  const arr = Object.entries(obj).map(([key, value]) => {
    return `${
      specialKey ? specialKey + ':' : ''
    }${key}-${value}`
  })
  return arr.join(' ').trim()
}
