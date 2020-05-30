import React from 'react';
import Button from 'react-bootstrap/Button';

import DialogWrapper from '../../core/services/dialog/DialogWrapper.jsx';
import Modal from '../../core/services/dialog';
import ViewResource from '../view-resource/view-resource';
import '../../styles/view-resource.css';

const ViewList = () => {
  Modal.show(({ hide, cancel }) => (
    <DialogWrapper
      header={<span className="resource-modal-title">List name here - <span className="medium-text">12 Resources</span></span>}
      footer={
        <Button className="default-btn" data-testid="doneeResource" size="sm" onClick={hide}>
          DONE
        </Button>
      }
      hide={hide}
      cancel={cancel}
    >
      <div className="resource-modal-body">
        <div className="single-resource">
          <div className="vertical-component">
            <p className="resource-tit" onClick={ViewResource}>Resource name some long name here</p>
            <p className="medium-text">19-05-2020</p>
          </div>
          <p className="medium-text single-resource-descr">
            Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
            Chocolatemarzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
            toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet roll
             cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
            ice cream gummies chupa chups halvah toffee candy canes cand.
          </p>
        </div>
        <div className="single-resource">
          <div className="vertical-component">
            <p className="resource-tit" onClick={ViewResource}>Resource name some long name here</p>
            <p className="medium-text">19-05-2020</p>
          </div>
          <p className="medium-text single-resource-descr">
            Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
            Chocolatemarzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
            toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet roll
             cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
            ice cream gummies chupa chups halvah toffee candy canes cand.
          </p>
        </div>
        <div className="single-resource">
          <div className="vertical-component">
            <p className="resource-tit" onClick={ViewResource}>Resource name some long name here</p>
            <p className="medium-text">19-05-2020</p>
          </div>
          <p className="medium-text single-resource-descr">
            Fruitcake tart carrot cake jelly beans chocolate Sweet roll cupcake tart pastry.
            Chocolatemarzipanpuddinglollipop. Muffin ice cream gummies chupa chups halvah
            toffee candy canes cand. Fruitcake tart carrot cake jelly beans chocolate Sweet roll
             cupcake tart pastry. Chocolate marzipanpudding lollipop. Muffin
            ice cream gummies chupa chups halvah toffee candy canes cand.
          </p>
        </div>
      </div>
    </DialogWrapper>
  ));
};

export default ViewList;
