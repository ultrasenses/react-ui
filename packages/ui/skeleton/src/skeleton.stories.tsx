import React from 'react';
import styled from 'styled-components';

import { Skeleton } from './skeleton';

import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react/types-6-0';

/* eslint-enable import/no-extraneous-dependencies */

export default {
  title: 'Info/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Package: @ultrasenses/ui-skeleton</Description>
          <Description>
            Exported Components: Skeleton
          </Description>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary />
        </>
      ),
    },
  },
} as Meta;

const Example = styled(Skeleton)`
  width: 100%;
  height: 32px;
`;

export const example = () => <Example></Example>;
