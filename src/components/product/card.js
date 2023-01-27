import React, { useContext } from 'react'
import { Button,Card,CardBody,CardTitle,CardText,CardSubtitle } from 'reactstrap';
import { props } from '../../App';
const CardDB = () => {
    const {openModal} = useContext(props)
    
  return (
    <>
         <div className="col-12 col-sm-6 col-md-3 mt-3">
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button onClick={openModal}>
      sotib olish
    </Button>
  </CardBody>
</Card>
        </div>
        <br /><br />
    </>
  )
}

export default CardDB