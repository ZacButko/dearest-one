export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-700 bg-sky-950 py-5 text-center">
      <p className="text-gray-200">
        A lifestyle app by{" "}
        <a
          className="font-medium text-sky-200 underline transition-colors"
          href="https://butko.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          butko.io
        </a>
      </p>
    </div>
  );
}
