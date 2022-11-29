export default function ProjectsList({
  image,
  alt,
  link,
  title,
  description,
  launch,
}) {
  console.log(image);
  return (
    <div className="lg:flex">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={image}
        alt={description}
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href={link}
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
          {title}
        </a>

        <p className="text-md text-gray-500 dark:text-gray-300">
          {description}
        </p>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          Projeto Lançado em: {launch}
        </span>
      </div>
    </div>
  );
}
