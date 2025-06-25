import React from "react";

function Edit(props: { id: number }) {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog EditPlayList">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Edit details
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-4">
                                <img
                                    src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    className="rounded-0 float-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-8">
                                <div className="mb-3 playlistName">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Add name"
                                    />
                                </div>
                                <div className="mb-3 playlistDescription">
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        placeholder="Add an optional description"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;