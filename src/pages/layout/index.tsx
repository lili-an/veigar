import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Btn = styled.div`
`
const Header = () => {
  return (
    <div css={style}>
      <button className="btn">Button</button>
    </div>
  )
}

export default function Layout() {
  return (
    <Header />
  )
}

const style = css`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    border: none;
    background: #0070f3;
    color: #fff;
    padding: 10px 30px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;