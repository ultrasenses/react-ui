import styled from 'styled-components';

export const Skeleton = styled.div`
  background-color: #eee !important;
  background-image: linear-gradient(90deg, #eee 45%, #f7f7f7, #eee 65%);
  animation: animation-skeleton 2s ease-in-out infinite;
  background-size: 250% 250%;

  @keyframes animation-skeleton {
    0% {
      background-position: 120% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;
