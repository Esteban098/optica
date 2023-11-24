export default function RowOrdes(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.user}</td>
        <td>{props.prescription}</td>
        <td>{props.product}</td>
      </tr>
    </tbody>
  );
}
