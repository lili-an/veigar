import { Image } from "@arco-design/web-react"
import { css } from "@emotion/react"

const ImgStyle = css({
  img: {
    width: '100vw',
    height: '100vh',
    'object-fit': 'cover'
  }
})

export default function Dog() {
  return (
    <section css={ImgStyle}>
      <Image
        preview={false}
        src={`//source.unsplash.com/1600x900/?animal,dog`}
        loader={true}
      />
    </section>
  )
}