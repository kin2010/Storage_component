// import useLocalStorage from "hooks/useLocalStorage";

import Alert from 'components/Alert/index';
import Button from '../components/button/index';
export default function Demo() {
  // const [auth, setAuth] = useLocalStorage("auth", {});

  return (
    <>
      <div style={{ paddingLeft: '30px', paddingTop: '30px' }}>
        <Button size="small">
          <span>Login</span>
        </Button>
        <br />
        <br />
        <Button size="large" variant="container">
          get STARTED
        </Button>
        <br />
        <br />
        <Button size="small" variant="outline">
          customer
        </Button>{' '}
        <br />
        <br />
        <Button
          onClick={() => {
            console.log('hehehe');
          }}
          fullWidth
          size="medium"
          variant="container"
        >
          Login
        </Button>
        <br />
        <br />
        <Button size="small" variant="container">
          Sign Up
        </Button>{' '}
        <br />
        <br />
        <Button fullWidth isLoading size="small" variant="container">
          Sign Up
        </Button>
        <br />
        <br />
        <Alert severity="success" variant="outlined">
          {' '}
          Invalid email/password credentials.
        </Alert>
        <br />
        <br />
        <Alert icon={<i className="far fa-thumbs-up"></i>} variant="outlined">
          Invalid email/password credentials.
        </Alert>
        <Alert icon={<i className="far fa-thumbs-up"></i>} variant="outlined">
          Invalid email/password credentials.
        </Alert>
        <Alert icon={<i className="far fa-thumbs-up"></i>} severity="error">
          {' '}
          Invalid email/password credentials.
        </Alert>
        <Alert
          icon={<i className="far fa-thumbs-up"></i>}
          severity="success"
          variant="outlined"
        >
          {' '}
          Invalid email/password credentials.
        </Alert>
        <Alert
          icon={<i className="far fa-thumbs-up"></i>}
          severity="success"
          variant="filled"
        >
          {' '}
          Invalid email/password credentials.
        </Alert>
        <Alert
          icon={<i className="far fa-thumbs-up"></i>}
          severity="info"
          variant="filled"
        >
          {' '}
          Invalid email/password credentials.
        </Alert>
        <Alert icon={<i className="far fa-thumbs-up"></i>} severity="info">
          {' '}
          Invalid email/password credentials.
        </Alert>
        <Alert icon={<i className="far fa-thumbs-up"></i>} severity="warning">
          {' '}
          Invalid email/password credentials.
        </Alert>
        {/* <Button variant="btn btn-primary btn-small">
        <span>sign up</span>
      </Button>
      <button>cc</button>
      <BTNCUSTOM variant="primary" disabled={true}>
        hahaad cc custom
      </BTNCUSTOM>
      <br />
      <Button fontSize="16px" variant="btn btn-primary">
        GET STARTED
      </Button>
      <br />
      <Button fontSize="13px" variant="btn btn-primary btn-block btn-lg">
        sign up
      </Button>
      <br />
      <Button variant="btn  btn-link">sign up</Button>
      <br /> */}
        {/* <Alert variant="outlined" severity="error">
        Invalid email/password credentials.
      </Alert>
      <Alert severity="error">Invalid email/password credentials.</Alert>
      <Alert severity="info">Invalid email/password credentials.</Alert>
      <Alert severity="success">Invalid email/password credentials.</Alert>
      <Alert icon={<i class="fal fa-acorn"></i>} severity="warning">
        Invalid email/password credentials.
      </Alert>
      <br />
      <Typography align="center" variant="h1" component="h1">
        this is perrfect
      </Typography>
      <Typography variant="h1">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>
      <Typography variant="h2">
        ONE MARKETPLACE... MULTIPLE WAYS TO WORK AND EARN
      </Typography>
      <Typography variant="h3">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>
      <Typography variant="h4">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>
      <Typography variant="h4_subtitle">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>
      <Typography variant="p">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>
      <Typography variant="span">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>
      <Typography variant="h4_subtitle" component="h1">
        WHERE
        <br />
        THE WORLD WORKS
      </Typography>

      <br />
      <Card title="What is Success Rate?"></Card> */}
      </div>
    </>
  );
}
