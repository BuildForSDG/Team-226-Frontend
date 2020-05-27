import React from 'react';
import Button from 'react-bootstrap/Button';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import '../../styles/view-resource.css';

const ViewResource = () => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">Resource name some long name here</span>}
      footer={<Button className="default-btn" data-testid="doneeResource" size="sm" onClick={hide}>DONE</Button>}
      hide={hide}
      cancel={cancel}
    >
      <div className="resource-modal-body">
        <p className="medium-text">19-05-2020 - Categoty name</p>
        <p className="">
          Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
          Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
          toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet
          roll cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
          ice cream gummies chupa chups halvah toffee candy canes cand.
        </p>
        <iframe
          width="100%"
          height="278"
          src="https://www.youtube.com/embed/helEv0kGHd4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
        <p className="">
          Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
          Chocolate marzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
          toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet
          roll cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
          ice cream gummies chupa chups halvah toffee candy canes cand.
        </p>
      </div>
    </DialogWrapper>
  ));
};

export default ViewResource;
