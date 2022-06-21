import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
// import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // Segunda forma de fazer
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  // Segunda forma de fazer

  // Primeira forma de fazer
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((response) => {
  //       console.table(response.data);
  //     });
  // }, []);
  // Primeira forma de fazer

  // return <h1 className="text-5xl">Hello World</h1>;

  return (
    <ul>
      {/* {data.lessons.map((lesson: Lesson) => ( */}
      {data?.lessons.map((lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
}

export default App;
