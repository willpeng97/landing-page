import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';


const Button = ({ text, link }) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <button className="font-bold group flex items-center gap-2 bg-blue-400/90 hover:bg-blue-300 text-white px-6 py-3 rounded-full transition-colors" onClick={handleClick}>
        {text}
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;