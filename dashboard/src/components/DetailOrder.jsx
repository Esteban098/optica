import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
export default function DetailOrder(props) {
  const [data, setData] = useState(null);

  const { id } = useParams();
  const PORT = "https://vission.herokuapp.com";
  async function getOrdersInDB() {
    const response = await fetch(`${PORT}/api/orders/${id}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    getOrdersInDB();
  }, [null]);
  const order = data ? data.data : null;
  const valuesPrescription = data ? data.data.prescription.valueEye[0] : null;
  //   let dateBirth;
  let createdAt;
  let dia;
  let horas;
  let prescription;
  let user;
  let email;
  let streetAddress;
  let productName;
  if (order) {
    dia = dayjs(order.createdAt).format("DD/MM/YYYY");
    horas = dayjs(order.createdAt).format("HH:mm:ss");
    createdAt = dia + " " + horas;
    prescription = order.prescription.status == 1 ? "si" : "no";
    user = order.order.user.name + " " + order.order.user.lastName;
    email = order.order.user.email;
    streetAddress = order.order.user.streetAddress;
    productName = order.product.name;
  }
  let rightEye_sph;
  let leftEye_sph;
  let rightEye_cyl;
  let leftEye_cyl;
  let rightEyeAxis;
  let leftEyeAxis;
  let pupillaryDistance;

  if (valuesPrescription) {
    rightEye_sph = valuesPrescription.rightEye.sphere.sphere;
    leftEye_sph = valuesPrescription.rightEye.sphere.sphere;
    rightEye_cyl = valuesPrescription.rightEye.cylinder.cylinder;
    leftEye_cyl = valuesPrescription.rightEye.cylinder.cylinder;
    rightEyeAxis = valuesPrescription.rightEye.axisRightEye;
    leftEyeAxis = valuesPrescription.leftEyes.axisLeftEye;
    pupillaryDistance = valuesPrescription.pupillaryDistance.pupillaryDistance;
  }
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
              src={`https://vission.herokuapp.com/img/products/${data.data.product.image[0].filename}`}
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
                        Orden id
                      </strong>
                    </td>
                    <td className="text-primary">{order.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-user  text-primary"></span>
                        Usuario
                      </strong>
                    </td>
                    <td className="text-primary">{user}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-cloud text-primary"></span>
                        Dirección
                      </strong>
                    </td>
                    <td className="text-primary">{streetAddress}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Email
                      </strong>
                    </td>
                    <td className="text-primary">{email}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Producto
                      </strong>
                    </td>
                    <td className="text-primary">{productName}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-bookmark text-primary"></span>
                        Fecha de compra
                      </strong>
                    </td>
                    <td className="text-primary">{createdAt}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-eye-open text-primary"></span>
                        Prescripción
                      </strong>
                    </td>
                    <td className="text-primary">{prescription}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-eye-open text-primary"></span>
                        Esfera ojo derecho
                      </strong>
                    </td>
                    <td className="text-primary">{rightEye_sph}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-envelope text-primary"></span>
                        Esfera ojo izquierdo
                      </strong>
                    </td>
                    <td className="text-primary">{leftEye_sph}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Cilindro ojo derecho
                      </strong>
                    </td>
                    <td className="text-primary">{rightEye_cyl}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Cilindro ojo izquierdo
                      </strong>
                    </td>
                    <td className="text-primary">{leftEye_cyl}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Axis ojo derecho
                      </strong>
                    </td>
                    <td className="text-primary">{rightEyeAxis}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Axis ojo izquierdo
                      </strong>
                    </td>
                    <td className="text-primary">{leftEyeAxis}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span className="glyphicon glyphicon-calendar text-primary"></span>
                        Distancia pupilar
                      </strong>
                    </td>
                    <td className="text-primary">{pupillaryDistance}</td>
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
