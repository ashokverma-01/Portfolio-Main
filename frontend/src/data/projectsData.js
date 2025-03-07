import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'
import hospital from "../assets/svg/projects/hospital.svg";
import placement_cell from "../assets/svg/projects/placement_cell.svg"
export const projectsData = [
    {
        id: 1,
        projectName: 'HospitalVend',
        projectDesc: "HospitalVend streamlines healthcare management, fostering seamless collaboration between administrators and vendors for efficient procurement, supply chain management, and inventory control, ultimately optimizing healthcare delivery.",
        tags: ['React Js','Redux','SCSS'],
        code: 'https://github.com/raviraj3214/Hospital_Admin__Dashboard__',
        demo: 'https://youtu.be/gfPwg4DmepE?feature=shared',
        image: hospital
    },
    {
        id: 2,
        projectName: 'Ecom Web App',
        projectDesc: "Transform your online business with our MERN e-commerce app and admin dashboard. Manage products, orders, and customers seamlessly. Redefine e-commerce for your success.",
        tags: ['MERN Stack'],
        code: 'https://github.com/raviraj3214/e-com-web-app',
        demo: 'https://lazy-gray-bunny-toga.cyclic.app/',
        image: five
    },
    {
        id: 3,
        projectName: 'Employee Review System',
        projectDesc: 'Empower your organization with our Express.js and MongoDB-based Employee Review System, featuring EJS templates. Streamline performance evaluations, feedback, and tracking seamlessly. Enhance your HR processes for success.',
        tags: ['Node.js', 'Express.js', 'Mongo DB'],
        code: 'https://github.com/raviraj3214/Employee_Review_Sys',
        demo: 'https://employee-review-system-o8ah.onrender.com',
        image: one
    },
    {
        id: 4,
        projectName: 'Placement Cell',
        projectDesc: "This project about placement cell and managing and scheduling student's placement ",
        tags: ['Node.js', 'MongoDb', 'EJS'],
        code: 'https://github.com/raviraj3214/Placement_Cell/',
        demo: 'https://placement-cell-dd04.onrender.com/',
        image: placement_cell
    },
    // {
    //     id: 5,
    //     projectName: 'E-Commerce App',
    //     projectDesc: 'A Simple E-commerce application',
    //     tags: ['React Native', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: five
    // },
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/