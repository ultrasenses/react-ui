# @ultrasenses/system-theme

Ultrasenses theme

## ✨ Features

- Easy to use.
- Uses [Heebo](https://fonts.google.com/specimen/Heebo) as main font and [Apple Colors](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/).

## 📦 Modules

- color
- typography
- media

## 🛠️ Installation

```
npm i @ultrasenses/system-theme --save-dev
```

```
yarn add @ultrasenses/system-theme --dev
```

## 💻 Usage

### in Component.style.ts

```typescript
import styled from 'styled-components'
import { media, color, typography } from '@ultrasenses/system-theme'

export const StyledDiv = styled.div`
  color: ${color.systemDefaultLight.systemBlue};
  ${typography.medium14};
  ${media.forTablet} {
    ${typography.medium16};
  }
`
```

## 📑 License

The project is licensed under the [Apache license 2.0](https://github.com/ultrasenses/ultrasenses-ui/blob/main/LICENSE).
