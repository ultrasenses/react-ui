# @ultrasenses/ui-skeleton

Ultrasenses skeleton

## ✨ Features

- Small size.
- Easy to stylize.

## 🛠️ Installation

```
npm i @ultrasenses/ui-skeleton --save
```

```
yarn add @ultrasenses/ui-skeleton
```

## 💻 Usage

### in Component.tsx

```tsx
import styled from 'styled-components';
import { Skeleton as SkeletonTemplate } from '@ultrasenses/ui-skeleton';

const Skeleton = styled(SkeletonTemplate)`
  width: 200px;
  height: 20px;
`

const Component = () => (
    <Skeleton />
)
```

## 📑 License

The project is licensed under the [Apache license 2.0](https://github.com/ultrasenses/ultrasenses-ui/blob/main/LICENSE).
