import React from 'react'
import FileIcon from '../../components/icons/FileIcon'

const AboutSidebarDetails = () => {
    return (
        <>
            <div>
                <details id="bio-details">
                    <summary className="summary h-[25px] px-4 py-3">
                        <span
                            style={{
                                display: "flex",
                                position: "relative",
                                top: "-20px",
                                left: "18px",
                                alignItems: "center",
                                gap: "6px",
                            }}
                        >
                            <FileIcon /> Bio
                        </span>
                    </summary>
                </details>
            </div>
            <div>
                <details id="interestDetails">
                    <summary className="summary h-[25px] px-4 py-3">
                        <span
                            style={{
                                display: "flex",
                                position: "relative",
                                top: "-20px",
                                left: "18px",
                                alignItems: "center",
                                gap: "6px",
                            }}
                            className="text-text-main"
                        >
                            {" "}
                            <FileIcon color={"#43D9AD"} />Interests
                        </span>
                    </summary>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati repellat nam
                    </div>
                </details>
            </div>
            <div>
                <details id="educationDetails">
                    <summary className="summary h-[25px] px-4 py-3">
                        <span
                            style={{
                                display: "flex",
                                position: "relative",
                                top: "-20px",
                                left: "18px",
                                alignItems: "center",
                                gap: "6px",
                            }}
                            className="text-text-main"
                        >
                            <FileIcon color={"#3A49A4"} /> education
                        </span>
                    </summary>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati repellat nam
                    </div>
                </details>
            </div>
        </>
    )
}

export default AboutSidebarDetails