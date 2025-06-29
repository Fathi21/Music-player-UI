import React, { useState, useEffect } from "react";
import UpdatePlaylist from "../Utilities/ApiCalls/UpdatePlaylist";
import GetPlayListById from "../Utilities/ApiCalls/GetPlayListById";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import { TextOutput } from "../Utilities/OutputText/TextOutput";
import toast from "react-hot-toast";


function EditPlayList(props: { id: number }) {
    const [playListData, setPlayListData] = useState({
        id: props.id,
        PlayListName: "",
        Description: "",
        PhotoCover: "",
    });

    // Store original data for change detection
    const [originalData, setOriginalData] = useState({
        PlayListName: "",
        Description: "",
        PhotoCover: "",
    });

    const [photoFile, setPhotoFile] = useState<File | null>(null);

    const fetchPlayList = async () => {
        try {
            const response = await GetPlayListById(props.id);
            console.log("Fetched playlist:", response.data);

            setPlayListData({
                id: response.data.id,
                PlayListName: response.data.PlayListName,
                Description: response.data.Description,
                PhotoCover: response.data.PhotoCover,
            });

            setOriginalData({
                PlayListName: response.data.PlayListName,
                Description: response.data.Description,
                PhotoCover: response.data.PhotoCover,
            });
        } catch (error) {
            console.error("Error fetching playlist:", error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPlayListData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setPhotoFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if anything changed
        const hasChanged =
            playListData.PlayListName !== originalData.PlayListName ||
            playListData.Description !== originalData.Description ||
            photoFile !== null;

        if (!hasChanged) {
            toast.success(TextOutput.NoneChangesMade);
            return;
        }

        try {
            if (photoFile) {
                const formData = new FormData();
                formData.append("PlayListName", playListData.PlayListName);
                formData.append("Description", playListData.Description);
                formData.append("PhotoCover", photoFile);

                const update = await UpdatePlaylist(playListData.id, formData);
            } else {
                const update = await UpdatePlaylist(playListData.id, {
                    PlayListName: playListData.PlayListName,
                    Description: playListData.Description,
                });
            }

            toast.success(TextOutput.playlistUpdatedSuccessfully);
            fetchPlayList(); // Refresh the playlist data after update
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error updating playlist:", error.message);
            } else {
                console.error("Error updating playlist:", error);
            }
            toast.error("Failed to update playlist.");
        }
    };

    useEffect(() => {
        fetchPlayList();
    }, [props.id]);

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
                                        src={
                                            playListData.PhotoCover
                                                ? urlCalls.Base + playListData.PhotoCover
                                                : "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        }
                                        className="rounded-0 float-start PlaylistCover"
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
                        <div className="modal-footer d-flex align-items-center">
                            <input
                                type="file"
                                className="form-control me-2"
                                onChange={handlePhotoChange}
                                accept="image/*"
                                style={{
                                    width: "150px",
                                    padding: "5px",
                                    fontSize: "0.9rem",
                                    position: "relative",
                                    left: "-106px",
                                    backgroundColor: "#1db954",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            />
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    backgroundColor: "#1db954",
                                    borderColor: "#1db954",
                                }}
                            >
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
