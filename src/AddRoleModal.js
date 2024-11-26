import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRoleModal = ({ show, onHide, onSave }) => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState(
    Array(7).fill("NO")
  );
  const [isActive, setIsActive] = useState(false);

  const togglePermission = (index) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index] = updatedPermissions[index] === "YES" ? "NO" : "YES";
    setPermissions(updatedPermissions);
  };

  const handleSave = () => {
    if (roleName.trim() === "") {
      alert("Role name cannot be empty!");
      return;
    }
    const newRole = {
      role: roleName,
      permissions,
      active: isActive,
    };
    onSave(newRole);
    setRoleName("");
    setPermissions(Array(7).fill("NO"));
    setIsActive(false);
    onHide();
  };


  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create New Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label className="form-label">Role Name</label>
          <input
            type="text"
            className="form-control"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            placeholder="Enter role name"
          />
        </div>
        <h5>Permissions</h5>
        {permissions.map((perm, index) => (
          <div key={index} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`perm-${index}`}
              checked={perm === "YES"}
              onChange={() => togglePermission(index)}
            />
            <label className="form-check-label" htmlFor={`perm-${index}`}>
              Permission {index + 1}
            </label>
          </div>
        ))}
        <div className="mt-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            value={isActive ? "active" : "inactive"}
            onChange={(e) => setIsActive(e.target.value === "active")}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save Role
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRoleModal;
