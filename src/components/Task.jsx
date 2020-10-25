import React from "react";
import Button from "./Button";

function Task() {
  return (
    <div className="todo_task todo_task-complite">
      <div className="circle">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6515 0.501805C12.9087 0.181518 13.2559 0.00126181 13.618 6.59939e-06C13.9801 -0.00124861 14.3281 0.176598 14.5866 0.495098C14.8452 0.813597 14.9936 1.24716 14.9998 1.70205C15.006 2.15693 14.8694 2.5966 14.6196 2.92598L7.28381 14.4466C7.15773 14.6172 7.00557 14.7541 6.83641 14.8491C6.66725 14.9442 6.48457 14.9954 6.29931 14.9997C6.11404 15.004 5.92998 14.9613 5.75813 14.8742C5.58629 14.7871 5.43019 14.6574 5.29918 14.4928L0.438657 8.38384C0.303248 8.22531 0.19464 8.03415 0.119312 7.82175C0.0439845 7.60935 0.00347955 7.38006 0.000214487 7.14756C-0.00305058 6.91506 0.0309912 6.68412 0.100308 6.46851C0.169625 6.2529 0.272798 6.05705 0.403671 5.89262C0.534545 5.7282 0.690437 5.59857 0.86205 5.51148C1.03366 5.4244 1.21748 5.38163 1.40253 5.38573C1.58759 5.38983 1.77009 5.44072 1.93915 5.53536C2.10821 5.63 2.26036 5.76645 2.38654 5.93657L6.23453 10.7688L12.6166 0.552598C12.628 0.534714 12.6403 0.517749 12.6534 0.501805H12.6515Z"
            fill="#FFF5F5"
          />
        </svg>
      </div>
      <h2>Сделать дизайн Todo</h2>
      <Button className="trash">
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8992 0H6.89917C5.79617 0 4.89917 0.897 4.89917 2V4H0.89917V6H2.89917V18C2.89917 19.103 3.79617 20 4.89917 20H14.8992C16.0022 20 16.8992 19.103 16.8992 18V6H18.8992V4H14.8992V2C14.8992 0.897 14.0022 0 12.8992 0ZM6.89917 2H12.8992V4H6.89917V2ZM14.8992 18H4.89917V6H14.8992V18Z"
            fill="#7C7C7C"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Task;
