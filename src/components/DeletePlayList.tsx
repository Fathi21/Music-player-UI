import React from 'react';
import DeletePlaylist from '../Utilities/ApiCalls/DeletePlayList';
import toast from "react-hot-toast";
import { TextOutput } from '../Utilities/OutputText/TextOutput';

function DeletePlayListModal(props: { id: number }) {

    const handleDelete = async () => {
        try {
            await DeletePlaylist(props.id);
            toast.success(TextOutput.playlistDeletedSuccessfully);

        } catch (error) {
            console.error("Failed to delete playlist:", error);

        }
    };

    return (
        <div
            className="modal fade"
            id="deleteModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content custom-modal">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Delete Playlist
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this playlist? This action cannot be undone.
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePlayListModal;