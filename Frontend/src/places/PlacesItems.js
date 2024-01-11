import React , { useState, useContext }from 'react';
import Button from '../shared/components/Button';
import Card from '../shared/components/Card';
import Modal from '../shared/components/Modal';
import ErrorModal from '../shared/UIElements/ErrorModal'
import LoadingSpinner from '../shared/UIElements/LoadingSpinner'
import {useHttpClient} from '../shared/hooks/http-hook'
import { AuthContext } from '../shared/context/auth-context';
import './PlacesItems.css';

const PlaceItem = props => {
  const {isLoading,error,clearError,sendRequest} = useHttpClient()
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try{
      await sendRequest(
        `https://webapp-share-place.vercel.app/api/api/places/${props.id}`,
        'DELETE',
        null,
        {
          Authorization: 'Bearer '+auth.token
        }
      );
      props.onDelete(props.id)
    } catch(err){}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} clearError={clearError}/>
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
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay/>}
          <div className="place-item__image">
            <img src={`https://webapp-share-place.vercel.app/${props.image}`} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.userId === props.creatorId && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}

            {auth.userId === props.creatorId && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
