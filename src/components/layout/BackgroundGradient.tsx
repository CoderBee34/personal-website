export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
    </div>
  );
};
