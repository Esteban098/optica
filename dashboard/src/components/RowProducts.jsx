export default function RowProducts(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{"$" + props.price}</td>
        <td>{props.size}</td>
        <td>{props.material}</td>
        <td>{props.active}</td>
        <td>{props.category}</td>
        <td>{props.createdAt}</td>
      </tr>
    </tbody>
  );
}
