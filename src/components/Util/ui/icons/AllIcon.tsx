import React from "react";

interface Props {
  classes: string;
}

const AllIcon = ({ classes }: Props) => {
  return (
    <svg viewBox="0 0 24 24" className={`${classes}`}>
      <path d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM13 19H18C18.5523 19 19 18.5523 19 18V13H13V19ZM11 13H5V18C5 18.5523 5.44772 19 6 19H11V13ZM13 11H19V6C19 5.44772 18.5523 5 18 5H13V11ZM11 5H6C5.44772 5 5 5.44772 5 6V11H11V5Z" />
    </svg>
  );
};

export default AllIcon;
