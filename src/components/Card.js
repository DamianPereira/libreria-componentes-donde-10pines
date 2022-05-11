import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "./Icon";

const Card = ({ className, ...props }) => (
  <div
    className={classNames(
      className,
      "bg-white flex flex-col drop-shadow-wingu rounded-2xl p-4"
    )}
    {...props}
  />
);
Card.propTypes = {
  className: PropTypes.string,
};

const CardHeader = ({ className, children, ...props }) => (
  <h1
    className={classNames(className, "pb-2 text-wingu-gray-800 font-bold")}
    {...props}
  >
    {children}
  </h1>
);
CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardSubHeader = ({ className, children, ...props }) => (
  <h2
    className={classNames(className, "pt-6 pb-2 text-xs text-wingu-gray-400")}
    {...props}
  >
    {children}
  </h2>
);
CardSubHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardParagraph = ({ className, children, ...props }) => (
  <p className={classNames(className, "text-sm leading-6")} {...props}>
    {children}
  </p>
);
CardParagraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardIconLine = ({ className, children, icon, ...props }) => (
  <div className={classNames(className, "flex items-center")} {...props}>
    <Icon size="medium" type="secondary" circle={false} icon={icon} />
    <span className="pl-1.5 text-wingu-gray-600 text-sm">{children}</span>
  </div>
);
CardIconLine.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.element,
};

export { CardHeader, CardSubHeader, CardParagraph, CardIconLine };
export default Card;
