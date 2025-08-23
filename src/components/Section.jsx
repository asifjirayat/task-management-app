const Section = ({ title, children }) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
