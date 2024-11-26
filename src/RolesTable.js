import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const RoleTable = ({ roles, onEdit, onDelete, onAdd }) => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Roles and Permission</h2>
        <button
          className="btn btn-success"
          onClick={onAdd}
          title="Create New Role"
        >
          + Create
        </button>
      </div>
      <div className="table-container mt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Roles</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>Active/Inactive</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={index}>
                <td>{role.role}</td>
                {role.permissions.map((perm, i) => (
                  <td key={i}>
                    <div
                      className={`perm-block ${perm === "YES" ? "perm-yes" : "perm-no"
                        }`}
                    >
                      {perm}
                    </div>
                  </td>
                ))}
                <td>
                  <div
                    className={`perm-block ${role.active ? "perm-yes" : "perm-no"
                      }`}
                  >
                    {role.active ? "Active" : "Inactive"}
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => onEdit(role)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(role)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default RoleTable;
