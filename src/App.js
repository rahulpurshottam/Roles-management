import React, { useState } from "react";
import RoleTable from "./RolesTable";
import EditRoleModal from "./EditRoleModal";
import AddRoleModal from "./AddRoleModal";
import Footer from "./footer";
import Main from "./main";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [roles, setRoles] = useState([
    { role: "Admin", permissions: ["YES", "YES", "YES", "YES", "YES", "YES", "YES"], active: true },
    { role: "Viewer", permissions: ["NO", "NO", "NO", "NO", "NO", "NO", "NO"], active: false },
    { role: "Manager", permissions: ["YES", "NO", "YES", "YES", "NO", "YES", "NO"], active: true },
    { role: "Editor", permissions: ["NO", "YES", "NO", "YES", "YES", "NO", "YES"], active: false },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleEdit = (role) => {
    setSelectedRole(role);
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleDelete = (roleToDelete) => {
    setRoles(roles.filter((role) => role !== roleToDelete));
  };

  const handleSaveNewRole = (newRole) => {
    setRoles([...roles, newRole]);
  };

  return (
    <div className="App">
      {/* Main Content */}
      <Main />

      {/* Role Table */}
      <RoleTable roles={roles} onEdit={handleEdit} onDelete={handleDelete} onAdd={handleAdd} />

      {/* EditRoleModal */}
      <EditRoleModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        role={selectedRole}
        onSave={(updatedRole) => {
          setRoles(roles.map((role) => (role.role === selectedRole.role ? updatedRole : role)));
        }}
      />
      {/* AddRoleModal */}
      <AddRoleModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onSave={handleSaveNewRole}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
