import { Link } from "react-router-dom";

export default function CardUsers(props) {
  return (
    <div className="col-3 mb-3">
      <div className="card" id="heightCard">
        <p
          className="card-img-top"
          id="colorBackgroundUsers"
          style={{ backgroundColor: props.bgColor }}
        />
        <div className="card-body text-center">
          <img
            src={`https://vission.herokuapp.com/img/users/${props.avatar}`}
            id="imageCenterUsers"
            alt="User"
            className="img-fluid img-thumbnail rounded-circle border-0 mb-3"
          />
          <h5 className="card-title">{props.name}</h5>
          <p className="text-secondary mb-1">{props.country}</p>
          <p className="text-muted font-size-sm">{props.streetAddress}</p>
        </div>
        <div className="card-footer" style={{ color: props.bgColor }}>
          <button
            className="btn btn-dark btn-sm  has-icon btn-block"
            type="button"
            id="btnInfoUser"
          >
            <Link
              to={`/users/${props.id}`}
              className="material-icons"
              id="masInfo"
            >
              Mas info
            </Link>
          </button>
          ID #{props.id}
        </div>
      </div>
    </div>
  );
}
