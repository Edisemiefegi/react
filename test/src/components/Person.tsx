interface Props{
name: string;
age: number;

}
function Person(props: Props) {
  return (
    <div>Person

        <p className="text-red-900">Name: {props.name}</p>
        <p>age: {props.age}</p>
    </div>
  )
}

export default Person