import PropTypes from "prop-types";

export default function ValidationError({ children }) {
  return <div className="form-error text-red-600 text-xs">{children}</div>;
}

ValidationError.proptTypes = {
  children: PropTypes.node.isRequired,
};
