interface ErrorDisplayProps {
  error: string;
  onGoBack: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onGoBack }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <h1 className="text-2xl mb-4">Error loading movie</h1>
      <p className="text-gray-400 mb-4">{error}</p>
      <button 
        onClick={onGoBack}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorDisplay;