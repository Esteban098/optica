export default function RowUsers(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.lastName}</td>
        <td>{props.country}</td>
        <td>
          <div id="containerImgUser">
            <img
              src={`https://vission.herokuapp.com/img/users/${props.avatar}`}
              id="userAvatar"
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
