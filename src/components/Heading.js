import PropTypes from "prop-types";
export default function Heading({ title }) {
  return <h1 className="pt-8 lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-black mb-14 text-indigo-700">{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string,
};
