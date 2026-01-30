import ComponentB from './ComponentB'

const ComponentA = ({name}) => {
  return (
    <>
      <h1>ComponentA</h1>
      <hr />
      <ComponentB name={name} />

    </>)
}

export default ComponentA