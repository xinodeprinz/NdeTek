import React from "react";
import timeSince from "../Data/timeSince";

const PaperCard = ({ paper }) => {
    const date = new Date(paper.created_at);
    const image_name = paper.image.split("/")[2];
    return (
        <div className="team-item shadow bg-white rounded overflow-hidden h-100">
            <div className="team-img position-relative overflow-hidden">
                <img
                    className="img-fluid w-100 employee-img"
                    style={{ height: 200 }}
                    src={`/storage/${paper.image}`}
                    alt={image_name}
                />
                <div className="team-social">
                    <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href={`/storage/${paper.uri}/${paper.name}`}
                        target="_blank"
                    >
                        <i className="fas fa-eye fw-normal"></i>
                    </a>
                </div>
            </div>
            <div className="py-2 container">
                <small
                    className="card-subtitle text-muted"
                    style={{ fontSize: 11 }}
                >
                    {timeSince(date)}
                </small>
                <div className="text-center">
                    <h1 className="card-title text-ndetek text-capitalize paper-category">
                        {paper.category}
                    </h1>
                    <h1 className="card-text fw-normal paper-title">
                        {paper.name}
                    </h1>

                    <a
                        href={`/storage/${paper.uri}/${paper.name}`}
                        download
                        className="btn btn-ndetek w-100 btn-sm"
                    >
                        <i className="fas fa-download"></i>
                        <span> Download</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaperCard;
