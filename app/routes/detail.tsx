import type { Route } from "./+types/detail";

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
  );
  const resp = await response.json();
  return { comments: resp };
}

const Detail = ({ loaderData }: Route.ComponentProps) => {
  const { comments } = loaderData || {};
  return (
    <div className="container mx-auto my-4">
      {comments?.map((comment) => {
        return (
          <div key={comment?.id}>
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <h3 className="text-lg text-gray-800 font-bold">
                {comment?.name || ""}
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                {comment?.email || ""}
              </p>
              <p className="text-gray-700">{comment?.body || ""}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
