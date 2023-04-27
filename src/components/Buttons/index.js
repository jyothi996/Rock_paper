import {ButtonContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {imageDetails, onGetId} = props
  const {id, imageUrl} = imageDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <ButtonContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonContainer>
  )
}
export default Buttons
