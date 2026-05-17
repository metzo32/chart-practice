import styled from '@emotion/styled'
import { theme } from '../styles/theme'

export default function PieChartPage() {
  return (
    <Wrapper>
      <h2>Pie Chart</h2>
      <Placeholder>과제를 진행하면 여기에 구현됩니다.</Placeholder>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Placeholder = styled.p`
  color: ${theme.colors.text.secondary};
`
