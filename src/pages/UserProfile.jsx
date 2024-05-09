import PropTypes from "prop-types";

export default function UserProfile({ name, age }) {
  return (
    <>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
