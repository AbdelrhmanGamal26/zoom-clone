const PagesHeader = ({title}: {title: string}) => {
  return (
    <h1 className="text-[clamp(18px,3vw,28px)] font-bold capitalize mb-8">
      {title}
    </h1>
  );
};

export default PagesHeader;
