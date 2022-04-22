import Typography from './Typography';
const Header = ({ color }) => {
  return (
    <>
      <h3 style={{ color: color }}>hahahaha</h3>
    </>
  );
};
export default {
  title: 'header',
  component: Header,
};

export const Typozz = () => (
  <Header color="red">Typography Typography vip</Header>
);
