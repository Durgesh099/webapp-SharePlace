import React , { useState }from 'react';
import Button from '../shared/components/Button';
import Card from '../shared/components/Card';
import Modal from '../shared/components/Modal';
import './PlacesItems.css';

const PlacesItems = props => {
  const [showMap, setShowMap] = useState(false);
  const [showD, setD] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const openDelete = () => setD(!showD);
  const cancelDelete = () => setD(false);


  return (
    <React.Fragment>

    <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <a href={props.location}><h2>Google Maps Link</h2></a>
          <p>GoogleMap can be rendered here. Map not visible due to some contraints</p>
        </div>
    </Modal>

    <Modal
      show={showD}
      onCancel={cancelDelete}
      header='Are you sure?'
      footerClass="place-item__modal-actions"
      footer={
        <React.Fragment>
          <Button inverse onClick={cancelDelete}>CANCEL</Button>
          <Button danger>DELETE</Button>
        </React.Fragment>
      }
    >
      <h3>Do you want to proceed and DELETE the place? This action cannot be undone thereafter.</h3>
    </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger onClick={openDelete}>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlacesItems;
