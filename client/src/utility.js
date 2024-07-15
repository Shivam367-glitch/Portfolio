import { Form } from "react-bootstrap";

export const year = new Date().getFullYear();

export const handles = [
    {
      href: "https://www.linkedin.com/in/shivam-mishra-8aba7b179",
      iconName: "fa fa-linkedin fa-fw text-white"
    }, {
      href: "https://twitter.com/Shivamm3213",
      iconName: "fa fa-twitter fa-fw text-white"
    }, {
      href: "https://m.facebook.com/profile.php?id=100011628730183",
      iconName: "fa fa-facebook fa-fw text-white"
    }, {
      href: "https://www.instagram.com/txt2shivam",
      iconName: "fa fa-instagram fa-fw text-white"
    }
  ]

  export const handleClick = (navigate,url) => {
    navigate(url);
  }

  export const paths = [
    {
      to: '/',
      name: 'Home'
    },
    {
      to: '/about',
      name: 'About'
    },
    {
      to: '/projects',
      name: 'Projects'
    },
    {
      to: '/contact',
      name: 'Contact'
    },
    {
      to: '/resume',
      name: 'Resume'
    }
  ]

 export const formInitialState = {FirstName: "",LastName: "",Email: "",Phone: "",Message: ""}

  export function FormField(props) {
    return (
      <Form.Group className={props.className} controlId={props.name}>
       <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          size={props.size}
          autoComplete={props.autoComplete}
          pattern={props.pattern}
        />     
      </Form.Group>
    );
  }


  export const Educations = [
    {
      degree: `Bachelor's Degree`,
      year: '2019-2023',
      institute: `Regent Education & Research Foundation`
    },
    {
      degree: 'Higher Secondary',
      year: '2017-2019',
      institute: 'Gyan Bharati Vidyapith'
    },
    {
      degree: 'Secondary',
      year: '2016-2017',
      institute: 'Shree Digambar Jain Vidyalaya'
    }
  ]

  