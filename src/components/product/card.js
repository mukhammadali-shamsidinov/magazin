import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { props } from '../../App';
const CardDB = ({ title, image, price, description,id }) => {
  const { openModal,detailsItem } = useContext(props)

  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3 mx-auto">
        <Card
          style={{
            width: '20rem',
            height:'70vh'
          }}
        >
          <img
            alt="Sample"
            src={image}
            style={{height:'100%',width:'100%'}}
          />
          <CardBody>
            <CardTitle tag="h5">
              {title}
            </CardTitle>

            <CardText>
              {price} so'm
            </CardText>
            <Link to={`/home/details/${id}`} onClick={()=>detailsItem(title,image,description,price,id)}>
           
              sotib olish
     
            </Link>

          </CardBody>
        </Card>
      </div>
      <br /><br />
    </>
  )
}

export default CardDB