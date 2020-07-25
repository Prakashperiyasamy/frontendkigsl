import React, { useState, useEffect } from 'react';
import validate from '../customHooks/contactvalidation'
import useFormFields from './../customHooks/inputcustomHooks.js';
import { contactActions } from '../actions/contact.action'
import { useDispatch, useSelector } from 'react-redux';

function Model(props) {

    const [fields, handleFieldChange, reset] = useFormFields({
        name: props.EditData =="" ? "":props.EditData.name,
        number:  props.EditData =="" ? "":props.EditData.number,
        location:  props.EditData =="" ? "":props.EditData.location,
    });
    const [errors, setErrors] = useState({});
    const auth = useSelector(state => state.authentication);
  
console.log("modellllllll",auth)
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();

        if(props.EditData)
        {
            setErrors(validate(fields));
            let res = validate(fields)
    
            if (Object.keys(res).length == 0) {
                const payload = {
                    "name": fields.name,
                    "number": +fields.number,
                    "location": fields.location
                }
                dispatch(contactActions.updatecontact(payload,props.EditData._id,auth));
                setTimeout(() => {
                    props.enableClick()
                    reset()
                }, 2000);
    
            }
        }else
        {
            setErrors(validate(fields));
            let res = validate(fields)
    
            if (Object.keys(res).length == 0) {
                const payload = {
                    "name": fields.name,
                    "number": +fields.number,
                    "location": fields.location
                }
                dispatch(contactActions.addcontact(payload,auth));
                setTimeout(() => {
                    props.enableClick()
                    reset()
                }, 2000);
    
            }
        }
       


    }


    return (<div class="add-contact">
        <div class="modal" style={props.Enable ? { display: 'block' } : { display: 'none' }} >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{props.EditData == "" ? "Add Contact" : "Edit Contact"}</h5>
                        <button type="button" class="close" onClick={() => {
                            props.enableClick()
                            reset()
                        }}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="contact-form-gorup">
                            <form onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <div class="select-wrap">
                                                <input type="text"
                                                    class="inputivew"
                                                    name="name"
                                                    value={fields.name}
                                                    onChange={handleFieldChange}
                                                />
                                                <span style={{ color: "red" }}>{errors.name}</span>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="form-group">
                                            <label>Number</label>
                                            <div class="select-wrap">
                                                <input type="text"
                                                    class="inputivew"
                                                    name="number"
                                                    value={fields.number}
                                                    onChange={handleFieldChange}
                                                />
                                                <span style={{ color: "red" }}>{errors.number}</span>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="form-group">
                                            <label>Location</label>
                                            <div class="select-wrap">
                                                <input
                                                    type="text"
                                                    class="inputivew"
                                                    name="location"
                                                    value={ fields.location}
                                                    onChange={handleFieldChange}
                                                />
                                                <span style={{ color: "red" }}>{errors.location}</span>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-12">
                                        <div class="form-group">
                                            <div class="groupbttn">
                                                <button type="submit" class="bttn submitbtn">
                                                    Submit
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Model