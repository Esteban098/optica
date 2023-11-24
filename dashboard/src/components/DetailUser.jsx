import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
export default function DetailUser() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const PORT = "https://vission.herokuapp.com";
  async function getUserInDb() {
    const response = await fetch(`${PORT}/api/users/${id}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    getUserInDb();
  }, [null]);
  const user = data ? data.data : null;
  let dateBirth;
  let createdAt;
  let updatedAt;
  let rol;
  if (user) {
    dateBirth = dayjs(user.dateBirth).format("DD/MM/YYYY");
    createdAt = dayjs(user.createdAt).format("DD/MM/YYYY/HH:mm:ss");
    updatedAt = dayjs(user.updatedAt).format("DD/MM/YYYY/HH:mm:ss");
  }

  user && (user.admin = 1) ? (rol = "admin") : (rol = "usuario");

  return !data ? (
    <div className="loader"></div>
  ) : (
    <div className="container bootstrap snippets bootdey">
      <div className="panel-body inf-content">
        <div className="row">
          <div className="col-md-4" id="containerImgUserDetail">
            <img
              alt=""
              className="img-circle img-thumbnail isTooltip"
              src={`https://vission.herokuapp.com/img/users/${user.avatar}`}
              id="imgUserDetail"
            />
          </div>
          <div className="col-md-6">
            <strong>Información</strong>
            <br />
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-asterisk text-primary"></span>
                        id
                      </strong>
                    </td>
                    <td className="text-primary">{(user, id)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-user  text-primary"></span>
                        Nombre
                      </strong>
                    </td>
                    <td className="text-primary">{user.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-cloud text-primary"></span>
                        Apellido
                      </strong>
                    </td>
                    <td className="text-primary">{user.lastName}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Dirección
                      </strong>
                    </td>
                    <td className="text-primary">{user.streetAddress}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        País
                      </strong>
                    </td>
                    <td className="text-primary">{user.country}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Fecha de nacimiento
                      </strong>
                    </td>
                    <td className="text-primary">{dateBirth}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-eye-open text-primary"></span>
                        Rol
                      </strong>
                    </td>
                    <td className="text-primary">{rol}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-eye-open text-primary"></span>
                        Estado
                      </strong>
                    </td>
                    <td className="text-primary">
                      {user.active == 1 ? "activo" : "inactivo"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-envelope text-primary"></span>
                        Email
                      </strong>
                    </td>
                    <td className="text-primary">{user.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Creado en
                      </strong>
                    </td>
                    <td className="text-primary">{createdAt}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Editado en
                      </strong>
                    </td>
                    <td className="text-primary">{updatedAt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
