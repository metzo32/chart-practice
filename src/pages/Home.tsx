import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { theme } from '../styles/theme'


const pages = [
  { path: '/line', label: 'Line Chart', desc: '시계열 주가 데이터 시각화' },
  { path: '/bar', label: 'Bar Chart', desc: '월별 수익/손실 바 차트' },
  { path: '/area', label: 'Area Chart', desc: '누적 수익률 비교' },
  { path: '/pie', label: 'Pie Chart', desc: '포트폴리오 비중 관리' },
  { path: '/dashboard', label: 'Dashboard', desc: '복합 차트 대시보드' },
]

export default function Home() {
  return (
    <Wrapper>
      <Title>Graph Practice</Title>
      <Description>Recharts를 활용한 금융 데이터 시각화 연습 프로젝트</Description>
      <Grid>
        {pages.map(({ path, label, desc }) => (
          <Card key={path} to={path}>
            <CardLabel>{label}</CardLabel>
            <CardDesc>{desc}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 800px;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
`

const Card = styled(Link)`
  display: block;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
  text-decoration: none;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${theme.colors.primary};
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
  }
`

const CardLabel = styled.div`
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`

const CardDesc = styled.div`
  font-size: 13px;
  color: ${theme.colors.text.secondary};
`
