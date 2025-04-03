const SvgViewer = ({ id }) => {
    console.log("Show is", id)
    return (
        <div className="svg-viewer">
            <svg className="svg-use-container">
                <use href={`/assets/sprites.svg#${id}`}></use>
            </svg>
        </div>
    );
};

export default SvgViewer;