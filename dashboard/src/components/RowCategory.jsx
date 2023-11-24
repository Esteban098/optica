export default function RowCategory(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td className="text-center">{props.categoryName}</td>
        <td className="text-center">{props.active}</td>
      </tr>
    </tbody>
  );
}
