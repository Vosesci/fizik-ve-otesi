export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#EEF1FF]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  );
}
