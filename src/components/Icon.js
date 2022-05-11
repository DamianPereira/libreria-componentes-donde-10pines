import classNames from "classnames";
import PropTypes from "prop-types";

const Icon = ({
  type = "primary",
  size = "large",
  disabled = false,
  icon: IconInner,
  className,
  ...props
}) => {
  const iconClassName = classNames({
    "text-white": type === "primary",
    "text-wingu-primary": type !== "primary" && !disabled,
    "text-wingu-gray-400": type !== "primary" && disabled,
  });
  return (
    <div
      className={classNames(
        className,
        "flex items-center justify-center",
        { "w-6 h-6 p-1": size === "small" },
        { "w-8 h-8 p-1.5": size === "medium" },
        { "w-14 h-14 p-4": size === "large" },
        { "rounded-full": type !== "noCircle" },
        { "bg-wingu-primary": type === "primary" && !disabled},
        { "bg-wingu-gray-400": type === "primary" && disabled},
        { "bg-wingu-secondary": type === "tertiary"},
        { "bg-white": type === "secondary" }
      )}
      {...props}
    >
      {typeof IconInner === "string" ? (
        <img className={iconClassName} src={IconInner} alt="" />
      ) : (
        <IconInner className={iconClassName} />
      )}
    </div>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary", "secondaryAlt"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Icon;
