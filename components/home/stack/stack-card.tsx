export default function StackCard() {
  return (
    <div className="relative p-5 z-10 bg-white card">
      <div className="flex justify-between items-center w-16 h-16 border-3 border-black bg-amber-200 mb-5">
        {/* Icon or logo for the technology can go here */}
      </div>
      <h3 className="text-2xl mb-3">Technology Name</h3>
      <div>Icons and details about the technology can go here</div>
    </div>
  );
}
