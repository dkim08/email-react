import './styles.css';

const SvgViewer = ({ id, action }) => {
    console.log("Show is", id)
    const handleAction = () => {
        action();
    }
    return (
        <div className="svg-viewer" onClick={handleAction}>
            <svg className={id === 'iconLink' ? 'filled' : "svg-use-container"}>
                <use href={`/assets/sprites.svg#${id}`}></use>
            </svg>
        </div>
    );
};
export default SvgViewer;