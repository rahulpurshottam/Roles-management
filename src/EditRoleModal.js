import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditRoleModal = ({ show, onHide, role, onSave }) => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (role) {
      setRoleName(role.role);
      setPermissions(role.permissions);
      setIsActive(role.active);
    }
  }, [role]);

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
  const updatedRole = {
    role: roleName,
    permissions,
    active: isActive,
  };
  onSave(updatedRole); 
  onHide(); 
};

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label className="form-label">Role Name</label>
          <input
            type="text"
            className="form-control"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
        <h5>Permissions</h5>
        {permissions.map((perm, index) => (
          <div key={index} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`edit-perm-${index}`}
              checked={perm === "YES"}
              onChange={() => togglePermission(index)}
            />
            <label className="form-check-label" htmlFor={`edit-perm-${index}`}>
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
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditRoleModal;
