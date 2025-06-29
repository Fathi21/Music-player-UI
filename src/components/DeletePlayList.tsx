import React from 'react';
import DeletePlaylist from '../Utilities/ApiCalls/DeletePlayList';
import toast from "react-hot-toast";
import { TextOutput } from '../Utilities/OutputText/TextOutput';
import { Link, useNavigate } from "react-router-dom";

function DeletePlayListModal(props: { id: number }) {
    const navigate = useNavigate();
    
    const handleDelete = async () => {
        try {
            await DeletePlaylist(props.id);
            toast.success(TextOutput.playlistDeletedSuccessfully);
            document.getElementById("deleteModal")?.classList.remove("show");
            document.body.classList.remove("modal-open");
            document.querySelector(".modal-backdrop")?.remove();
            navigate("/");

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
            <div className="modal-dialog EditPlayList">
                <div
                    className="modal-content"
                >
                    <div className="modal-header border-0">
                        <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#ff4d4f' }}>
                            Delete Playlist
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body modelText">
                        Are you sure you want to delete this playlist? <br />
                        <strong>This action cannot be undone.</strong>
                    </div>
                    <div className="modal-footer border-0">
                        <button
                            type="button"
                            className="btn btn-secondary cancleButton"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger "
                            onClick={handleDelete}
                        >
                            Delete 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeletePlayListModal;
