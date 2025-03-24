const GendersTable = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Male</td>
          <td>
            <button className="btn btn-primary btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm ms-2">Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Female</td>
          <td>
            <button className="btn btn-primary btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm ms-2">Delete</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Others</td>
          <td>
            <button className="btn btn-primary btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm ms-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GendersTable;
