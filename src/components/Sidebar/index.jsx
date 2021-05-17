import './style.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            {props.children}
        </div>
    )       
}

export default Sidebar;