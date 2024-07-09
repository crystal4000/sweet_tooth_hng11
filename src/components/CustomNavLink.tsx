import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  label: React.ReactNode;
  toggle?: boolean;
  onClick?: () => void;
}

export function CustomNavLink({
  to,
  label,
  toggle,
  onClick,
}: CustomNavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Nav.Link
      as={NavLink}
      to={to}
      className={`me-${toggle ? "4" : "2"} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </Nav.Link>
  );
}
