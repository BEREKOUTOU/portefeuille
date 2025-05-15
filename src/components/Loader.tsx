
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-900 animate-spin"></div>
        <div className="absolute top-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-900 animate-spin" style={{ animationDirection: 'reverse', opacity: 0.5 }}></div>
      </div>
    </div>
  );
};

export default Loader;