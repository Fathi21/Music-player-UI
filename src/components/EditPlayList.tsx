import React, { useState, useEffect } from "react";
import UpdatePlaylist from "../Utilities/ApiCalls/UpdatePlaylist";

function EditPlayList(props: { id: number }) {
    const [playListData, setPlayListData] = useState({
        id: props.id,
        PlayListName: "",
        Description: "",
        PhotoCover: "",
    });

    const UpdateData = async () => {
        try {
            const data = await UpdatePlaylist(props.id, playListData);
            setPlayListData(data);
        } catch (error) {
            console.error("Error fetching playlist data:", error);
        }
    };

    useEffect(() => {
        UpdateData();
    }, [props.id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPlayListData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const inputData = {
                PlayListName: playListData.PlayListName,
                Description: playListData.Description,
                PhotoCover: playListData.PhotoCover,
            };
            await UpdatePlaylist(playListData.id, inputData);
            alert("Playlist updated successfully!");
        } catch (error) {
            console.error("Error updating playlist:", error);
            alert("Failed to update playlist.");
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        src={playListData.PhotoCover || "https://via.placeholder.com/150"}
                                        className="rounded-0 float-start"
                                        alt="Playlist Cover"
                                    />
                                </div>
                                <div className="col-8">
                                    <div className="mb-3 playlistName">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Add name"
                                            name="PlayListName"
                                            value={playListData.PlayListName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3 playlistDescription">
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder="Add an optional description"
                                            name="Description"
                                            value={playListData.Description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPlayList;