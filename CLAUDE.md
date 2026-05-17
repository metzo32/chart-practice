# Graph Practice Project

금융/증권 FE 취업을 목표로 하는 1년차 개발자의 데이터 시각화 연습 프로젝트.
정량 데이터를 그래프로 표현하고, 인풋 자동계산·표·다양한 차트를 동적으로 다루는 데 익숙해지는 것이 목적이다.

## Tech Stack

| 항목 | 선택 |
|------|------|
| 번들러 | Vite (react-ts) |
| 언어 | TypeScript |
| 라우팅 | react-router-dom v6 |
| 스타일링 | @emotion/react + @emotion/styled |
| 차트 | recharts |

## Project Structure

```
src/
├── pages/          # 라우트별 페이지 컴포넌트
├── components/     # 공용 컴포넌트 (Layout, DataTable 등)
├── data/           # 목 데이터 (mockData.ts)
└── styles/         # 테마 토큰 (theme.ts)
```

## Routing

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Home | 페이지 인덱스 |
| `/line` | LineChartPage | 시계열 주가 라인 차트 |
| `/bar` | BarChartPage | 월별 수익/손실 바 차트 |
| `/area` | AreaChartPage | 누적 수익률 에어리어 차트 |
| `/pie` | PieChartPage | 포트폴리오 비중 파이 차트 |
| `/dashboard` | DashboardPage | 복합 차트 대시보드 |

## Styling Rules

- **인라인 스타일(`style={{ }}`) 절대 사용 금지** — emotion `styled` 컴포넌트로만 스타일링
- 테마 토큰은 `src/styles/theme.ts`의 `theme` 객체에서 가져온다
- 색상·간격·폰트 등 반복 값은 반드시 theme 토큰 참조

## Code Rules

- 컴포넌트는 단일 책임 원칙을 따른다
- 중복 코드는 공용 컴포넌트 또는 유틸 함수로 추출한다
- 함수명·변수명은 의도를 명확히 전달해야 한다
- 불필요한 리렌더링을 유발하는 코드는 피한다
- 새 프리셋이나 설정 파일은 사용자 요청 없이 생성하지 않는다

## Learning Workflow

이 프로젝트는 **과제 단위 학습** 방식으로 진행한다.

1. Claude가 과제를 **한 번에 하나씩** 제시한다
2. 사용자가 구현 완료 후 코드를 제출하면 코드리뷰를 진행한다
3. 코드리뷰 통과 후 다음 과제로 넘어간다

### 코드리뷰 기준

| 관점 | 체크 항목 |
|------|----------|
| 컴포넌트 구조 | 단일 책임 원칙, props 설계 적절성 |
| 코드 일관성 | 네이밍 컨벤션, 스타일 통일 |
| 중복 최소화 | 반복 코드 추출 여부 |
| 폴더 구조 | 파일 위치의 일관성 |
| 네이밍 | 함수명/변수명이 의도를 명확히 전달하는지 |
| 가독성 | 불필요한 complexity 제거 |
| 렌더링 효율 | 불필요한 리렌더링, useMemo/useCallback 필요 여부 |

### 과제 커리큘럼 (순서)

1. 정적 데이터로 기본 LineChart 렌더링
2. useState로 데이터 상태 관리 + 버튼으로 데이터 교체
3. 인풋으로 데이터 추가 → 차트 실시간 반영
4. 기간 필터 버튼 (1W / 1M / 3M) 구현
5. BarChart로 월별 데이터 시각화
6. 합계/평균 자동 계산 표시
7. 두 데이터셋 비교 (AreaChart)
8. PieChart + 비중 합계 100% 자동 재계산
9. 공용 DataTable 컴포넌트 추출/재사용
10. Dashboard 복합 레이아웃 조합

## Dev

```bash
npm run dev    # 개발 서버
npm run build  # 빌드
```
