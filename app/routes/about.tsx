import type { Route } from "./+types/about";

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resp = await response.json();
  return resp;
}
const About = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-4 gap-4">
        {loaderData.map((item) => {
          return (
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item?.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item?.body}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default About;
