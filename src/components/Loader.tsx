const Loader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="loader-spin" />
      <p className="text-muted-foreground text-sm animate-pulse">Reading the stars...</p>
    </div>
  </div>
);

export default Loader;
