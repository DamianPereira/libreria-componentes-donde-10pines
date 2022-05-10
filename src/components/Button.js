import classNames from "classnames";

const Button = ({ className, primary, outline, secondary, list, ...props }) => (
  <button
    className={classNames(className, "rounded-2xl", {
      "bg-wingu-red text-white": primary,
      "bg-gray-400 text-white": secondary,
      "border border-wingu-red text-wingu-red": outline,
      "p-3 font-bold": primary || secondary || outline,
      "p-4.5 bg-white drop-shadow-wingu": list
    })}
    {...props}
  />
);

export default Button;
