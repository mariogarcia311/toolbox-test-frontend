import PropTypes from "prop-types";
export const TableRow = ({ file, text, number, hex }) => {
  return (
    <tr>
      <td>{file}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  );
};

TableRow.propTypes = {
  file: PropTypes.string,
  text: PropTypes.string,
  number: PropTypes.number,
  hex: PropTypes.string,
};
