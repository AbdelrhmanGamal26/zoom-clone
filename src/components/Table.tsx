export default function Table({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-2 xl:gap-4 xl:flex-row xl:items-center w-full">
      <h1 className="text-[clamp(14px,1.5vw,18px)] font-medium text-sky-100">
        {title}
      </h1>
      <p className="truncate font-medium text-[clamp(12px,1.5vw,16px)] w-[99%] sm:w-auto">
        {description}
      </p>
    </div>
  );
}
