const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="text-gray-600">
            <span>Created by</span>{" "}
            <span className="font-semibold text-gray-900">
              <a
                href="https://github.com/asifjirayat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Asif Jirayat
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
