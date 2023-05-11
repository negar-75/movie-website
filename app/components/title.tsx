function Title({ title }: { title: string }) {
  return (
    <div className="title text-white font-semibold mb-8 relative flex items-center pr-4 ">
      <span className="flex-shrink lg:text-2xl text-white px-4 text-lg">
        {title}
      </span>
      <div className="flex-grow h-px bg-light"></div>
    </div>
  );
}

export default Title;
