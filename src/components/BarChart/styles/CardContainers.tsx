import styled from "@emotion/styled";
import { theme } from '@/styles/theme'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: ${theme.spacing.lg};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
`

export const CardP = styled.p<{ color: string }>`
  color: ${({ color }) => color};
`