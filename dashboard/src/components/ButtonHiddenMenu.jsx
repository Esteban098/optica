export default function ButtonHiddenMenu(props) {
  return (
    <button
      id="sidebarCollapse"
      type="button"
      className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
      onClick={props.hiddenNavbar}
    >
      <i className="fa fa-bars mr-2"></i>
      <small className="text-uppercase font-weight-bold">Menu</small>
    </button>
  );
}
