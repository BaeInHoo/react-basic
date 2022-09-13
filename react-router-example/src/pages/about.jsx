import queryString from 'query-string';

export default function About(props) {
  const searchParams = props.location.search;
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));
  const query = queryString.parse(searchParams);
  console.log(query);
  return <div>About 페이지 입니다.</div>;
}