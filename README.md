# styled component
- Simple `animation` using styled component
- `dark mode` implementation

## Contributor
- GomiLim
- oereo
  
<br>
  
## 구현할 기능 목록
- [ ] Convention 및 구조 짜기 
- [ ] 기차(png)가 달리는 것처럼 x축으로 애니메이션 주기 
- [ ] 바퀴는 따로 분리하여 rotation 주기
- [ ] 기차 연기 animation + opacity 조정
- [ ] 토끼 등의 동물 캐릭터가 바구니 안에서 y 축으로 왕복 이동
- [ ] 밤에는 전체적인 배경이 톤 다운 + 달은 제외
- [ ] radio button value 에 따라 state 관리
  
<br>

## 예외 처리 목록
- [ ] 화면의 크기가 다양할 경우

<br>

## 요구사항
- 절대 Master branch 에 바로 push 하지 않는다.(base setting은 제외입니당!)
- Pull request 로 협업 및 review를 잔행한 뒤에 merge를 합니다.
- commit message는 convention에 맞게 작성합니다.

### Base 요구사항 -
- 파일명: 파일명에는 PascalCase(대문자로 시작)를 사용합니다. 예), ReservationCard.jsx.
- 참조명: React 컴포넌트의 참조 이름에는 PascalCase를 쓰고 그 인스턴스의 이름에는 camelCase(소문자로 시작)를 사용합니다.
- 주석은 쓰는 것은 괜찮지만 짧은 한줄짜리 주석을 다는 것은 하지 말기 (최대한 변수나 method naming에 다 의미가 들어갈수 있도록 한다.)
- 추가 참조사항 : https://firejune.com/1795/Airbnb%EC%9D%98+React%252FJSX+%EC%8A%A4%ED%83%80%EC%9D%BC+%EA%B0%80%EC%9D%B4%EB%93%9Cㅍ

### 프로그래밍 요구사항 -
- 상태 관리는 전역 상태 대신 지역 상태로 처리하는 것을 권장한다. 전역 상태를 사용하려면 React Context API를 사용한다. (Redux, Mobx 대신 React Context만 쓸지 논의 필요)
- 모든 styled 변수는 해당 컴포넌트 파일에 정의하는 것을 권장한다.
- 다른 컴포넌트랑 같은 css를 공유할 땐 `export` 또는 `src/components/layouts`
- DOM 트리가 깊어질수록 렌더링 속도가 느려지기 때문에, 외부 CSS 라이브러리에 있는 컴포넌트는 Wrapper 컴포넌트를 사용하지 않고 가능하면 해당 컴포넌트를 상속해 스타일을 적용하는 것을 권장한다.
```javascript
import styled from 'styled-components'
import { ThirdPartyStyledComponent } from 'third-party-css-library'

const StyledComponent = styled(ThirdPartyStyledComponent)
    margin: 1rem;
    ...
```

