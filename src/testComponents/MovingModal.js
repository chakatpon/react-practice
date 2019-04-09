import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import TrackForm from './TrackForm';

import 'jquery-ui-dist/jquery-ui';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery/dist/jquery.js';



class MovingModal extends React.Component {

    state = {
        modal: true
      };

    toggle = () => {
        $('.modal').modal('toggle')
        this.setState(prevState => ({
            modal : !prevState.modal
        }))
    }

    componentDidMount(){
        
        $('.modal').modal({ keyboard: false,
            backdrop: false,
            focus: false,
            show: this.state.modal
        });
        
        // Jquery draggable
        $('.modal-dialog').draggable({
        handle: ".modal-header"
        });
        
    }

    componentDidUpdate() {
        $('.moka')
    }

    render() {
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>Setting</Button>
                
                    <div className="modal fade" show={this.state.modal}>
                      <div className="modal-dialog">
                        <div className="modal-content">

                          <div className="modal-header d-block">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title">Track Data</h4>
                          </div>
                          <div className="modal-body">
                          
                          <TrackForm/>
                        

                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>

                    <div className="modal fade" show={this.state.modal}>
                      <div className="modal-dialog">
                        <div className="modal-content">

                          <div className="modal-header d-block">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title">Track List</h4>
                          </div>
                          <div className="modal-body">
                          <TrackForm/>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                
            </div>
        );
    }
}

export default MovingModal;