import "./video.css";

function Video(){
    return(
        <video controls>
            <source src="https://server-video-public-r2.s3.us-west-2.amazonaws.com/Sarah+Jeffery+-+Queen+of+Mean+(From+Descendants+3).mp4" type="video/mp4"/>
        </video>
    );
}

export default Video;
