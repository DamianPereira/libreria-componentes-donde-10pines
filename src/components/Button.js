import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "./Icon";

const Button = ({
  className,
  children,
  icon,
  disabled,
  type = "primary",
  ...props
}) => {
  return (
    <button
      className={classNames(
        className,
        "px-3 font-bold flex items-center justify-center",
        { "rounded-xl": ["primary", "secondary"].includes(type) },
        {
          "bg-wingu-primary text-white": type === "primary" && !disabled,
          "bg-gray-400 text-white": type === "primary" && disabled,
        },
        {
          "border border-wingu-primary text-wingu-primary":
            type === "secondary" && !disabled,
          "border border-wingu-gray-400 text-wingu-gray-400":
            type === "secondary" && disabled,
        },
        {
          "text-wingu-primary": type === "tertiary" && !disabled,
          "text-wingu-gray-400": type === "tertiary" && disabled,
        }
      )}
      {...props}
    >
      {icon && (
        <Icon
          type={type === "primary" ? "primary" : "noCircle"}
          disabled={disabled}
          size="medium"
          icon={icon}
        />
      )}
      <span className="py-3">{children}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.element,
};

export default Button;
